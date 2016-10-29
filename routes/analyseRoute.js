const router = require('express').Router();

router.get('/', (req, res) => {
   res.render('analyse');
});
router.post('/', (req, res) => {
   res.send('this happened');
});
module.exports = router;
