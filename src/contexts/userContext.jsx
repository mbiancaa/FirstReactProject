import { createContext, useContext, useState } from "react";

export const userContext = createContext();
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    const login = () => {
        setIsLoggedIn(true);
        setUsername("user1");
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUsername(null);
    }

    return (
        <userContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </userContext.Provider>

    );
}