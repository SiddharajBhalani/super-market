import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";


export const CartModal = ({ isOpen, onClose, cartData, onRemove }) => {
    const [cartItems, setCartItems] = useState([]);
    const {increaseQuantity, decreaseQuantity} = useContext(CartContext);

    useEffect(() => {
        if (cartData) {
            setCartItems(cartData);
        }
    }, [cartData]);

    // Increase quantity
    const handleIncreaseQuantity = (item) => {
        increaseQuantity(item)
    };

    // Decrease quantity
    const handleDecreaseQuantity = (item) => {
        decreaseQuantity(item)

    };

    // 🔥 Calculate total price
    const totalPrice = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price.replace("$", "")) * item.quantity;
    }, 0);


    return (
        <>
            {isOpen && (
                <div className="absolute top-12 right-0 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-300 z-50">
                    <div className="flex justify-between items-center pb-2 border-b">
                        <h2 className="text-lg font-semibold text-black">Shopping Cart</h2>
                        <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">&times;</button>
                    </div>

                    {cartItems.length > 0 ? (
                        <>
                            <div className="mt-2 space-y-2">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 border-b">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.src} alt={item.item} className="w-12 h-12 rounded" />
                                            <div>
                                                <span className="font-semibold text-black">{item.item}</span>
                                                <p className="text-sm text-gray-600">
                                                    Qty:
                                                    <button onClick={() => handleDecreaseQuantity(item.item)} className="px-2 ml-2 text-lg">-</button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button onClick={() => handleIncreaseQuantity(item.item)} className="px-2 text-lg">+</button>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-semibold text-black">
                                                ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                                            </span>
                                            <button onClick={() => onRemove(index)} className="text-red-500 text-sm hover:underline">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* ✅ Show Total Price on Checkout Button */}
                            <Link to="/Addtocard" >
                                <button onClick={onClose} className="w-full bg-red-500 text-white py-2 mt-4 rounded-md text-lg font-semibold">
                                    Checkout (${totalPrice.toFixed(2)})
                                </button>
                            </Link>
                        </>
                    ) : (
                        <p className="text-gray-500 text-center mt-4">Your cart is empty.</p>
                    )}
                </div>
            )}
        </>
    );
};
