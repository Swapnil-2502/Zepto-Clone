import { AuthRequest } from "../middlewares/authMiddleware";
import User from "../models/User";
import { Response } from "express";

export const getAllAddresses = async (req: AuthRequest, res: Response) => {
    const userId = req.userId

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        return res.status(200).json({ message: "Address added successfully.", addresses: user.addresses });
    }
    catch(error){
        console.error("Error updating address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const addAddress = async (req: AuthRequest, res: Response) =>{
    const userId = req.userId
    const newAddress = req.body

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        user.addresses.push(newAddress)
        await user.save()

        return res.status(200).json({ message: "Address added successfully.", user });
    }
    catch(error){
        console.error("Error adding address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const updateAddress = async (req: AuthRequest, res: Response) => {
    const userId = req.userId
    const { addressId } = req.params;
    const updatedAddress = req.body

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        const address = user.addresses.find((addr: any) => addr._id?.toString() === addressId);
        if (!address) return res.status(404).json({ message: "Address not found." });

        Object.assign(address,updatedAddress)
        await user.save();

        return res.status(200).json({ message: "Address updated successfully.", user });
    }
    catch(error){
        console.error("Error updating address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const deleteAddress = async (req: AuthRequest, res: Response) => {
    const userId = req.userId
    const { addressId } = req.params;

    try{
        const user = await User.findById(userId)
        if (!user) return res.status(404).json({ message: "User not found." });

        const addressIndex = user.addresses.findIndex((addr: any) => addr._id.toString() === addressId)
        if (addressIndex === -1) return res.status(404).json({ message: "Address not found." });

        user.addresses.splice(addressIndex, 1);
        await user.save();

        return res.status(200).json({ message: "Address deleted successfully.", user });
    }
    catch(error){
        console.error("Error updating address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}