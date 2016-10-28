const tClient = require('twitter');
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
    twitClient.get('search/tweets', {q:req.params.searchTweets}, (error, tweets, response) => {
      if(error) throw error;
      printData(tweets.statuses)
    })
  }
  return { searchTwitter };
};
