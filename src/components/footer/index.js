import React from "react";
import { Link } from "react-router-dom";
import { AmericanIcon, AplepayIcon } from "../svgs";
import { Dinersclub } from "../svgs/Dinersclub";
import { Discover } from "../svgs/Discover";
import { Gpay } from "../svgs/Gpay";
import { Maestro } from "../svgs/Maestro";
import { Pimaster } from "../svgs/Pimaster";
import { Paypal } from "../svgs/Paypal";
import { Shoppay } from "../svgs/Shoppay";
import { Unionpay } from "../svgs/Unionpay";
import { Visa } from "../svgs/Visa";
import { Facebook } from "../svgs/Facebook"
import { Instagram } from "../svgs/Instagram";
import { Whatsapp } from "../svgs/Whatsapp"
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login"); // Redirect to login page
    };

    return (
        <footer style={{ backgroundColor: "#4a4a4a", color: "#fff", padding: "20px 10px", textAlign: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "0 auto", maxWidth: "1200px" }}>
                {/* Categories Section */}
                <div style={{ textAlign: "left", margin: "10px" }}>
                    <h4>Categories</h4>
                    <ul style={{ listStyleType: "none", padding: 0, lineHeight: 2 }}>
                        <li><Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>All products</Link></li>
                        <li><Link to="/categories" style={{ color: "#fff", textDecoration: "none" }}>All Categories</Link></li>
                        <li><Link to="/collection/frozen" style={{ color: "#fff", textDecoration: "none" }}>Fresh & Frozen</Link></li>
                        <li><Link to="/collection/snacks" style={{ color: "#fff", textDecoration: "none" }}>Ingredients</Link></li>
                        <li><Link to="/collection/noodlespasta" style={{ color: "#fff", textDecoration: "none" }}>Cupboard</Link></li>
                        <li><Link to="/collection/healthbeauty" style={{ color: "#fff", textDecoration: "none" }}>Health & Beauty</Link></li>
                    </ul>
                </div>

                {/* Footer Links Section */}
                <div style={{ textAlign: "left", margin: "10px" }}>
                    <h4>Footer Links</h4>
                    <ul style={{ listStyleType: "none", padding: 0, lineHeight: 2 }}>
                        <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</Link></li>
                        <li><Link to="/Shipping" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</Link></li>
                        <li><Link to="/Shipping" style={{ color: "#fff", textDecoration: "none" }}>Refund Policy</Link></li>
                        <li><Link to="/Shipping" style={{ color: "#fff", textDecoration: "none" }}>Shipping Policy</Link></li>
                        <li><Link to="/Shipping" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</Link></li>
                        <li>
                            <button onClick={handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </div>

                {/* Logo and Motto Section */}
                <div style={{ flex: 1, margin: "10px", textAlign: "center" }}>
                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <div className="bg-blue-900 px-4 py-2 rounded-lg">
                                <span className="text-white text-lg font-bold tracking-wide">SUPERMARKET</span>
                            </div>
                        </Link>
                    </div>
                    <p className="font-bold my-2 text-xl">
                        Find True SUPERMARKET in Every Aisle
                    </p>


                    <div className="flex justify-center" style={{ margin: "40px 0" }}>

                        <Facebook />
                        <Instagram />
                        <Whatsapp />
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" style={{ margin: "0 5px" }}>
                            <i className="fab fa-whatsapp" style={{ fontSize: "20px", color: "#fff" }}></i>
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div style={{ margin: "10px" }}>
                    <h4 className="font-bold">Address:</h4>
                    <p>20 Carlton Terrace, Green Street,<br />E7 8LH, London</p>
                    <h4 className="font-bold">Contact:</h4>
                    <p>02084716365</p>
                    <h4 className="font-bold">Email:</h4>
                    <p>support@varietyfoods.co.uk</p>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="flex justify-end" style={{ margin: "20px 0" }}>
                <AmericanIcon />
                <AplepayIcon />
                <Dinersclub />
                <Discover />
                <Gpay />
                <Maestro />
                <Pimaster />
                <Paypal />
                <Shoppay />
                <Unionpay />
                <Visa />

            </div>

            {/* Footer Bottom */}
            <div style={{ borderTop: "1px solid #666", paddingTop: "10px", fontSize: "14px" }}>
                © 2025 SUPERMARKET SHOPPING MADE.
                {/* | Developed & Maintained by Byld My Website */}
            </div>
        </footer>
    );
};
