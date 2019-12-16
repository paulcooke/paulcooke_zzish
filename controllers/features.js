const Feature = require('../models/feature')

// return all 'eligible' features, and then apply the relevant ratio to those without an enabled email address
// for the response to be an array of strings, map the objects to feature.name
function index(req, res, next) {
  Feature
    .find({
      $or: [
        { enabledEmails: { $in: req.body.email } },
        { $and: [
          { $or: [ 
            { includedCountries: { $in: req.body.location } },
            { includedCountries: [] }    
          ] }, 
          { excludedCountries: { $nin: req.body.location } }
        ] }
      ]
    })
    .then(features => features.filter(feature => {
      if (feature.enabledEmails.includes(req.body.email)) return feature
      if (Math.random() <= feature.ratio) return feature 
    }))
    .then(features => res.status(200).json(features.map(feature => feature.name)))
    .catch(() => res.status(404).json({ message: 'No Features Found' }))
}

module.exports = {
  index
}