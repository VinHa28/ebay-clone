import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import BaseURL from "../others/BaseURL";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get(`${BaseURL}users`).then((response) => setUserList(response.data)).catch((error) => console.log("Failed to fetch users: ", error));
    }, []);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    const addToCart = (item) => setCart([...cart, item]);
    const clearCart = () => setCart([]);
    console.log(userList)
    return (
        <UserContext.Provider value={{ user, login, logout, cart, addToCart, clearCart, userList, setUserList }}>
            {children}
        </UserContext.Provider>
    );
};
