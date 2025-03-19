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

    useEffect(() => {
        if (user) {
            axios.get(`${BaseURL}carts?userId=${user.id}`)
                .then(response => {
                    const cartItems = response.data;
                    
                    const productPromises = cartItems.map(item => 
                        axios.get(`${BaseURL}products/${item.productId}`)
                            .then(productRes => ({
                                ...item,
                                product: productRes.data
                            }))
                    );
                    
                    return Promise.all(productPromises);
                })
                .then(cartWithProducts => {
                    setCart(cartWithProducts);
                })
                .catch(error => console.log("Failed to fetch cart: ", error));
        } else {
            setCart([]);
        }
    }, [user]);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    const addToCart = async (cartItem) => {
        const existingItem = cart.find(item => item.productId === cartItem.productId);
        
        if (existingItem) {
            const updatedCart = cart.map(item => 
                item.productId === cartItem.productId 
                    ? { ...item, quantity: item.quantity + cartItem.quantity }
                    : item
            );
            setCart(updatedCart);
            
            try {
                await axios.patch(`${BaseURL}carts/${existingItem.id}`, {
                    quantity: existingItem.quantity + cartItem.quantity
                });
            } catch (error) {
                console.error("Error updating cart item:", error);
            }
        } else {
            try {
                const response = await axios.post(`${BaseURL}carts`, {
                    userId: user.id,
                    productId: cartItem.productId,
                    quantity: cartItem.quantity,
                    dateAdded: new Date().toISOString()
                });
                
                setCart([...cart, { ...response.data, product: cartItem.product }]);
            } catch (error) {
                console.error("Error adding item to cart:", error);
            }
        }
    };

    const removeFromCart = async (cartId) => {
        try {
            await axios.delete(`${BaseURL}carts/${cartId}`);
            
            setCart(cart.filter(item => item.id !== cartId));
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const updateCartQuantity = async (cartId, quantity) => {
        try {
            await axios.patch(`${BaseURL}carts/${cartId}`, { quantity });
            
            setCart(cart.map(item => 
                item.id === cartId ? { ...item, quantity } : item
            ));
        } catch (error) {
            console.error("Error updating cart quantity:", error);
        }
    };

    const clearCart = async () => {
        if (!user) return;
        
        try {
            const deletePromises = cart.map(item => 
                axios.delete(`${BaseURL}carts/${item.id}`)
            );
            
            await Promise.all(deletePromises);
            setCart([]);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    const checkout = async (shippingAddress, paymentMethod) => {
        if (!user || cart.length === 0) return null;
        
        try {
            const orderDate = new Date().toISOString();
            const shipDate = new Date();
            shipDate.setDate(shipDate.getDate() + 3); 
            
            const totalAmount = cart.reduce((sum, item) => {
                const price = item.product.price - (item.product.discount || 0);
                return sum + (price * item.quantity);
            }, 0);
            
            const shippingFee = 15; 
            
            const orderData = {
                userId: user.id,
                orderDate: orderDate.split('T')[0], 
                shipDate: shipDate.toISOString().split('T')[0],
                status: "Processing",
                address: shippingAddress || user.address,
                paymentMethod: paymentMethod || "Credit Card",
                shippingFee: shippingFee,
                totalAmount: totalAmount
            };
            
            const orderResponse = await axios.post(`${BaseURL}orders`, orderData);
            const orderId = orderResponse.data.id;
            
            const orderDetailsPromises = cart.map(item => {
                const price = item.product.price - (item.product.discount || 0);
                const subTotal = price * item.quantity;
                const tax = subTotal * 0.1; 
                
                return axios.post(`${BaseURL}orderDetails`, {
                    orderId: orderId,
                    productId: item.productId,
                    unitPrice: item.product.price,
                    quantity: item.quantity,
                    subTotal: subTotal,
                    discount: item.product.discount || 0,
                    tax: tax
                });
            });
            
            await Promise.all(orderDetailsPromises);
            
            await clearCart();
            
            return orderId;
        } catch (error) {
            console.error("Error during checkout:", error);
            return null;
        }
    };

    return (
        <UserContext.Provider value={{ 
            user, 
            login, 
            logout, 
            cart, 
            addToCart, 
            removeFromCart,
            updateCartQuantity,
            clearCart,
            checkout,
            userList, 
            setUserList 
        }}>
            {children}
        </UserContext.Provider>
    );
};