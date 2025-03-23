// import React from "react";
// import { Link } from "react-router-dom";
// import { Bcart } from "../svgs/Bcart"

// export const Addtocard = () => {
//   return (

//       <div className="flex flex-col items-center mt-30">
//       <Bcart />
//         <p className="mt-2 text-gray-700 text-lg">Your cart is empty</p>
//         <Link to="/" className="mt-4">
//           <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-md shadow-md">
//             Start shopping
//           </button>
//         </Link>
//       </div>

//   );
// };

//changes



import React, { useContext, useState } from "react";
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
import { CartContext } from "../cartContext";

export const Addtocard = () => {
  const [email, setEmail] = useState("");
  const [contactError, setContactError] = useState("");
  const { cartItems } = useContext(CartContext);
  console.log("cart items", cartItems);

  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace("$", "")) * item.quantity;
  }, 0);
  const shipping = cartItems.length > 0 ? 1.0 : 0;
  const total = subtotal + shipping;


  const validateEmail = () => {
    if (!email) {
      setContactError("");
    } else {
      setContactError("Enter an email");
    }
  };

  return (
    <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg">
        <p className="text-black-600 text-sm">Express checkout</p>
        <div className="flex justify-between gap-4 mb-6">
          <button className="bg-purple-600 text-white w-1/3 py-2 rounded">
            <span className="mr-1">shop</span>
            <span className="bg-white text-purple-600 px-2 rounded-sm text-sm">Pay</span>
          </button>
          <button className="bg-yellow-400 text-black w-1/3 py-2 rounded">
            <span className="italic font-bold">Pay</span>
            <span className="italic font-bold text-blue-500">Pal</span>
          </button>
          <button className="bg-black text-white w-1/3 py-2 rounded">
            <span className="text-lg">G</span>
            <span className="ml-1">Pay</span>
          </button>
        </div>

        <hr className="mb-6" />

        {/* Contact Section */}
        <h2 className="text-lg font-semibold">Contact</h2>
        <input
          type="email"
          className="w-full border p-2 mt-2 rounded focus:outline-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {contactError && <p className="text-red-500 text-sm">{contactError}</p>}

        {/* Delivery Section */}
        <h2 className="text-lg font-semibold mt-6">Delivery</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <input type="text" placeholder="First name" className="border p-2 rounded" />
          <input type="text" placeholder="Last name" className="border p-2 rounded" />
          <input type="text" placeholder="Address" className="col-span-2 border p-2 rounded" />
          <input type="text" placeholder="City" className="border p-2 rounded" />
          <input type="text" placeholder="Postal Code" className="border p-2 rounded" />
          <input type="text" placeholder="Phone" className="col-span-2 border p-2 rounded" />
        </div>

        {/* Payment Section */}
        <h2 className="text-lg font-semibold mt-6">Payment</h2>
        <div className="mt-2 border p-4 rounded">
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            <span>

              <div className="flex justify-center space-x-2 w-full" style={{ margin: "10px 0" }}>
                Credit Card
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
            </span>
          </div>
          <input type="text" placeholder="Card Number" className="w-full border p-2 mt-2 rounded" />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input type="text" placeholder="MM/YY" className="border p-2 rounded" />
            <input type="text" placeholder="CVV" className="border p-2 rounded" />
          </div>
          <input type="text" placeholder="Name on card" className="w-full border p-2 mt-2 rounded" />
        </div>

        {/* Pay Now Button */}
        <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded hover:bg-blue-700">
          Pay Now
        </button>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-1/3 bg-white p-6 ml-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr className="mb-2" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};




