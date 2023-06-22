const express = require('express')
const { getAllShows, bookShow } = require('../controllers/showscontroller')
const router = express.Router()
const { query, check, checkSchema } = require('express-validator')

router.get('/', check(['theater_id', 'selected_date']).notEmpty().withMessage('send all params'), getAllShows)
router.post('/bookshow', checkSchema({
  user_id: {
    notEmpty: true,
    errorMessage: 'user_id is not present'
  },
  show_id: {
    notEmpty: true,
    errorMessage: 'show_id is not present'
  },
  seat_id: {
    notEmpty: true,
    errorMessage: 'seat_id is not present'
  },
}), bookShow)
module.exports = router