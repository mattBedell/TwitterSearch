const fetch = require('node-fetch');
let apiKey = process.env.WATSON_KEY;
module.exports = function watsonService () {
  const searchWatson = (req, res, next) => {
    let placeHolderSearch = "This is placeholder text to search the watson api"
    const API_URL = `https://gateway-a.watsonplatform.net/calls/text/TextGetCombinedData?apikey=${apiKey}&text="${req.body.submitedTweet.text}"&showSourceText=1&extract=doc-sentiment,doc-emotion,concepts&outputMode=json`;
    fetch(API_URL).then((r)=> r.json())
    .then((result) => {
      res.analysis = result;
      console.log(result);
      res.tweet = req.body.submitedTweet;
      next();
    })
  }
  return { searchWatson };
};
