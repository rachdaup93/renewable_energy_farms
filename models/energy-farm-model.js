const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const energyFarmSchema = new Schema({
    name: { type: String, required: true },
    renewable_type: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    weather_quality: { type: Number, require: true },
    weather_quality_type: { type: String, require: true },
    total_units: { type: Number, require: true },
    operating_units: { type: Number, require: true },
    condition: { type: String, require: true },
    deployment_required: { type: Boolean, require: false },
    service_required: { type: Boolean, require: false },
  },
  // optional settings object for this schema
  {
    // adds "createdAt" and "updatedAt" fields to the schema
    timestamps: true
  });

const EnergyFarmModel = mongoose.model('energyFarm', energyFarmSchema);


module.exports = EnergyFarmModel;
