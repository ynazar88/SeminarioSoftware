var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req,res,next){
  res.locals.project = "Mi App Start Page";
  next();
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/somos', function(req, res, next) {
  res.render('somos', { title: 'Express' });
});
router.get('/historiasDeExito', function(req, res, next) {
  res.render('historiasDeExito', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
