import React from 'react';
import { registerUser, loginUser, logoutUser } from "../models/userModels";
export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-[54px] mb-8 text-gray-800 font-bold">TBD</h1>
      <div className="bg-white p-8 flex flex-col items-center shadow-md rounded-md">
        <h2 className="text-2xl mb-6 font-semibold text-gray-700">Sign up for TBD</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Student Number"
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {/* <select
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setIsOrganization(e.target.value === 'Organization')}
          defaultValue="Organization"
        >
          <option value="Organization">Organization</option>
          <option value="Personal">Personal</option>
        </select>
        {isOrganization && (
          <>
            <input
              type="text"
              placeholder="Organization Name"
              className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Position"
              className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </>
        )} */}
        <input
          type="password"
          placeholder="Password"
          className="w-[462px] h-[75px] mb-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Retype Password"
          className="w-[462px] h-[75px] mb-6 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button className="w-[462px] h-[75px] bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Sign Up
        </button>
        <a href="/login/" className="mt-4 text-sm text-gray-600 hover:text-gray-800">
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
}
