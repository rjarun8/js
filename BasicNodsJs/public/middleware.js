const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})


app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})