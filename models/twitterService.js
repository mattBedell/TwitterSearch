const tClient = require('twitter');
const myTools = require('./../strTest/test');
const toolBox = myTools();
const twitClient = new tClient({
  consumer_key: `${process.env.API_KEY}`,
  consumer_secret: `${process.env.API_SECRET}`,
  bearer_token: `${process.env.API_BEARER}`
});

module.exports = function twitterService () {

  const searchTwitter = (req, res, next) => {
    const printData = (data) => {
      res.myTweets = data;
      return next();
    }
    twitClient.get('search/tweets', {q:req.params.searchTweets, count:1}, (error, tweets, response) => {
      if(error) throw error;
      toolBox.cleanTweet(tweets.statuses);
       //console.log(tweets.statuses);
      //  console.log(tweets.statuses[0].entities.hashtags);
      //  console.log(tweets.statuses[0].entities.urls);
      //  console.log(tweets.statuses[0].entities.symbols);
      //  console.log(tweets.statuses[0].entities.user_mentions);
      printData(tweets.statuses)
    })
  }
  return { searchTwitter };
};
