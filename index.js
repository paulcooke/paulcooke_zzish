const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/experimentation1'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  },
  () => console.log('Mongo is connected')
)

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))


