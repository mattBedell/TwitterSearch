const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('SAVE ROUTE');
})

module.exports = router;
