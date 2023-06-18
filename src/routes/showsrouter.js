const express = require('express')
const { getAllShows } = require('../controllers/showscontroller')
const router = express.Router()
const { query, check } = require('express-validator')

router.get('/', check(['theater_id', 'selected_date']).notEmpty().withMessage('send all params'), getAllShows)


module.exports = router