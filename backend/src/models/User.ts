import mongoose, { Schema } from "mongoose";

export interface Address {
    saveAddressAs: "Home" | "Work" | "Other",
    blockOrHouseNumber: string,
    streetName?: string,
    landmark?: string,
    receiverName?: string,
    receiverContact?: string
}

export interface UserDocument extends Document{
    phone: string,
    name?: string,
    email?: string,
    addresses: Address[],
    createdAt: Date,
    updatedAt: Date
}

const AddressSchema: Schema = new Schema<Address>(
    {
        saveAddressAs:{
            type: String,
            enum: ["Home","Work","Other"],
            required: true
        },
        blockOrHouseNumber:{
            type:String,
            required: true
        },
        streetName:{
            type: String
        },
        landmark:{
            type: String
        },
        receiverName:{
            type: String
        },
        receiverContact:{
            type: String
        }
       
    },
    { _id: true }
);

const UserSchema: Schema = new Schema<UserDocument>(
    {
        phone:{
            type: String,
            required: true,
            unique:true
        },
        name:{
            type: String
        },
        email:{
            type: String
        },
        addresses: [AddressSchema]
    },
    { timestamps: true }
)

export default mongoose.model<UserDocument>("users",UserSchema)