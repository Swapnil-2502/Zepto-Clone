import mongoose, { Schema } from "mongoose";

export interface Address {
    saveAddressAs: "Home" | "Work",
    buildingType: "Society" | "Independent House",
    blockOrHouseNumber: string,
    streetName?: string,
    landmark?: string,
    city: string;
    state: string;
    pincode: string;
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
            enum: ["Home","Work"],
            required: true
        },
        buildingType:{
            type:String,
            enum:["Society","Independent House"],
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
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        pincode:{
            type: String,
            required: true
        }
    },
    {_id: false}
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