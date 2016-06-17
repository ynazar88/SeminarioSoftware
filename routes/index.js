var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req,res,next){
  res.locals.project = "Mi App Start Page";
  next();
});

router.get('/', function(req, res, next) {
  var inicio="inicio";
  res.render('index', { title: 'index', inicio:'inicio' });
});

router.get('/Estrategias', function(req, res, next) {
  var estrategia="estrategias";
  res.render('Estrategias', { title: 'estrategia', inicio:'estrategias' });
});
router.get('/somos', function(req, res, next) {
  var somos="somos";
  res.render('somos',{ title: 'somos', somos:'somos' });
});
router.get('/historiasDeExito', function(req, res, next) {
  var historias="historia"
  res.render('historiasDeExito', { title: 'historiasDeExito',historias:'historias' });
});
router.get('/nuestroEquipo', function(req, res, next) {
  var equipo="equipo";
  res.render('nuestroEquipo', { title: 'nuestroEquipo',equipo:'equipo' });
});
router.get('/contact', function(req, res, next) {
  var contacto='contacto';
  res.render('contact', { title: 'contact',contacto:'contacto' });
});

module.exports = router;
