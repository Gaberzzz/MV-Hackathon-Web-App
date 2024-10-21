"use client";
import React, { useState } from 'react';
import { registerUser } from "../models/userModels";
import { createUserDetails } from "../models/userDetailsModels";

export default function RegisterPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      alert("Passwords do not match!");
      return;
    } 

    try {
      const user = await registerUser(email, password);
      console.log("User signed up:", user);
      if (user) {
        const uid = user.uid;
        console.log("User UID:", uid);
        const userDetails = await createUserDetails(uid, fullname, studentNumber);
        if (userDetails) {
          window.location.href = '/';
        }
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl mb-8 text-gray-800 font-bold">TBD</h1>
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700 text-center">Sign up for TBD</h2>
        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Student Number"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
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
          <input
            type="password"
            placeholder="Retype Password"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full h-12 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <a href="/login/" className="block mt-4 text-sm text-center text-gray-600 hover:text-gray-800">
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
}