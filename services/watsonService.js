'use strict'

const fetch = require('node-fetch');

const apiKey = process.env.WATSON_KEY;
module.exports = function watsonService() {
  const searchWatson = (req, res, next) => {
    // const placeHolderSearch = "This is placeholder text to search the watson api"
    // Point to API endpoint with proper search params, include api key
    const API_URL = `https://gateway-a.watsonplatform.net/calls/text/TextGetCombinedData?apikey=${apiKey}&text="${req.body.submitedTweet.text}"&showSourceText=1&extract=doc-sentiment,doc-emotion,concepts&outputMode=json`;
    // Fetch Data from api
    fetch(API_URL).then(r => r.json())
    .then((result) => {
      // Attach watson api data to response object
      res.analysis = result || [];
      // Attach submitted tweet data to response object, pulled from URL encoded form submission
      res.tweet = req.body.submitedTweet;
      next();
    })
    .catch((err) => {
      // Catch error and log to console
      console.log(err);
      res.error = err;
      next();
    });
  }
  // Functions to be returned when exported
  return { searchWatson };
};
