const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  console.log('got at bookmyshow route')
})

router.get('theaters',(req,res)=>{
  console.log('got theaters')
})

router.get('/get-all-shows',(req,res)=>{
  console.log('getting all shows')
})

module.exports = router