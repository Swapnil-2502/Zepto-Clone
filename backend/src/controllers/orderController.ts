import { AuthRequest } from "../middlewares/authMiddleware";
import { Response } from "express";
import User from "../models/User";
import Order from "../models/Order";


export const createOrder = async (req: AuthRequest, res: Response) => {
    const userId = req.userId
    const {items,address} = req.body
    try{
        if(!items || items.length === 0 || !address){
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingUser = await User.findById(userId);
        if(!existingUser) return res.status(404).json({message: "User doesnt exists"})

        const newOrder = new Order({
            userId,
            items,
            address
        })

        await newOrder.save()

        res.status(201).json({message: "Order created", order: newOrder})
    }
    catch(error){
        console.error("Error creating order:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}