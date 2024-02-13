import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import './App.css';


const App = () => {
  return (
    <div>
      <h2>Registration</h2>
      <RegistrationForm />
      <h2>Login</h2>
      <LoginForm />
      <h2>Logout</h2>
      <Logout />
    </div>
  );
};

export default App;
