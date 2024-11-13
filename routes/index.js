var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {page:'LOGIN', menuId:'login'});
});

router.get('/register', function(req, res, next) {
  res.render('register', {page:'REGISTRATION', menuId:'register'});
});
module.exports = router;
