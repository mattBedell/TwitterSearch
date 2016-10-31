'use strict'
const tClient = require('twitter');
const myTools = require('./../lib/buildTweets');
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
    twitClient.get('search/tweets', {q:req.query.findTwitters}, (error, tweets, response) => {
      if(error) throw error;
      printData(toolBox.buildTweets(tweets.statuses));
    })
  }
  return { searchTwitter };
};
