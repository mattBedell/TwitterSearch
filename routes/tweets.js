const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });
router.get('/', authenticate, getFavorites, (req, res) => {
  res.render('music/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.get('/show', authenticate, getFavorites, (req,res) => {
  res.render('favShow', {
    tweets: res.tweets,
  })
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/music');
});

router.post('/save', urlParser, saveFavorite, (req, res) => {
  res.redirect('/userTweets/show')
});

module.exports = router;
