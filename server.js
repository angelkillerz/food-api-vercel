const dotenv = require('dotenv');
const express = require('express');
const connectDb = require('./config/dbConnection');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 5900;

connectDb();
//cross origin
app.use(cors(corsOptions));
//url encoded data
app.use(express.urlencoded({ extended: false }));
//built in middleware for json
app.use(express.json());


app.use('/api/foods', require('./routes/foodRoute'))

app.get('/show', (req, res) => {
    res.send('Hello World');
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


