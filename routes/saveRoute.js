const router = require('express').Router();
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });

router.post('/', urlParser, (req, res) => {
  res.send('SAVE ROUTE');
})

module.exports = router;
