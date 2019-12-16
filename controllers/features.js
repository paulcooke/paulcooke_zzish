const Feature = require('../models/feature')

function index(req, res, next) {
  Feature
    .find()
    // .exec()
    .then(features => res.status(200).json(features))
    .catch(() => res.status(404).json({ message: 'No Features Found' }))
}

module.exports = {
  index
}