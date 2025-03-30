import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { username, lastname, email, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !lastname || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // API Call to Backend
      const response = await axios.post("http://localhost:5000/signup", {
        name: `${username} ${lastname}`, // Combine first & last name
        email,
        password,
      });

      alert("Signup successful! Please login.");
      navigate("/login"); // Redirect to login page after success
    } catch (err) {
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
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your first name"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
