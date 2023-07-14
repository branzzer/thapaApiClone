require('dotenv').config()
const express = require('express');

// local  imports
const productRoutes = require('./routes/product');
const connectDB = require('./db/connectDb');


const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("hello Home")
})

app.use('/api/products', productRoutes);



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`express server is running`)
        })
    } catch (error) {
        console.log(`Eroor starting express server ERROR => ${error}`)
    }
}

start()

