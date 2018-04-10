var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue dans la quête de la souffrance ultime!' });
});

module.exports = router;
