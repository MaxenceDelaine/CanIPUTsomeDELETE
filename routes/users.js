var express = require('express')
var router = express.Router()

//GET pour afficher le formulaire update-user.hbs ou delete-user.hbs
router.get('/:input', function(req, res, next) {
  if (isNaN(req.params.input)) {
    console.log(req.params.input);
    res.render('update-user', {input: req.params.input})
   } else {
    console.log(req.params.input);
     res.render('delete-user', {input: req.params.input})
   }
})

//PUT qui va prendre le paramètre name
router.put('/:input', function(req, res, next) {
  if (isNaN(req.params.input)) {
    res.send(`The new name is ${req.body.user}`);
  } else {
    res.send('ERROR: wrong parameter')
  }
})

//DELETE qui va prendre le paramètre number
router.delete('/:input', function(req, res, next) {
  if (!isNaN(req.params.input)) {
    res.send(`No more user with id ${req.params.input}`);
  } else {
    res.send(`Vous n'êtes pas dans la matrice`)
  }
})

module.exports = router
