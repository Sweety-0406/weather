import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.js"

export const register = async(req,res)=>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const user = await User.create({
            username,
            password: hashedPassword
        })
        res.status(201).json({message:"User is created successfully", user})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

export const login = async(req,res)=>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({
            where:{
                username
            }
        })
        if(!user){
            res.status(404).json({message:"User not found."})
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if(!isCorrectPassword){
            res.status(401).json({message:"Invalid credential"})
        }
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET)
        res.status(200).json({message: "Succesfully logged in",token})
    } catch (error) {
        res.status(400).json({message: "Something went wrong."})
    }
}