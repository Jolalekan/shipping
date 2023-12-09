import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const signOut = () => {
        localStorage.removeItem("auth");
        setAuth(null);
    };

    useEffect(() => {
        const initialAuthState = JSON.parse(localStorage.getItem("auth") || null);
        setAuth(initialAuthState);
    }, []);

    const value = {
        auth,
        setAuth,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;