process.env.NODE_ENV = 'test'

const chai = require('chai')
global.expect = chai.expext

const supertest = require('supertest')
const app = require('../index')

global.api = supertest(app)