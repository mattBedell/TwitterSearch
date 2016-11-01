'use strict'
//Thanks to WDI instructional staff for user auth template

const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });

//Authenticate user and display user's saved favorites, pass favorites inside response object
router.get('/show', authenticate, getFavorites, (req,res) => {
  res.render('favShow', {
    tweets: res.tweets,
  });
});

// Delete favorites with db id passed as parameter for middleware to access correct document to delete
router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/userTweets/show');
});

// Save user favorite to database
router.post('/save', urlParser, saveFavorite, (req, res) => {
  res.redirect('/userTweets/show')
});

module.exports = router;
