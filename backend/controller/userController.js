const User = require('../model/userModel');

exports.registerUser = async(req,res,next) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password
    })

    res.status(200).json({
        success: true,
        user,
    });
};

// login user
exports.loginUser = async (req,res,next) => {

    const {email , password} = req.body;

    if(!email || !password){
        return next(new ErrorHander("Please Enter username and password",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password",401));
    }
    
    res.status(200).json({
        success: true,
        user,
    });
}