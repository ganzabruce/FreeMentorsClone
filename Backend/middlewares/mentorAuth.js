const jwt = require('jsonwebtoken')
const Mentor = require('../models/mentor')
const mentorAuth = async (req,res,next) =>{
  const {authorization} = req.headers
  if(!authorization){
    return res.status(401).json({error: "you should provide the token in headers"})
  }
  const token = authorization.split(' ')[1]
  try {
    const {_id} = await jwt.verify(token,process.env.JWT_SECRET)
    req.mentor = await Mentor.findOne({_id}).select('_id')
    next()
  } catch (error) {
    return res.status(401).json({error: error.messsage})
  }
}

module.exports = mentorAuth