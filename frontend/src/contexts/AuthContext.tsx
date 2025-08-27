import axios from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import type { Address } from "../components/Header";

type User = {
    phone: string,
    name?: string,
    email?:string
}

type AuthContextType = {
    user: User | null;
    token: string | null;
    selectedAddress: Address | null;
    loginUser: (phone: string, otp: string) => Promise<"newUser" | "loggedIn">; 
    addName: (name: string) => Promise<void>;
    updateNameEmail: ({name,email}:{name?: string, email?: string}) => Promise<void>;
    logout: () => void;
    deleteAccount: () => void;
    setSelectedAddress: (address: Address | null) => void;
    clearSelectedAddress: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null);
    const [selectedAddress, setSelectedAddressState] = useState<Address | null>(null);

    useEffect(()=>{
        const savedToken = localStorage.getItem('token')
        const savedUser = localStorage.getItem("user")
        const saved = localStorage.getItem("selectedAddress");

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }

        if(saved){
            setSelectedAddressState(JSON.parse(saved))
        }
    },[])

    const loginUser = async (phone: string, otp: string) => {
        const res = await axios.post("/auth/verify-otp",{phone,otp});
        const data = res.data

        setToken(data.token)
        setUser({phone: data.user.phone, name: data.user.name, email: data.user.email})

        localStorage.setItem("token", data.token)
        localStorage.setItem("user",JSON.stringify({ phone: data.user.phone, name: data.user.name, email: data.user.email }))

        return data.user.name ? "loggedIn" : "newUser"
    }

    const addName = async (name: string) => {
        await axios.put("/auth/add-name", { name }, {
            headers: { Authorization: `Bearer ${token}` },
        });

        setUser((prev) => {
            const updatedUser = prev ? { ...prev, name } : null;
            localStorage.setItem("user",JSON.stringify(updatedUser))
            return updatedUser
        });
    }

    const updateNameEmail = async ({name,email}:{name?: string, email?: string}) => {
        await axios.put("/auth/update-name-email", {name,email}, {
            headers: {Authorization: `Bearer ${token}`}
        })

        setUser((prev) => {
            const updatedUser = prev ? {...prev, ...(email ? { email } : {}), ...(name ? { name } : {})} : null;
            localStorage.setItem("user",JSON.stringify(updatedUser))
            return updatedUser
        })
    }

    const setSelectedAddress = (address: Address | null) => {
        setSelectedAddressState(address);
        if (address) {
        localStorage.setItem("selectedAddress", JSON.stringify(address));
        } else {
        localStorage.removeItem("selectedAddress");
        }
    };

    const clearSelectedAddress = () => {
        setSelectedAddressState(null);
        localStorage.removeItem("selectedAddress");
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        clearSelectedAddress()
        localStorage.removeItem("cartItems")

        window.dispatchEvent(new Event("storage"));
    }

    const deleteAccount = async () =>{
        await axios.delete("/auth/delete",{
            headers: { Authorization: `Bearer ${token}` }
        })

        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("cartItems")
        clearSelectedAddress()
    }

    return (
        <AuthContext.Provider value={{user, token, loginUser, addName, logout, updateNameEmail, deleteAccount, selectedAddress, setSelectedAddress, clearSelectedAddress}}>
            {children}
        </AuthContext.Provider> 
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};