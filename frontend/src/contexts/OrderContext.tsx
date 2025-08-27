import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Address } from "./AddressContext";
import axios from "../api/axios";
import { useAuth } from "./AuthContext";

export type OrderItem = {
    productId: string;
    quantity: number;
    title: string;
    netQty: string;
    price: number;
    mrp: number;
    imageURL: string;
}

type Order = {
    _id: string,
    userId: string,
    cartItems: OrderItem[],
    address: Address,
    createdAt: string;
    updatedAt: string;
}

type OrderContextType = {
    orders: Order[];
    getOrders: () => Promise<void>;
    createOrder: (items: OrderItem[], address: Omit<Address, "_id">) => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderProvider = ({children} : {children: React.ReactNode}) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const {token} = useAuth()

    const headers = {
        Authorization: `Bearer ${token}`,
    }
   
    const getOrders =  useCallback(async () => {
        if (!token) {
            console.error("No token available");
            return;
        }

        try{
            const res = await axios.get("/order",{headers});
            setOrders(res.data.orders)
        }
        catch(error){
            console.error("Error fetching orders:", error);
        }
    },[token])

    useEffect(()=>{
        if(token){
            getOrders()
        }
        
    },[token,getOrders])

    const createOrder = async (items: OrderItem[], address: Omit<Address, "_id"> ) => {
        try{
            const res = await axios.post("/order",{items,address},{headers});
            setOrders((prev) => [res.data.order,...prev])
        }
        catch(error){
            console.error("Error creating orders:", error);
        }
    }

    return (
        <OrderContext.Provider value={{orders, getOrders, createOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error("useAddress must be used within AddressProvider");
    }
    return context;
}