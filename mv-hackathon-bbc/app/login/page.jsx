"use client";
import React, { useState } from 'react';
import { registerUser, loginUser, logoutUser } from "../models/userModels";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await loginUser(email, password);
      console.log('Logged in user:', user);
      // Here you would typically redirect the user or update the app state
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[54px] mb-8 text-gray-800 font-bold">TBD</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 flex flex-col items-center shadow-md rounded-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700">Login to TBD</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[462px] h-[75px] mb-6 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button 
          type="submit"
          className="w-[462px] h-[75px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <a href="/register/" className="mt-4 text-sm text-gray-600 hover:text-gray-800">
          Create an account
        </a>
      </form>
    </div>
  );
};

export default LoginPage;