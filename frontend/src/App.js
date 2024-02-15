import React from 'react';
import Logout from './components/Logout';
import NotAuthNavbar from './components/NotAuthNavbar';
import Footer from './components/Footer';
import BodyContainer from './components/BodyContainer';
import './App.css';

const App = () => {
  return (
    <div>
      {/* non-logged in user view */}
      <NotAuthNavbar />
      <BodyContainer msg='Welcome!' />
      <Footer />

      {/* <h2>Logout</h2>
      <Logout /> */}
    </div>
  );
};

export default App;
