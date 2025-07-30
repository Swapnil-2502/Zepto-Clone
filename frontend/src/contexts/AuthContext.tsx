import axios from "../api/axios";
import { createContext, useContext, useState } from "react";


type User = {
    phone: string,
    name?: string
}

type AuthContextType = {
    user: User | null;
    token: string | null;
    loginUser: (phone: string, otp: string) => Promise<"newUser" | "loggedIn">; 
    addName: (name: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null);

    const loginUser = async (phone: string, otp: string) => {
        const res = await axios.post("/auth/verify-otp",{phone,otp});
        const data = res.data
      
        setToken(data.token)
        setUser({phone: data.user.phone, name: data.user.name})

        return data.user.name ? "loggedIn" : "newUser"
    }

    const addName = async (name: string) => {
        await axios.put("/auth/add-name", { name }, {
            headers: { Authorization: `Bearer ${token}` },
        });

        setUser((prev) => prev ? { ...prev, name } : null);
    }

    const logout = () => {
        setUser(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{user, token, loginUser, addName, logout}}>
            {children}
        </AuthContext.Provider> 
    )
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};