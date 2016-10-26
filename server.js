const express = require('express');
const logger = require('morgan');
const Oauth = require('OAuth')
require('dotenv').config();
const OAuth2 = Oauth.OAuth2;
const PORT = process.env.PORT || 3000;
const app = express();

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
