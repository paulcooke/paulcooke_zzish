const mongoose = require('mongoose')

// name and ratio both set as required, name set as unique as well
const featureSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ratio: { type: Number, required: true },
  enabledEmails: { type: [String] },
  includedCountries: { type: [String] },
  excludedCountries: { type: [String] }
})

module.exports = mongoose.model('Feature', featureSchema)