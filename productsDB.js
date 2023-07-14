require('dotenv').config();
const connectDB = require("./db/connectDb");
const products = require('./models/product');
const jsonProduct = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await products.create(jsonProduct);
        console.log(`Success json data transfer from products.josn to DB`);

    } catch (error) {
        console.log(`Error connecting mongodb in productsDB file ERROR=> ${error}`)
    }
}

start();