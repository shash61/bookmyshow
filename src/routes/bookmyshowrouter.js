const express = require('express')
const bookMyShowController = require('../controllers/bookmyshowcontroller')
const router = express.Router()
const theaterRouter = require('./theatersrouter')
const showsRouter = require('./showsrouter')

router.get('/',bookMyShowController.rootRouteBookMyShow)

router.use('/theaters', theaterRouter)

router.use('/shows', showsRouter)

module.exports = router