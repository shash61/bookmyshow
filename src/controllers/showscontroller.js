const { validationResult } = require("express-validator")
const { Op } = require('sequelize');
const db = require("../models");
const {getDay}  = require('../utilityfunctions/utility')


const getAllShows = async (req,res)=>{
  console.log(req.query)
  const errors = validationResult(req).array()
  if(errors.length>0){
    res.status(422).send({err: errors})   
  }
  else{
    try{
      const [year,month,date] = req.query.selected_date.split('-')
      const dayOfYear = getDay(req.query.selected_date)
      const shows = await db.Shows.findAll({
        where:{
          [Op.and]: [
            db.sequelize.literal(`date_part('year', "Shows"."show_time") = ${year}`),
            db.sequelize.literal(`date_part('month', "Shows"."show_time") = ${month}`),
            db.sequelize.literal(`date_part('doy', "Shows"."show_time") = ${dayOfYear}`),
            {theater_id: req.query.theater_id}
          ]
        },
        include: [
          {
            model: db.Movies,
          }
        ],
      })
      res.status(200).json({shows})
    }catch(err){
      res.status(500).json({err:err})
    }
  }
}

const bookShow = async(req,res)=>{
  const errors = validationResult(req).array()
  console.log(req.body,errors)
  
  if(errors.length>0){
    res.status(422).send({err:errors})
  }
  else{
    res.status(200).send('hurray')
  }
}

module.exports = {
  getAllShows,
  bookShow
}