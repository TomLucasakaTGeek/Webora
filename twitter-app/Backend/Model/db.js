const mongoose = require('mongoose')

const connectDB = mongoose.connect('mongodb+srv://admin:9876543210@cluster0.sqqgjt1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

module.exports = { connectDB }