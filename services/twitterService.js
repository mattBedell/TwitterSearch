'use strict'

// Require twitter package and tweet builder middleware
const tClient = require('twitter');
const myTools = require('./../lib/buildTweets');
// Instance of tweetbuilder middleware
const toolBox = myTools();
// Init twitter client package
const twitClient = new tClient({
  // Pass twitter client user Auth keys
  consumer_key: `${process.env.API_KEY}`,
  consumer_secret: `${process.env.API_SECRET}`,
  bearer_token: `${process.env.API_BEARER}`
});
// Export twitter middleware
module.exports = function twitterService () {
  // Service middleware
  const searchTwitter = (req, res, next) => {
    // Pass data twitter data to this function, attach to response object
    const printData = (data) => {
      res.myTweets = data;
      return next();
    }
    // Tweet client, contact twitter api ang get returned data
    twitClient.get('search/tweets', {q:req.query.findTwitters}, (error, tweets, response) => {
      if(error) throw error;
      // Pass to function to build tweet, attach to res object for next middleware
      printData(toolBox.buildTweets(tweets.statuses));
    })
  }
  return { searchTwitter };
};
