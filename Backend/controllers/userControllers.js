const bcrypt = require('bcrypt');
const User = require('../models/user');
const Mentor = require('../models/mentor');
const jwt = require('jsonwebtoken')
const MentorshipSession = require('../models/mentorshipSession')
const { UserSignUpSchema } = require('../helper/uservalidation');

//create token 

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'3d'})
}


//signup logic
exports.signUp = async (req, res) => {
    try {
        const { error } = UserSignUpSchema.validate(req.body);
        if (error) {
            throw Error({error : error.details[0].message})
        }
        const { email, password } = req.body;
        const userInfo = await User.findOne({ email: email })
        if (userInfo) {
            throw Error('email already in use')
        }
        const hashPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({
                email: email,
                password: hashPassword,
            })
            const userToken = createToken(user._id)
            console.log(user)
            return res.status(200).json({user,userToken})
        } catch (error) {
            console.log(error.message)
            if(error.code === 11000){
                res.status(409).json({error:error.message})
            }
            res.status(500).json({error: error.message})
        }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
//login logic
exports.loginUser = async (req,res) =>{
    const {email , password} = req.body
    try {
        const user = await User.findOne({email: email})
        if(!user){
            throw Error('user not found , please signup first')
        }
        const isAuthenticated  = await bcrypt.compare(password, user.password)
        if(!isAuthenticated){
            throw Error( "invalid credentials")
        }
        const userToken = createToken(user._id)
        res.status(200).json({user,userToken})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
//logout logic
exports.logoutUser = (req,res)=>{
    res.clearCookie('userToken')
    console.log('logged out')
    res.json({redirect: '/user/login'})
}
//viewing all mentors
exports.getMentors = async (req,res) =>{
    try {
        const allMentors = await Mentor.find()
        res.status(200).json({allMentors : allMentors})
        console.log('sent list of all mentors')
    } catch (error) {
        return res.status(500).json({msg: "internal server error"})
    }
}
//viewing specific mentor
exports.getSpecificMentor = async (req,res) =>{
    const {id} = req.params
    try {
        const oneMentors = await Mentor.findById(id)
        if(oneMentors.length === 0){
            return res.json({message: "no mentor found"})
        }
        console.log('sent list of all mentors')
        res.status(200).json({oneMentors : oneMentors})
    } catch (error) {
        return res.status(500).json({msg: "internal server error"})
    }
}
//requesting mentorship session 
exports.requestSession = async (req,res)=>{
    const {mentorId , menteeId , questions ,menteeEmail } = req.body
    try {
        const session = await MentorshipSession.create({
            mentorId, 
            menteeId, 
            questions,
            menteeEmail,
            status: "pending"
        })
        console.log(session)
        res.status(200).json({msg : 'requested a session',request: session})
    } catch (error) {
        console.log(error)
    }
}
//view my pending sessions
exports.viewMySessions = async (req,res) =>{
    const userToken = req.cookies.userToken;  
    let verifiedUser;  
    try {  
        verifiedUser = jwt.verify(userToken, process.env.JWT_SECRET);  
    } catch (error) {  
        console.log("Token verification failed:", error);  
        return res.status(401).json({ message: "Unauthorized: Invalid token" });  
    }  

    const userId = verifiedUser.userId;

    try {
        const myPending = await MentorshipSession.find({
            menteeId: userId,
            status: "pending"
        }).sort({createdAt: -1})
        if(myPending.length === 0){
            console.log(myPending)
            return res.json({msg: "no pending sessions"})
        }
        console.log("got all pending session requests")
        res.status(200).json({pending:{myPending} })
        console.log('fetched active sessions')
    } catch (error) {
        console.log(error)
    }
}