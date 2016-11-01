'use strict'

const router = require('express').Router();
// Init routes with various methods and page directs
router.get('/', (req, res) => {
   res.render('index');
});
router.get('/signup', (req, res) => {
  res.render('signup');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/home', (req, res) => {
  res.render('app')
})
module.exports = router;
