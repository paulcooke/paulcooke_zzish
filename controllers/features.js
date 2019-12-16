const Feature = require('../models/feature')

function index(req, res, next) {
  Feature
    .find()
    .then(features => res.status(200).json(features.map(feature => feature.name)))
    .catch(() => res.status(404).json({ message: 'No Features Found' }))
}

module.exports = {
  index
}