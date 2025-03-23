import React, { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const storedCart = localStorage.getItem("cartItems");

    // 🔹 Load Cart from LocalStorage on Component Mount
    useEffect(() => {        
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // 🔹 Save Cart to LocalStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (newItem) => {
        setCartItems((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.item === newItem.item);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            }
            return [...prevCart, { ...newItem, quantity: 1 }];
        });
    };

    // 🔼 Increase Quantity
    const increaseQuantity = (itemName) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.item === itemName ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // 🔽 Decrease Quantity
    const decreaseQuantity = (itemName) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.item === itemName && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // ❌ Remove Item
    const removeFromCart = (index) => {
        setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
