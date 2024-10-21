
import React, { useState } from 'react';
import userModels from '../models/userModels';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Email:", email, "Password:", password); // Check if these values are correct
    if (email && password) {
      userModels.loginUser(email, password);
    } else {
      alert('Please provide both email and password');
    }
  };
  

  return (
    <form>
      <input
  type="email"
  placeholder="Email"
  name="email"
  value={email} // Binding the state
  onChange={(e) => setEmail(e.target.value)} // Updating the state
/>
<input
  type="password"
  name="password"
  placeholder="Password"
  value={password} // Binding the state
  onChange={(e) => setPassword(e.target.value)} // Updating the state
/>

      <button onClick={handleLogin}>Login</button> {/* Call the handler */}
    </form>
  );
};

export default LoginPage;
