const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    tweet: String
})

const tweets = mongoose.model('blog', tweetSchema)

module.exports = { tweets }