var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sirius Radio' });
});

router.get('/radio', function(req, res, next) {
  res.render('page/popup', { title: 'Sirius Radio', laytout: false });
});

router.get('/contact', function(req, res, next) {
  res.render('page/contact', {title: 'Sirius radio | Contact'})
});

router.get('/sitemap', function(req, res, next) {
  res.render('page/sitemap', {title: 'Sirius radio | Site Map'})
});


module.exports = router;
