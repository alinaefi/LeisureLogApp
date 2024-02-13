import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


const RegistrationForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('register/', { first_name, last_name, username, password });
      // Handle successful registration
      console.log(response.data);
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <input
        className="inputBox"
        type="text"
        placeholder="First Name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;