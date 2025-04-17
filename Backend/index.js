require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const cors = require('cors');

//routes
const userRouter = require('./routes/user');
const mentorRouter = require('./routes/mentor');
//middlewares
app.use(bodyParser.json())
app.use(cors());
// Connection to db
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected..");
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and running `)
    })
  })
  .catch((error) => {
    console.log("Error on db connection: ", error)
  })
// Routes
app.use('/api/user', userRouter)
app.use('/api/mentor', mentorRouter)