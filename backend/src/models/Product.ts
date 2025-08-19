import mongoose, { Model, Schema } from "mongoose";

export interface IProduct extends Document {
    title: string;
    netQty: string;
    stars: number;
    reviewsCount: string;
    mrp: number;
    brand: string;
    dietaryPreference: string;
    allergenInformation: string;
    protein: string;
    disclamer: string;
    servingTemperature: string;
    keyFeatures: string;
    servingSize: string;
    nutritionInformation: string;
    customerCareDetails: string;
    refundPolicy: string;
    sellerName: string;
    sellerAddress: string;
    sellerLicenseNo: string;
    category: string; 
}

const ProductSchema = new Schema<IProduct>(
    {
        title: {type: String, required: true},
        netQty: {type: String, required: true},
        stars: {type: Number, default: 0 },
        reviewsCount: {type: String},
        mrp: {type: Number, required: true},
        brand: {type: String, required: true},
        dietaryPreference: {type: String},
        allergenInformation: {type: String},
        protein: {type: String},
        disclamer: {type: String},
        servingTemperature: {type: String},
        keyFeatures: {type: String},
        servingSize: {type: String},
        nutritionInformation: {type: String},
        customerCareDetails: {type: String},
        refundPolicy: {type: String},
        sellerName: {type: String, required: true},
        sellerAddress: {type: String, required: true},
        sellerLicenseNo: {type: String, required: true},
        category: {type: String, required: true, enum: ["CoffeeProducts", "MealProducts"]},
    },
    { timestamps: true, discriminatorKey: "category" }
)

export default mongoose.model<IProduct>("Products", ProductSchema) 