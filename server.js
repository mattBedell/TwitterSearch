'use strict'

// Require packages
const express = require('express');
const logger = require('morgan');
// const Oauth = require('OAuth');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// const OAuth2 = Oauth.OAuth2;
const SECRET = 'tacos3000';
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// Set view engine and logger
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Require route files
const tweetRoute = require('./routes/twitterSearch');
const homeRoute = require('./routes/homeRoute');
const introRoute = require('./routes/introRoute');
const analyseRoute = require('./routes/analyseRoute');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const tweetsRoute = require('./routes/tweets')
const methodOverride = require('method-override');

// Set session cookie
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));
// Use method overide for posting/deleting data
app.use(methodOverride('_method'));

// Define route paths
app.use('/', homeRoute);
app.use('/intro', introRoute);
app.use('/search', tweetRoute);
app.use('/analyzeTweet', analyseRoute);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/userTweets', tweetsRoute)

// Set lib directory
app.use(express.static(__dirname + '/lib'));

// One time oauth use to get bearer token for twitter API
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
// Set server to listen on PORT
app.listen(PORT, console.log(`Server is listening on: ${PORT}`));
