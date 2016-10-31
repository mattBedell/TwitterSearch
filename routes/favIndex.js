'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Favorites are here');
})

module.exports = router;
