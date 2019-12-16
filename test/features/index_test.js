// some exlusions for my linter:
/* global describe, beforeEach, afterEach, it, expect, api */

const Feature = require('../../models/feature')

const testUserEd = {
  "email": "ed@zzish.com",
  "location": "GB"
}

const testUserNew = {
  "email": "monica@zzish.com",
  "location": "GB"
}

describe('GET /features', () => {
  it('should return a 200 response', done => {
    api.get('/features')
      .send(testUserEd)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/features')
      .send(testUserEd)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of strings)', done => {
    api.get('/features')
      .send(testUserEd)
      .end((err, res) => {
        res.body.forEach(feature => {
          expect(feature).to.be.a('string')
        })
        done()
      })
  })

  // can use ed to test for enableEmails as he isnt aligible for any of the other ones (where his email isn't enabled) due to included and excluded countries 
  it('should return supercool feature and simplified nav bar when we send it the user Ed', done => {
    api.get('/features')
      .send(testUserEd)
      .end((err, res) => {
        expect(res.body).to.be.an('array').that.eql(['SuperCoolFeature', 'SimplifiedNavBar'])
        done()
      })
  })

})