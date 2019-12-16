// some exlusions for my linter:
/* global describe, beforeEach, afterEach, it, expect, api */

const Feature = require('../../models/feature')

const testUserEd = {
  "email": "ed@zzish.com",
  "location": "GB"
}

describe('GET /features', () => {
  it('should return a 200 response', done => {
    applicationCache.get('./features')
      .send(testUserEd)
      .end((err, res)) => {
        expect(res.status).to.eq(200)
        done()
      }
  })
})