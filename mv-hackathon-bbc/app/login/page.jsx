"use client";
import React, { useState } from 'react';
import { loginUser } from '../models/userModels.jsx';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log("Email:", email, "Password:", password); // Check if these values are correct
    if (email && password) {
      console.log("u have email and password")
      loginUser(email, password);
    } else {
      alert("Provide email and password");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[54px] mb-8 text-gray-800 font-bold">TBD</h1>
      <div className="bg-white p-8 flex flex-col items-center shadow-md rounded-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700">Login to TBD</h2>
        <form onSubmit={handleLogin}>
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
          className="w-[462px] h-[75px] mb-6 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Bind state
        />
        <button type='submit' className="w-[462px] h-[75px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Login
        </button>
        </form>
        
        <a href="/register/" className="mt-4 text-sm text-gray-600 hover:text-gray-800">
          Create an account
        </a>
      </div>
    </div>
  );
}

export default LoginPage;