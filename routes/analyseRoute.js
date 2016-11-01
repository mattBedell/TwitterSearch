'use strict'
// Require packages, router
const router = require('express').Router();
const watson = require('./../services/watsonService')
const bodyParser = require('body-parser');

// Init body parser middleware
const urlParser = bodyParser.urlencoded({ extended: true });
const watsonService = watson();
// Route and middleware
router.post('/', urlParser, watsonService.searchWatson, (req, res) => {
  //Data to be passed to ejs file to display data
  res.render('analyse', {
    analysis: res.analysis,
    tweet: res.tweet,
    concepts: res.concepts
  });
});
module.exports = router;
