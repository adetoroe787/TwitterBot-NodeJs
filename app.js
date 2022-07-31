const TwitterPackage = require('twitter');

let secret = {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
}

const Twitter = new TwitterPackage(secret)

Twitter.post('statuses/update', {status: 'This is a sample automated tweet'}, function(error, tweet, response){
    if(error){
        console.log(error);
    }
    console.log(tweet);
    console.log(response)
})