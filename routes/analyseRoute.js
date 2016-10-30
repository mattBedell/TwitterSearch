const router = require('express').Router();
const watson = require('./../services/watsonService')
const watsonService = watson();

router.get('/', watsonService.searchWatson, (req, res) => {
   res.render('analyse');
});
module.exports = router;
