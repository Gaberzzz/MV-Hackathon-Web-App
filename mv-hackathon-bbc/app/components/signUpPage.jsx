"use client";

import React, { useState } from 'react';

const SignupPage = () => {
  const [isOrganization, setIsOrganization] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-[54px] mb-8">TBD</h1>
      <div className="bg-[#D9D9D9] p-[66px] flex flex-col items-center">
        <h2 className="text-2xl mb-6">Sign up for TBD</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <input
          type="text"
          placeholder="Student Number"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <input
          type="password"
          placeholder="Retype Password"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <button className="w-[462px] h-[75px] bg-[#5BA7CA] text-white text-lg">
          Sign Up
        </button>
        <a href="#" className="mt-4 text-sm underline">
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
};

export default SignupPage;