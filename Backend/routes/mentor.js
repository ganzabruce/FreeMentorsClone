const express = require('express');
const mentorRouter = express.Router();
const mentorControllers =  require('../controllers/mentorControllers');
const mentorAuth = require('../middlewares/mentorAuth')

mentorRouter.post('/register', mentorControllers.signUpMentor);
mentorRouter.post('/login', mentorControllers.loginMentor);

mentorRouter.use(mentorAuth)

mentorRouter.get('/pendingSessions',mentorControllers.getPendingSessions)
mentorRouter.post('/logoutMentor',mentorControllers.logoutMentor)

module.exports = mentorRouter;