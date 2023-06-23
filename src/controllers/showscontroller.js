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
    try{
      // check if by chance any seat is already booked for particular show
      // if not then continue else throw err pls select another seat as it is already booked
      const {seat_id, user_id, show_id}=req.body
      console.log(db.Bookings.associations,'association')
     const res= await db.sequelize.transaction(async(t)=>{
      const bookedSeat = await db.Bookings.findOne({
        where:{
          [Op.and]:[
            {seat_id: seat_id},
            {show_id: show_id}
          ]
        }
      },{transaction: t})
      console.log(bookedSeat,'seatfounnd')
      if(!bookedSeat){
       const booking = await db.Bookings.create({
          ...req.body
        },{
          transaction:t,
          lock: t.LOCK.UPDATE
        })

        console.log(booking,'booked')
        const show= await db.Shows.findOne({
          where:{
            id: show_id
          }
        },{transaction:t})
        const decrementedSeats = await show.decrement('seats_remaining', {by:1},{transaction:t})
        console.log(decrementedSeats,'seats updated')

      }
      else {
        throw new Error('Seat is already booked')
        // res.status(409).send({err: 'seat is already booked, please select another seat'})
      }
    })
    res.status(200).send(res)
  }
    catch(err){
      console.log(err)
      if (err.message === 'Seat is already booked') {
        res.status(409).send({ error: err.message });
      } else {
        res.status(500).send({ error: err });
      }
    }
  }
}

module.exports = {
  getAllShows,
  bookShow
}