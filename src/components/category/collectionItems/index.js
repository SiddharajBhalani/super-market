import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../cartContext";

export const CollectionItems = (props) => {
    const { collection } = props;
    const [quantities, setQuantities] = useState({});
    const [cartMessage, setCartMessage] = useState("");
    const { cartItems, addToCart } = useContext(CartContext);



    const handleQuantityChange = (itemName, newQuantity) => {
        setQuantities((prev) => ({
            ...prev,
            [itemName]: newQuantity,
        }));
    };

    const handleAddToCart = (item) => {
        addToCart(item)

        // Show popup notification
        setCartMessage(`${item.item} added to cart!`);

        // Hide popup after 2 seconds
        setTimeout(() => setCartMessage(""), 2000);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {collection.map((item, index) => (
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-300" key={index}>
                        <img
                            src={item.src}
                            alt={item.item}
                            className="w-full h-40 rounded-lg"
                        />
                        <span className="block mt-4 text-lg font-semibold">
                            {item.item}
                        </span>
                        <span className="block">{item.pcs}</span>
                        <span className="block">{item.price}</span>

                        <QuantitySelector
                            quantity={quantities[item.item] || 1}
                            onChange={(newQuantity) => handleQuantityChange(item.item, newQuantity)}
                        />

                        <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded mt-3 
                           hover:bg-white hover:text-blue-900 border border-blue-900 
                           transition duration-300"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>

                        {/* Popup Notification */}
                        {cartMessage && (
                            <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg 
                            transition-transform transform animate-slideIn">
                                {cartMessage}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// QuantitySelector component
const QuantitySelector = ({ quantity, onChange }) => {
    const decrease = () => {
        onChange(quantity > 1 ? quantity - 1 : 1);
    };

    const increase = () => {
        onChange(quantity + 1);
    };

    return (
        <div className="flex items-center border border-gray-400 rounded-md px-3 py-1 w-28 mx-auto justify-between mt-2">
            <button
                onClick={decrease}
                className="text-xl text-gray-700 hover:text-black px-2"
            >
                -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
                onClick={increase}
                className="text-xl text-gray-700 hover:text-black px-2"
            >
                +
            </button>
        </div>
    );
};
