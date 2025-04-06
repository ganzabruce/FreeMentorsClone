const Joi = require('joi');

const signUpSchema = Joi.object()
    .keys({
        firstName: Joi.string()
            .min(3)
            .max(40)
            .required(),
        lastName : Joi.string()
            .min(3)
            .max(50)
            .required(),
        email: Joi.string()
            .min(3)
            .max(50)
            .required(),
        password: Joi.string()
            .min(3)
            .max(12)
            .required(),
        address : Joi.string(),
        bio: Joi.string()
            .min(10)
            .max(1000),
        occupation: Joi.string()
            .min(3)
            .max(40),
        expertise: Joi.string()
            .min(3)
            .max(40)
        
          
    })

module.exports = {
    signUpSchema
}