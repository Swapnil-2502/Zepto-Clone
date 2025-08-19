import { Request , Response } from "express";
import  Product  from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
    try{
        const { title, netQty, mrp, brand, sellerName, sellerAddress, 
            sellerLicenseNo, category } = req.body

        const requiredFields = ['title','netQty', 'mrp', 'brand', 'sellerName', 
            'sellerAddress', 'sellerLicenseNo', 'category'];

        const missingFields = requiredFields.filter(field => !req.body[field])

        if(missingFields.length > 0){
            return res.status(400).json({
                message: `Missing required fields ${missingFields.join(', ')}`
            })
        }

        if(!['CoffeeProducts', 'MealProducts'].includes(category)){
            return res.status(400).json({message: 'Invalid category. Must be either "CoffeeProducts" or "MealProducts"'})
        }

        const newProduct = new Product({
            title,
            netQty,
            stars: req.body.stars || 0,
            reviewsCount: req.body.reviewsCount || 0,
            mrp,
            brand,
            dietaryPreference: req.body.dietaryPreference || '',
            allergenInformation: req.body.allergenInformation || '',
            protein: req.body.protein || '',
            disclaimer: req.body.disclaimer || '',
            servingTemperature: req.body.servingTemperature || '',
            keyFeatures: req.body.keyFeatures || '',
            servingSize: req.body.servingSize || '',
            nutritionInformation: req.body.nutritionInformation || '',
            customerCareDetails: req.body.customerCareDetails || '',
            refundPolicy: req.body.refundPolicy || '',
            sellerName,
            sellerAddress,
            sellerLicenseNo,
            category
        })

        const savedProduct = await newProduct.save()

        res.status(201).json({message: "Product created successfully", savedProduct})

    }
    catch(error){
        console.error("Error Creating Product:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}