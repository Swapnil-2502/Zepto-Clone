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
    selectedAddress: Address | null;
    fetchAddresses: () => Promise<void>;
    addAddress: (data: Omit<Address, "_id">)=> Promise<void>;
    updateAddress: (id: string, data: Omit<Address, "_id">) => Promise<void>;
    deleteAddress: (id: string) => Promise<void>;
    setSelectedAddress: (address: Address | null) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({children}: {children: React.ReactNode }) => {
    const [address, setAddress] = useState<Address[]>([])
    const {token} = useAuth()
    const [selectedAddress, setSelectedAddressState] = useState<Address | null>(null)

    useEffect(() => {
        const saved = localStorage.getItem("selectedAddress");

        if(saved){
            setSelectedAddressState(JSON.parse(saved))
        }
    },[])

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    
    const setSelectedAddress = (address: Address | null) => {
        setSelectedAddressState(address);
        if (address) {
            localStorage.setItem("selectedAddress", JSON.stringify(address));
        } else {
            localStorage.removeItem("selectedAddress");
        }
    };

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

    const updateAddress = async (id: string, data: Omit<Address, "_id">) => {
        try{
            const res = await axios.put(`/user/addresses/${id}`,data,{headers})
            const updatedAddresses = res.data.addresses
            setAddress(res.data.addresses)

            if (selectedAddress && selectedAddress._id === id) {
                // Find the updated address in the new array
                const updatedSelectedAddress = updatedAddresses.find((addr: Address) => addr._id === id);
                if (updatedSelectedAddress) {
                    setSelectedAddressState(updatedSelectedAddress);
                    localStorage.setItem("selectedAddress", JSON.stringify(updatedSelectedAddress));
                } else {
                    // If the updated address was deleted or not found, clear selection
                    setSelectedAddressState(null);
                    localStorage.removeItem("selectedAddress");
                }
            }
        }
        catch(error){
            console.error("Failed to update address:", error);
            throw error;
        }
        
    }

    const deleteAddress = async (id:string) => {
        const res = await axios.delete(`/user/addresses/${id}`,{headers})
        setAddress(res.data.addresses)
    }


    return (
        <AddressContext.Provider value={{addresses: address,addAddress, fetchAddresses, deleteAddress, updateAddress, selectedAddress, setSelectedAddress}}>
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