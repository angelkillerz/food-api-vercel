const dotenv = require('dotenv');
const express = require('express');
const connectDb = require('./config/dbConnection');
const PORT = process.env.PORT || 5900;

const app = express();
const cors = require('cors');


connectDb();
//cross origin
app.use(cors());
//url encoded data
app.use(express.urlencoded({ extended: false }));
//built in middleware for json
app.use(express.json({extended: false}));


app.use('/api/foods', require('./routes/foodRoute'))

app.get('/show', (req, res) => {
    res.send('Hello World');
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


