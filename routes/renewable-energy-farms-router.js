//required packages and models for authenication router
const express           = require('express');
const router            = express.Router();
const EnergyFarmModel   = require('../models/energy-farm-model.js');
const multer            = require('multer');

// end of packages and models

// multer file uploads implementation
const myUploader =  multer({
  dest: __dirname + '/../public/_images/user_images/uploads/'
})

router.get('/renewable-energy-farms', (req, res, next) => {
  let query = {};
  let params = req.params;
  
  query.renewable_type = params.renewable_type;

  EnergyFarmModel.find(
    query,
    (err, farms)=>{
      if(err){
        next(err);
        return;
      }
      console.log(farms);

      res.status(200).json(farms);
    }
  );
});

router.get('/renewable-energy-farms/:id',(req,res,next) => {
  EnergyFarmModel.findById(
    req.params.id,
    (err, farm)=>{
      if(err){
        next(err);
        return;
      }
      console.log(farm);

      res.status(200).json(farm);
    }
  );
});

router.post('/renewable-energy-farms', (req, res, next) => {
  const farm = new EnergyFarmModel({
    name: req.body.name,
    renewable_type: req.body.renewable_type,
    location: req.body.location,
    email: req.body.email,
    weather_quality: req.body.weather_quality,
    weather_quality_type: req.body.weather_quality_type,
    total_units: req.body.total_units,
    operating_units: req.body.operating_units,
    condition: req.body.condition,
    deployment_required: req.body.deployment_required,
    service_required: req.body.service_required,
    unit_capacity: req.body.unit_capacity,
  });

  farm.save((err)=>{
    if(farm.errors){
      return res.status(400).json({
        errorMessage: 'Database validation failed.',
        validationErrors: farm.errors,
        requestInfo: req
      });
    }
    if(err){
      return res.status(500).json({errorMessage: 'Could not submit renewable energy farm survey.'});
    }

    res.status(200).json(farm);    
  });
});

module.exports = router;
