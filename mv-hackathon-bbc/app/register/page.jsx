"use client";
import React, { useState } from 'react';
import { registerUser } from "../models/userModels";  // Import registerUser function

export default function RegisterPage() {
  // State to manage form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  // Function to handle the sign-up process
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (password !== retypePassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const user = await registerUser(email, password);  // Call the registerUser function
      console.log("User signed up:", user);
      // Handle successful sign-up (e.g., navigate to another page or show success message)
    } catch (error) {
      console.error("Error during sign-up:", error);
      // Handle sign-up error (e.g., display error message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[54px] mb-8 text-gray-800 font-bold">TBD</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 flex flex-col items-center shadow-md rounded-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700">Sign up for TBD</h2>
        <form onSubmit={handleSignUp}> {/* Handle sign-up on form submission */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Bind state
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind state
          />
          <input
            type="text"
            placeholder="Student Number"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)} // Bind state
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Bind state
          />
          <input
            type="password"
            placeholder="Retype Password"
            className="w-[462px] h-[75px] mb-6 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)} // Bind state
          />
          <button 
            type="submit" 
            className="w-[462px] h-[75px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300" onSubmit={registerUser(email, password)}>
            Sign Up
          </button>
        </form>
        <a href="/login/" className="mt-4 text-sm text-gray-600 hover:text-gray-800">
          Already have an account? Log in
        </a>
      </form>
    </div>
  );
};

export default SignupPage;