const router = require('express').Router();

router.post('/', (req, res) => {
   res.send('THIS WORKED!');
})
router.get('/', (req, res) => {
   res.send('THIS IS INIT');
})

module.exports = router;
