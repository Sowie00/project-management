const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/ProjectManagement')
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB;