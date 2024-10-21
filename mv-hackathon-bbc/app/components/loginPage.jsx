import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-[54px] mb-8">TBD</h1>
      <div className="w-[600px] h-[500px] bg-[#D9D9D9] flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-6">Login to TBD</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[462px] h-[75px] mb-[30px] px-4"
        />
        <button className="w-[462px] h-[75px] bg-[#5BA7CA] text-white text-lg">
          Login
        </button>
        <button className="mt-4 text-sm underline text-blue-600 hover:text-blue-800 focus:outline-none">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;