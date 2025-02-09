import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, CartIcon, CallIcon } from "../svgs";

export const Header = () => {
    return (
        <>
            <header className="bg-blue-800 text-white">
                <div className="container mx-auto py-4 px-6">
                    {/* First Row */}
                    <div className="flex items-center justify-between mb-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/">
                                <div className="bg-blue-900 px-4 py-2 rounded-lg">
                                    <span className="text-white text-lg font-bold tracking-wide">SUPERMARKET</span>
                                </div>
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 mx-6">
                            <div className="relative max-w-2xl">
                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    className="w-full max-w-2xl rounded-full bg-blue-700 text-sm text-white placeholder-gray-300 py-3 px-5 pr-12"
                                />
                                <button className="absolute right-4 top-2.5 text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 15l5.2 5.2M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-6">
                            <Link to="/login" className="text-sm hover:underline">
                                <UserIcon />
                            </Link>
                            <CartIcon />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-between border-t border-blue-700 pt-3">
                        {/* Left: Menu Options */}
                        <nav className="flex items-center space-x-6">
                            <a href="#" className="text-sm hover:underline">
                                Shop by Categories
                            </a>
                            <a href="#" className="text-sm hover:underline">
                                View All Products
                            </a>
                        </nav>

                        {/* Right: Utility Links */}
                        <div className="flex items-center space-x-6">
                            <a>
                                Contact Us
                            </a>
                            <a href="#" className="text-sm hover:underline">
                                Shipping Policy
                            </a>
                            <button className="flex items-center bg-white text-blue-800 rounded-lg py-2 px-4 text-sm font-semibold space-x-2">
                                <CallIcon />
                                <span>Call us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
