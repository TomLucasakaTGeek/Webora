const express = require('express')
const cors = require('cors')
const { connectDB } = require('./Model/db')
const { tweets } = require('./Model/schema')
const app = express()
const port = 8000

app.get('/', (req, res)=>{
    res.send("Hello there !")
})

app.get('/tweets', async (req, res)=>{        //get the tweets
   try {
    const tweets = await tweets.find()
    res.json(tweets) 
   } catch(error) {
    console.log(error)
    res.status(403).send('Error occured')
   }
})

app.get('/tweetIt', async (req, res)=>{       //post the tweets
    let published = await tweets.create({
        tweet: "My name is Tanmay"
    })
    res.send(published)
    
    // let tweet = req.body
    // console.log(tweet)
    // try {
    //     const userData = new tweets(tweet)  
    //     await userData.save() 
    //     console.log("Tweet Published")
    //     res.status(200).send("Tweet Published")
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).send('Error occured')
    // }
})

app.listen(port, async ()=>{
    try {
        await connectDB
        console.log('Connected to Database')
    } catch(e) {
        console.log(e)
    }
    console.log(`Connected at Port: ${port}`)
})