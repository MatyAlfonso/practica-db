var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'MOVIES' });
});
router.get('/detail/:id', function(req, res, next) {
    res.render('movies-detail');
  });
  router.get('/new', function(req, res, next) {
    res.render('movies-new');
  });
  router.get('/recommended', function(req, res, next) {
    res.render('movies-recommended');
  });
module.exports = router;