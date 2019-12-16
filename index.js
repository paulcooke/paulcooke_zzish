const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const logger = require('./lib/logger')

const router = require('./config/router')
const { port, dbURI } = require('./config/environment')


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  },
  () => console.log('Mongo is connected')
)

// body parser first
app.use(bodyParser.json())

// logger middleware to show the incoming request
app.use(logger)

// router middleware
app.use('/', router)

// catch all
app.use('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.listen(port, () => console.log(`Up and running on port ${port}`))

module.exports = app
