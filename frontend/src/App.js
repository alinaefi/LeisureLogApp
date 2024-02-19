
import { NotAuthNavbar, AuthNavbar } from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './App.css';
import { useAuth } from './components/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      {user ? <AuthNavbar /> : <NotAuthNavbar />}
      <Routes>
        <Route path="login/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/posts" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
