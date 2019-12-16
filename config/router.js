const router = require('express').Router()
const features = require('../controllers/features')

router.route('/features')
  .get(features.index)

module.exports = router