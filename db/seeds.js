const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Feature = require('../models/Feature')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return Feature.create([
          {
            "name": "SuperCoolFeature",
            "ratio": 0.5,
            "enabledEmails": ["ed@zzish.com", "pau@zzish.com"],
            "includedCountries": ["GB"],
            "excludedCountries": []
          },
          {
            "name": "MarketingBanner",
            "ratio": 1,
            "enabledEmails": [],
            "includedCountries": ["US"],
            "excludedCountries": []
          },
          {
            "name": "SimplifiedNavBar",
            "ratio": 0,
            "enabledEmails": ["ed@zzish.com"],
            "includedCountries": [],
            "excludedCountries": []
          },
          {
            "name": "EnhancedDashboardFeature",
            "ratio": 0.5,
            "enabledEmails": ["anurag@zzish.com"],
            "includedCountries": ["US", "CA"],
            "excludedCountries": []
          },
          {
            "name": "NewUserOnboardingJourney",
            "ratio": 0.25,
            "enabledEmails": ["thom@zzish.com"],
            "includedCountries": [],
            "excludedCountries": ["CA", "GB"]
          }
        ])
          .then(features => console.log(`${features.length} features created`))
          .catch(err => console.log(err))
          .finally(() => mongoose.connection.close())
      })
  })