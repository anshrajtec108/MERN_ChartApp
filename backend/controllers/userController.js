const {asyncHandler}=require('express-async-handler')
const User = require('../models/user.model')
const { use } = require('../routers/userRouter')

const registerUser=asyncHandler(async(req,res)=>{
const {name, email, password, pic}=req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please Enter all the  Felids")
    }

    const userExists=await User.findOne({email})
    if (userExists){
        res.status(400);
        throw new Error("USer already exists");
    }

    const user=await User.create({
        name,
        email,
        password,
        pic
    })

    if(user){
        res.status(200).json({
            _id:user._id,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("user not created ")
    }
})

module.exports={registerUser}