const express = require('express')
const app = express()
const bookmyshow = require('./routes/bookmyshow')
const { Sequelize } = require('sequelize');
require('dotenv').config();
const PORT =  process.env.PORT || 5055

app.get('/',async(req,res)=>{
  console.log('request generated at root route')
  res.send('helllo')
})

app.use('/api/v1/bookmyshow', bookmyshow )
app.use(express.json())
const sequelize = new Sequelize('postgres://localhost:5432/postgres')

const connectDb= async()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectDb()







app.use(express.json())


app.listen(PORT, ()=>{
  console.log(`server started on ${PORT}`)
})
