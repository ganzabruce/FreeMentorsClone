const bcrypt = require('bcrypt');
const Mentor = require('../models/mentor');
const MentorshipSession = require('../models/mentorshipSession')
const jwt = require('jsonwebtoken')
const { signUpSchema } = require('../helper/validation');
const createToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'3d'})
}
//signup logic
exports.signUpMentor = async (req, res) => {
    try {

        const { error } = signUpSchema.validate(req.body);
        if (error) {
            throw Error(error)
        }
        const { firstName, lastName , email, password ,address , bio , occupation , expertise } = req.body;
        const userInfo = await Mentor.findOne({ email: email })
        if (userInfo) {
            throw Error('user already registered')
        }
        const hashPassword = await bcrypt.hash(password, 10);
        try {
            const mentor = await Mentor.create({
                firstName: firstName,
                lastName : lastName ,
                email: email,
                password: hashPassword,
                address: address,
                bio: bio,
                occupation: occupation,
                expertise : expertise 
            })
            console.log('user created')
            const token = createToken(mentor._id)
            return res.status(200).json({mentor,token})
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({error: error.message})
            }
            res.status(500).json({error: error.message})
        }
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}
exports.loginMentor = async (req, res) => {  
    const { email, password } = req.body;  
    try {  
        const mentor = await Mentor.findOne({ email: email });  
        if (!mentor) {  
            throw Error('mentor not found')
        }
        const isAuthenticated = await bcrypt.compare(password, mentor.password);  
        if (!isAuthenticated) {  
            throw Error ('invalid credentials') 
        }  
        const mentorToken = createToken(mentor._id)
        console.log("user logged in");  
        res.status(200).json({mentor,mentorToken})
    } catch (error) {  
        console.error(error);  
        return res.status(500).json({error:error.message});  
    }  
};  
//get pending sessions
exports.getPendingSessions = async (req,res)=>{
    try {
        const pendingSessions = await MentorshipSession.find({status: "pending"})
        if (pendingSessions.length === 0){
            console.log('no pending sessions')
            return res.json({msg: "no pending sessions requests"})
        }
        res.status(200).json({pendingSessions})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
//logging out
exports.logoutMentor = (req,res) =>{
    res.clearCookie('mentoToken')
    res.json({msg :'mentor logged out'})
}
