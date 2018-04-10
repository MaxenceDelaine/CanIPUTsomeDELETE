var express = require('express')
var router = express.Router()

//GET pour afficher le formulaire update-user.hbs ou delete-user.hbs
router.get('/:input', function(req, res, next) {
  if (isNaN(req.params.input)) {
    res.render('update-user')
  } else {
    res.render('delete-user')
  }
})

//PUT qui va prendre le paramètre name
router.put('/:name(\\w+)', function(req, res, next) {
  res.send('The new name is ' + req.params.name)
})

//DELETE qui va prendre le paramètre number
router.delete('/:input', function(req, res, next) {
  if (isNaN(req.params.input)) {
    res.send('Vous n\'êtes pas dans la matrice')
  } else {
    res.send('No more user with id ' + req.params.input)
  }
})

module.exports = router
