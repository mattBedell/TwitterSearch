'use strict'

const router = require('express').Router();
const TwittService = require('./../services/twitterService');
// Init twitter search middleware
const twitService = TwittService();

//Init route and call twittersearch middleware, data passed to ejs file to be rendered
router.get('/', twitService.searchTwitter, (req, res) => {
   res.render('searchTwitter', {
     tweets: res.myTweets,
   });
})
module.exports = router;
