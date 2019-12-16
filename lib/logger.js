function logger(req, res, next) {
  console.log(`${req.method} request was made to ${req.url}`)
  next() // to make sure the request moves on to the next middleware (the router)
}

module.exports = logger