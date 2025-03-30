import React, { useState } from "react";
import axios from "axios";
import { Header } from "../header";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  // State management for email, password, and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Simple validation (improve as needed)
    if (!email || !password) {
      setError("Both fields are required!");
    } 
    try {
      console.log(email, password)
      // Make POST request to the backend API
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

       // Store user data in localStorage
       localStorage.setItem("user", JSON.stringify(response.data.user));

      // if user login successfull then redirect on home page
      navigate("/"); 
    } catch (err) {
      // Handle error response
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-600 text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
