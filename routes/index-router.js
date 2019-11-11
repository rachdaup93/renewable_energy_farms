const express = require('express');
const router  = express.Router();
const surveyRouter = require('./survey-router');
const hljs = require('highlight.js/lib/highlight');
const json = require('highlight.js/lib/languages/json');
const renewableEnergyFarmsRouter = require('./renewable-energy-farms-router');
const EnergyFarmModel   = require('../models/energy-farm-model.js');
const solarData = require('../bin/site_locations/solar');
const windData = require('../bin/site_locations/wind');

hljs.registerLanguage('json', json);

router.get('/', (req, res, next) => {
  // check for feedback messages from the sign up process
  res.locals.stylesheet = "/_css/index.css";
  res.render('index');
});

router.get('/solar-farm', (req, res, next) => {
  const solarSite = solarData.locations[Math.floor(Math.random() * 10)];
  const solarCondition = solarData.conditions[Math.floor(Math.random() * 10)];

  res.locals.site = solarSite;
  res.locals.condition = solarCondition;
  res.locals.stylesheet = "/_css/main.css";
  res.render('sites/solar/solar_site.ejs');
});

router.get('/wind-farm', (req, res, next) => {
  const windSite = windData.locations[Math.floor(Math.random() * 10)];
  const windCondition = windData.conditions[Math.floor(Math.random() * 10)];

  res.locals.site = windSite;
  res.locals.condition = windCondition;
  res.locals.stylesheet = "/_css/main.css";
  res.render('sites/wind/wind_site.ejs');
});

router.get('/thank-you', (req, res, next) => {
  const survey_id = req.query.survey_id;
  // check for feedback messages from the sign up process
  res.locals.stylesheet = "/_css/thank_you.css";
  res.locals.hasHighlighting = true;

  if(survey_id) {
    EnergyFarmModel.findById(
      survey_id,
      (err, farm)=>{
        if(err){
          console.log(err);
          next(err);
          return;
        }
        const highlightedJson = hljs.highlight('json', JSON.stringify(farm)).value;
        res.locals.dataOutput = highlightedJson
          .replace('{', '{<br>').replace('}', '<br>}').replace(/,/g, ',<br/>');
        res.render('sites/thank_you');
      }
    );
  }

});

router.use('/surveys', surveyRouter);
router.use('/api', renewableEnergyFarmsRouter);

module.exports = router;
