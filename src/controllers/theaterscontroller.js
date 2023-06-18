const { validationResult } = require("express-validator")
const Theater = require('../models/theater')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/postgres')

const getAllTheaters = async(req,res)=>{
const errors = validationResult(req).array()
if(errors.length>0){
  console.log(errors,req.query)

  res.status(422).send({err: errors})
}
else{
  try{
    const theaters = await Theater(sequelize,DataTypes).findAll({
      where:{
        city: req.query.city
      }
    })
    res.status(200).json({data: theaters})
  }catch(err){
    console.log(err)
  }
}
}


module.exports = {
getAllTheaters
}