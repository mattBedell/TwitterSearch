const fetch = require('node-fetch');
let apiKey = process.env.WATSON_KEY;
module.exports = function watsonService () {
  const searchWatson = (req, res, next) => {
    const API_URL = `https://gateway-a.watsonplatform.net/calls/text/TextGetCombinedData?apikey=${apiKey}&text="I like to ski and run and jump"&showSourceText=1&extract=doc-sentiment,doc-emotion,concepts&outputMode=json`;
    fetch(API_URL).then((r)=> r.json())
    .then((result) => {
      res.data = result;
      console.log(result);
      next();
    })
  }
  return { searchWatson };
};
