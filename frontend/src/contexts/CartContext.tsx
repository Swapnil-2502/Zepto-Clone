import { createContext, useContext, useState } from "react";
import type { ProductData } from "../components/products/ProductCard";

export type CartItems = {
  productId: string;
  quantity: number;
  title: string;
  netQty: string;
  price: number;
  mrp: number;
  imageURL: string;
  timestamp?: number
}

type CartContextType = {
    cartItems: { productId: string; quantity: number }[];
    toastItems: CartItems[];
    addToCart: (product: ProductData, quantity: number) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    removeToast: (productId: string, timestamp: number) => void;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);
    const [toastItems, setToastItems] = useState<CartItems[]>([]);

    const addToCart = (product: ProductData, quantity: number) => {
        if (quantity <= 0) return;
        setCartItems((prev) => {
            const existingItem = prev.find(item => item.productId === product._id)

            if(existingItem){
                return prev.map(item => 
                    item.productId === product._id
                    ? {...item, quantity: item.quantity + quantity}
                    : item
                );
            }

            return [...prev, {
                productId: product._id,
                quantity,
                title: product.title,
                netQty: product.netQty,
                price: product.currPrice,
                mrp: product.mrp,
                imageURL: product.imageURL
            }];
        })

        const newToast: CartItems = {
            productId: product._id,
            quantity,
            title: product.title,
            netQty: product.netQty,
            price: product.currPrice,
            mrp: product.mrp,
            imageURL: product.imageURL,
            timestamp: Date.now(),
        };

        setToastItems(prev => [...prev, newToast]);

        setTimeout(() => {
            removeToast(product._id, newToast.timestamp!);
        }, 3000);
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 0) return;
        setCartItems(prev =>
        quantity === 0
            ? prev.filter(item => item.productId !== productId)
            : prev.map(item =>
                item.productId === productId
                ? { ...item, quantity }
                : item
            )
        );
    };

    const removeToast = (productId: string, timestamp: number) => {
        setToastItems(prev => 
        prev.filter(item => !(item.productId === productId && item.timestamp === timestamp))
        );
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity,0)

    return (
        <CartContext.Provider value={{cartItems, toastItems, addToCart, updateQuantity, removeToast,totalItems}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}