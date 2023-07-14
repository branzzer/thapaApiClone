const mongoose = require('mongoose');


const connectDB = async (uri) => {
    console.log('connectDB')
    return mongoose.connect(uri)
}

module.exports = connectDB