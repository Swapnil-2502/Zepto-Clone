import mongoose, { Schema } from "mongoose";
import { Address } from "./User";

export interface OrderItem {
  productId: string;
  quantity: number;
  title: string;
  netQty: string;
  price: number;
  mrp: number;
  imageURL: string;
}

const OrderItemSchema: Schema = new Schema<OrderItem>({
    productId:{type: String, required:true},
    quantity:{type: Number, required:true},
    title:{type: String, required:true},
    netQty:{type: String, required:true},
    price:{type: Number, required:true},
    mrp:{type: Number, required:true},
    imageURL:{type: String, required:true},
},{ _id: false })

export interface OrderDocument extends Document {
    user: mongoose.Types.ObjectId;
    cartItems: OrderItem[];
    address: Address;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema<OrderDocument>({
    user: {type: Schema.Types.ObjectId, ref: "users", required: true,options: { onDelete: 'CASCADE' }},
    cartItems: { type: [OrderItemSchema], required: true },
    address: {
        saveAddressAs: { type: String, enum: ["Home", "Work", "Other"], required: true },
        HouseNumber: { type: String, required: true },
        BlockNumber: { type: String, required: true },
        landmark: { type: String },
        receiverName: { type: String },
        receiverContact: { type: String }
    }
}, { timestamps: true })

export default mongoose.model<OrderDocument>("orders",OrderSchema)