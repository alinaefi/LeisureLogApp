// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('login/', { username, password });
      // Handle successful login
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        className="inputBox"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;