const express = require('express')
const { getAllTheaters, getAllShows } = require('../controllers/theaterscontroller')
const { query, check } = require('express-validator')
const router = express.Router()

router.get('/', check('city').notEmpty().withMessage("city should not be empty"), getAllTheaters)

module.exports = router