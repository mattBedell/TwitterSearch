const router = require('express').Router();
const TwittService = require('./../models/twitterService');
const twitService = TwittService();

router.get('/', twitService.searchTwitter, (req, res) => {
   res.render('searchTwitter', {
     tweets: res.myTweets,
   });
})
module.exports = router;
