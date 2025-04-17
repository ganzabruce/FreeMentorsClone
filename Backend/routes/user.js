const express = require('express');  
const userRouter = express.Router();  
const userController = require('../controllers/userControllers');  
const userAuth = require('../middlewares/userAuth');  

userRouter.post('/register', userController.signUp);  
userRouter.post('/login', userController.loginUser);  

// Protected routes  
userRouter.use(userAuth);


userRouter.post('/requestSession', userController.requestSession);  
userRouter.post('/logoutUser', userController.logoutUser);  
userRouter.get('/mentors', userController.getMentors);  
userRouter.get('/mentors/:id', userController.getSpecificMentor);  
userRouter.get('/user/mySessions', userController.viewMySessions);  

module.exports = userRouter;  