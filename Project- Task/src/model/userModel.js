const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    

}, { timestamps : true  } )


module.exports = mongoose.model('user', userSchema); //users