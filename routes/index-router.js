const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  // check for feedback messages from the sign up process
  res.locals.stylesheet = "/_css/index.css";
  res.render('index');
});

router.get('/solar-farm', (req, res, next) => {
  res.render('solar');
});

router.get('/wind-farm', (req, res, next) => {
  res.render('wind');
});

module.exports = router;
