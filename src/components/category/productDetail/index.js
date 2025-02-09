import React from "react";
import { useParams } from "react-router-dom";
import { collection } from "../productCollection"; // Ensure this file exports the collection object

export const ProductDetail = () => {
    const { productName } = useParams();
    const decodedName = decodeURIComponent(productName);

    let product = null;

    // Search for the product in all categories
    for (const category in collection) {
        product = collection[category].find((p) => p.item.trim() === decodedName.trim());
        if (product) break; // Stop searching once found
    }

    if (!product) {
        return <div className="text-center text-xl font-semibold text-red-500">Product not found!</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold">{product.item}</h1>
            <img src={product.src} alt={product.item} className="w-60 h-60" />
            <p className="text-lg">{product.pcs}</p>
            <p className="text-lg font-semibold">{product.price}</p>
            <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
};
