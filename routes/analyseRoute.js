'use strict'
const router = require('express').Router();
const watson = require('./../services/watsonService')
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });
const watsonService = watson();

router.post('/', urlParser, watsonService.searchWatson, (req, res) => {
   res.render('analyse', {
      analysis: res.analysis,
      tweet: res.tweet,
      concepts: res.concepts
   });
});
module.exports = router;
