"use client";
import React, { useState } from 'react';
import { loginUser } from '../models/userModels.jsx';

console.log("inside user user client login");

export default function LoginPage() {
  // State to manage form inputs

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  // Function to handle the sign-up process
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    console.log("Email:", email, "Password:", password); // Check if these values are correct
    if (email && password) {
      console.log("u have email and password");
      console.log("email: ", email, "password: ", password);
      const user = await loginUser(email, password);
      if (user) {
        console.log("redirectingggg");
        window.location.href = '/events';
      }
    } else {
      alert("Provide email and password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[54px] mb-8 text-gray-800 font-bold">TBD</h1>
      <div className="bg-white p-8 flex flex-col items-center shadow-md rounded-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700">Login for TBD</h2>
        <form onSubmit={handleLogin}> {/* Handle sign-up on form submission */}
          <input
            type="email"
            placeholder="Email"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind state
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Bind state
          />
          <button 
            type="submit" 
            className="w-[462px] h-[75px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        <a href="/login/" className="mt-4 text-sm text-gray-600 hover:text-gray-800">
          Don't have an account? Register now
        </a>
      </div>
    </div>
  );
};