import { AuthRequest } from "../middlewares/authMiddleware";
import { Response } from "express";
import User from "../models/User";
import Order from "../models/Order";

export const getOrders = async (req: AuthRequest, res: Response) => {
    const userId = req.userId

    try{
        if(!userId) return res.status(404).json({message: "User ID not send"})

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({message: "User not found"})

        const Allorders = await Order.findById(userId).sort({ createdAt: -1 }); 

        res.status(200).json({message: "Orders fetched successfully", orders: Allorders })
    }
    catch(error){
        console.error("Error creating order:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const createOrder = async (req: AuthRequest, res: Response) => {
    const userId = req.userId
    console.log("USER->",req.userId)
    console.log(req.body)
    const {items,address} = req.body
    try{
        if(!items || items.length === 0 || !address){
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingUser = await User.findById(userId);
        if(!existingUser) return res.status(404).json({message: "User doesnt exists"})

        const newOrder = new Order({
            user: userId,
            cartItems: items,
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