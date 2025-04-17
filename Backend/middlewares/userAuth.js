const jwt = require('jsonwebtoken');  
const User = require('../models/user');  

const userAuth = async (req, res, next) => {  
    const { authorization } = req.headers;  
    if (!authorization) {  
        return res.status(401).json({ error: "you should provide the token in headers" });  
    }  
    const token = authorization.split(' ')[1];  
    try {  
        const { _id } = await jwt.verify(token, process.env.JWT_SECRET);  
        req.user = await User.findOne({ _id }).select('_id');  
        next();  
    } catch (error) {  
        console.log(error.message);  
        return res.status(401).json({ error: error.message });  
    }  
};  

module.exports = userAuth;  