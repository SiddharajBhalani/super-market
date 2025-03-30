import React, { useContext, useState } from "react";
import { CartContext } from "../cartContext";
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
import { useNavigate } from "react-router-dom";


export const Addtocard = () => {
  const { cartItems, RemoveAllItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace("$", "")) * item.quantity;
  }, 0);
  const shipping = cartItems.length > 0 ? 1.0 : 0;
  const total = subtotal + shipping;

  const getShippingCharge = (subtotal) => {
    if (subtotal < 20) return "$6.99";
    if (subtotal >= 20 && subtotal < 60) return "$4.99";
    return "Free Shipping";
  };
  let error = "";
  const validateField = (name, value) => {
    if (!value.trim()) {
      error = `${name.replace(/([A-Z])/g, ' $1')} is required`;
    } else {
      if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email address";
      if (name === "postalCode" && isNaN(value)) error = "Enter a valid postal code";
      if (name === "phone" && isNaN(value)) error = "Enter a valid phone number";
      if (name === "cardNumber" && !/^\d{16}$/.test(value)) error = "Enter a valid 16-digit card number";
      if (name === "expiry" && !/^\d{2}\/\d{2}$/.test(value)) error = "Enter a valid MM/YY format";
      if (name === "cvv" && !/^\d{3}$/.test(value)) error = "Enter a valid 3-digit CVV";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

    // Validate all fields
    Object.keys(formData).forEach((field) => {
        let errorMessage = validateField(field, formData[field]); // Get error message
        if (errorMessage) {
            newErrors[field] = errorMessage;
            hasErrors = true;
        }
    });

    if (!email.trim()) {
        newErrors.email = "Email is required";
        hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Enter a valid email address";
        hasErrors = true;
    }

    setErrors(newErrors); // Update state with all errors at once

    if (hasErrors || Object.values(newErrors).some(error => error)) {
        alert("Please fix all errors before submitting.");
        return;
    }


    // Prepare order data
    const orderData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      phone: formData.phone,
    };

    try {
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
      navigate("/order");
      RemoveAllItems();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };


  return (
    <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
      <form className="w-2/3 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
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

        <h2 className="text-lg font-semibold">Contact</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mt-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateField("email", e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <h2 className="text-lg font-semibold mt-6">Delivery</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {Object.keys(formData).slice(0, 6).map((field) => (
            <div key={field} className={field === "address" ? "col-span-2" : ""}>
              <input
                type="text"
                name={field}
                placeholder={field.replace(/([A-Z])/g, ' $1')}
                className="border p-2 rounded w-full"
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                onBlur={(e) => validateField(field, e.target.value)}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center space-x-2 w-full" style={{ margin: "10px 0" }}>
          <h2 className="text-lg font-semibold mt-0">Payment </h2>
          <div className="flex">
            <AmericanIcon />
            <AplepayIcon />
            <Dinersclub />
            < Discover />
            <Gpay />
            <Maestro />
            <Pimaster />
            <Paypal />
            <Shoppay />
            <Unionpay />
            <Visa />
          </div>


        </div>

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          className="w-full border p-2 mt-2 rounded"
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          onBlur={(e) => validateField("cardNumber", e.target.value)}
        />
        {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            className="border p-2 rounded"
            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            onBlur={(e) => validateField("expiry", e.target.value)}
          />
          {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            className="border p-2 rounded"
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            onBlur={(e) => validateField("cvv", e.target.value)}
          />
          {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
        </div>
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on card"
          className="w-full border p-2 mt-2 rounded"
          onChange={(e) => setFormData({ ...formData, nameOnCard: e.target.value })}
          onBlur={(e) => validateField("nameOnCard", e.target.value)}
        />
        {errors.nameOnCard && <p className="text-red-500 text-sm">{errors.nameOnCard}</p>}
        {/* Pay Now Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-3 mt-6 rounded hover:bg-blue-700">
          Pay Now
        </button>

      </form>

      {/* Right Section - Order Summary */}
      <div className="w-1/3 bg-white p-6 ml-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>{getShippingCharge(subtotal)}</span>
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
