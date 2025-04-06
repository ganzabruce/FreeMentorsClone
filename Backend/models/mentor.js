const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const mentorSchema = new Schema({  
    firstName: {  
        type: String,  
        required: true,  
        maxlength: 50,  
        trim: true  
    },  
    lastName: {  
        type: String,  
        required: true,  
        maxlength: 50,  
        trim: true  
    },  
    email: {  
        type: String,  
        required: true,  
        maxlength: 100,
        trim: true,  
        unique: true // Usually, emails should be unique  
    },  
    password: {  
        type: String,  
        required: true,  
        minlength: 6
    },
    address: {  
        type: String  
    },  
    bio: {  
        type: String  
    },  
    occupation: {  
        type: String  
    },  
    expertise: {  
        type: String  
    }  
}, {  
    timestamps: true  
});  

module.exports = mongoose.model('Mentor', mentorSchema);  