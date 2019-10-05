var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cards', function(req, res, next) {
  res.render('components/cards');
});

module.exports = router;
