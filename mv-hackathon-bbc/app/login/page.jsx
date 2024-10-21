"use client";
import React, { useState } from 'react';
import { loginUser } from '../models/userModels.jsx';

console.log("inside user user client login");

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log("Email:", email, "Password:", password);
    if (email && password) {
      console.log("u have email and password");
      console.log("email: ", email, "password: ", password);
      try {
        const user = await loginUser(email, password);
        if (user) {
          console.log("redirecting");
          window.location.href = '/';
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your credentials and try again.");
      }
    } else {
      alert("Please provide both email and password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl mb-8 text-gray-800 font-bold">TBD</h1>
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700 text-center">Login to TBD</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full h-12 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <a href="/register/" className="block mt-4 text-sm text-center text-gray-600 hover:text-gray-800">
          Don't have an account? Register now
        </a>
      </div>
    </div>
  );
}