const express = require('express');
const router  = express.Router();
const surveyRouter = require('./survey-router');
const renewableEnergyFarmsRouter = require('./renewable-energy-farms-router');

router.get('/', (req, res, next) => {
  // check for feedback messages from the sign up process
  res.locals.stylesheet = "/_css/index.css";
  res.render('index');
});

router.get('/solar-farm', (req, res, next) => {
  res.locals.stylesheet = "/_css/solar-farm.css";
  res.render('solar');
});

router.get('/wind-farm', (req, res, next) => {
  res.locals.stylesheet = "/_css/wind-farm.css";
  res.render('wind');
});


router.use('/surveys', surveyRouter);
router.use('/api', renewableEnergyFarmsRouter);

module.exports = router;
