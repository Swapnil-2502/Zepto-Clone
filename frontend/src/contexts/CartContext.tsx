import { createContext, useContext, useEffect, useState } from "react";
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
    cartItems: CartItems[];
    addToCart: (product: ProductData, quantity: number) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCartItems: () => void;
    totalItems: number;
    setSelectedCartItems: (cartItems: CartItems[]) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItems[]>(()=>{
        const saved = localStorage.getItem("cartItems")
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

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

    const setSelectedCartItems = (cartItems: CartItems[]) => {
        setCartItems(cartItems)
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }

    const clearCartItems = () => {
        setCartItems([])
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity,0)

    return (
        <CartContext.Provider value={{cartItems, addToCart, updateQuantity,totalItems,clearCartItems,setSelectedCartItems}}>
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