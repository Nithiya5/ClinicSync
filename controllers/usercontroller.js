const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async(req,res) =>{
    try{
        const {name,email,password,role} = req.body;
        const user = await User.findOne({email});
        if(!user){
        const adduser = new User({name,email,password,role});
        await adduser.save();
        return res.status(200).json({message:"User created successfully"});
        }
        else{
            return res.status(404).json({message:"User already exists"})
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal error"})
   }
};

const login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const valid = await bcrypt.compare(password,user.password);
        if(!valid){
            return res.status(404).json({message:"Wrong password !"});
        }
        const token = jwt.sign({userId:user.userId},'secret_key',{
            expiresIn:"1h"
        })
        res.json(token);
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {signup,login};