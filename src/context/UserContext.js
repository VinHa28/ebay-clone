import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    const addToCart = (item) => setCart([...cart, item]);
    const clearCart = () => setCart([]);

    return (
        <UserContext.Provider value={{ user, login, logout, cart, addToCart, clearCart }}>
            {children}
        </UserContext.Provider>
    );
};
