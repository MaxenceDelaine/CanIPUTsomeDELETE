var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue dans la matrice' });
});

module.exports = router;
