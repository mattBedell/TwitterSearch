const express = require('express');
const app = express();
const logger = require('morgan');
const Oauth = require('OAuth')
require('dotenv').config();
const tClient = require('twitter');
app.use(logger('dev'));

var twitClient = new tClient({
  consumer_key: `${process.env.API_KEY}`,
  consumer_secret: `${process.env.API_SECRET}`,
  bearer_token: `${process.env.API_BEARER}`
});

//const OAuth2 = Oauth.OAuth2;
twitClient.get('search/tweets', {q:'trump'}, (error, tweets, response) => {
  if(error) throw error;
  //console.log(response);
  tweets.statuses.forEach( (obj) => {console.log(obj.user);});
});
const PORT = process.env.PORT || 3000;












// const oauth2 = new OAuth2(
//    process.env.API_KEY,
//    process.env.API_SECRET,
//    'https://api.twitter.com/',
//    null,
//    'oauth2/token',
//    null);
//  oauth2.getOAuthAccessToken(
//    '',
//    {'grant_type':'client_credentials'},
//    function (e, access_token, refresh_token, results){
//      console.log('bearer: ',access_token);
//      oauth2.get('protected url',
//        access_token, function(e,data,res) {
//          try {
//          }
//          catch (e){
//          }
//       });
//    });

app.listen(PORT, console.log(`Server is listening on: ${PORT}`));
