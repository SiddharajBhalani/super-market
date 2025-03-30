import React from "react";

export const Order = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Order Placed Successfully!</h2>
                <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been confirmed and is being processed.</p>
                <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        <a href="/" className="text-white-600">Continue Shopping</a>
                    </button>
                </div>
            </div>
        </div>
    );
};
