const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"Please Enter Your name"],
        maxlength:[30,"Name cannot exceed 30 characters"],
        minlength:[4,"Name should have more than 5 characters"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique: true,
    },
    password:{
        type: String,
        required:[true,"Please Enter Your Password"],
        minlength:[8,"Password should be greater than 8 characters"],
        select: false,
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('User',userSchema);