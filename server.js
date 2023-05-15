const dotenv = require('dotenv');
const express = require('express');
const connectDb = require('./config/dbConnection');
const app = express();
const PORT = process.env.PORT || 5900;

connectDb();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use('/api/foods', require('./routes/foodRoute'))


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


