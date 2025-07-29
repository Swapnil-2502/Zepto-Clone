import { createContext, useContext, useState } from "react";


type User = {
    phone: string,
    name?: string
}

type AuthContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
})

export const useAuth = () => useContext(AuthContext) 

export const AuthProvider: React.FC<{childer: React.ReactNode}> = ({childer}) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {childer}
        </AuthContext.Provider> 
    )
}