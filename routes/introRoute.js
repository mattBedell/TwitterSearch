const router = require('express').Router();

router.get('/', (req, res) => {
   res.render('searchIntro');
});
module.exports = router;
