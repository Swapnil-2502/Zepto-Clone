import { createContext, useCallback, useContext, useEffect, useState } from "react";
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
    fetchAddresses: () => Promise<void>;
    addAddress: (data: Omit<Address, "_id">)=> Promise<void>;
    deleteAddress: (id: string) => Promise<void>
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({children}: {children: React.ReactNode }) => {
    const [address, setAddress] = useState<Address[]>([])
    const {token} = useAuth()

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    const fetchAddresses = useCallback(async () => {
        if (!token) return; 
        
        try {
            const headers = { Authorization: `Bearer ${token}` };
            const res = await axios.get("/user/addresses", { headers });
            setAddress(res.data.addresses);
        } catch (error) {
            console.error("Failed to fetch addresses:", error);
           
        }
    },[token])

    useEffect(() => {
        fetchAddresses();
    }, [token]);

   
    const addAddress = async (data: Omit<Address, "_id">) => {
        const res = await axios.post("/user/addresses",data,{headers})
        setAddress(res.data.addresses)
    }

    const deleteAddress = async (id:string) => {
        const res = await axios.delete(`/user/addresses/${id}`,{headers})
        setAddress(res.data.addresses)
    }


    return (
        <AddressContext.Provider value={{addresses: address,addAddress, fetchAddresses, deleteAddress}}>
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