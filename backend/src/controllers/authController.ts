import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middlewares/authMiddleware";

export const verifyOTP = async (req: Request, res: Response)=> {
    const {phone, otp } = req.body

    if(!phone || !otp) {
        return res.status(400).json({ message: "Phone and OTP are required" });
    }

    if (otp !== "1234") {
        return res.status(401).json({ message: "Invalid OTP" });
    }

    try{
        let user = await User.findOne({phone})

        if(!user) {
            user = new User({phone})
            await user.save()
        }

        const token = jwt.sign({id:user._id, phone},process.env.JWT_SECRET!,{expiresIn: '2d'})

        res.status(200).json({
            message: "Login successful",
            token,
            user:{
                id: user._id,
                phone: user.phone,
                name: user.name || null
            }
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

export const updateName = async (req: AuthRequest, res: Response)=> {
    const {name} = req.body
    const userId = req.userId

    try{   
        if(!name) return res.status(400).json({ message: "Name is required." });

        const user = await User.findByIdAndUpdate(userId,{name},{new:true})

        if (!user) {
        return res.status(404).json({ message: "User not found." });
        }

        return res.status(200).json({ message: "Name added successfully.", user });
    }
    catch(error){
        console.error("Error updating name:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }

}