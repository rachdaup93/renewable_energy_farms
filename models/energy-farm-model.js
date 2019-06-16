const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const energyFarmSchema = new Schema({
    name: { type: String, required: true },
    renewableType: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    weatherQuality: { type: Number, require: true },
    weatherQualityType: { type: String, require: true },
    totalUnits: { type: Number, require: true },
    operating_units: { type: Number, require: true },
    condition: { type: String, require: true },
    deployment_required: { type: Boolean, require: false },
    service_required: { type: Boolean, require: false },r
    unit_capacity: { type: Number, require: true },
  },
  // optional settings object for this schema
  {
    // adds "createdAt" and "updatedAt" fields to the schema
    timestamps: true
  });

const EnergyFarmModel = mongoose.model('energyFarm', energyFarmSchema);


module.exports = EnergyFarmModel;
