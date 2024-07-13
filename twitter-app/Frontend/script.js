const axios = require('axios/dist/browser/axios.cjs');

let getbtn = document.getElementsByClassName('button')

getbtn.addEventListener('click', ()=>{
    
  let tweets = []
  //function to retrieve all the blogs, in the form of array
    axios.get('http://localhost:8000/tweets')
  .then(response => {
    tweets = response.data; // Handle the array of tweets
  })
  .catch(error => {
    console.error(error);
  });

    let show = tweets.map(it=>{  //storing tweets in an array called show
         it.tweet;
    });

    // DOM manipulation for appending show items as <li> on render.html
    let ul = document.querySelector('ul')
    show.forEach((item)=>{
      const li = document.createElement('li')
      const div = document.createElement('div').className('listbox')
      div.textContent = item 
      li.append(div)
      ul.appendChild(li)
    })
    window.location('render.html')
})


function pushTweets() {
    //function to create and push the post onto the backend
    let input = document.querySelector('.input')
    input.addEventListener('submit', ()=>{
      axios.post('http://localhost:8000/tweetIt', {
        tweet: input.value,
      })
      .then(i = console.log("Input Successful"))
      .catch(e = console.log(e)) 
    })
}

