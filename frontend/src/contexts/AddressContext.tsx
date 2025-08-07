import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "../api/axios";


type Address = {
    _id: string;
    saveAddressAs: "Home" | "Work" | "Other";
    HouseNumber: string,
    BlockNumber: string,
    landmark?: string;
    receiverName?: string;
    receiverContact?: string;
}

type AddressContextType = {
    addresses: Address[];
    addAddress: (data: Omit<Address, "_id">)=> Promise<void>;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({children}: {children: React.ReactNode }) => {
    const [address, setAddress] = useState<Address[]>([])
    const {token} = useAuth()

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    const addAddress = async (data: Omit<Address, "_id">) => {
        const res = await axios.post("/user/addresses",data,{headers})
        setAddress(res.data.user.address)
    }

    return (
        <AddressContext.Provider value={{addresses: address,addAddress}}>
            {children}
        </AddressContext.Provider>
    )
}

export const useAddress = () => {
    const context = useContext(AddressContext)
    if (!context) {
        throw new Error("useAddress must be used within AddressProvider");
    }
    return context;
}