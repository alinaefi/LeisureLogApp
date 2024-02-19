import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  auth: null,
  setAuth: () => { },
  user: null,
  login: (credentials) => { },
  logout: () => { },
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('auth') === 'true' || false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const saveUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const login = async (credentials) => {
    console.log(credentials);
    try {
      const res = await axios.post('http://127.0.0.1:8000/api-auth/login/', credentials, { withCredentials: true });
      if (res.status === 200) {
        console.log(res.data);
        setAuth(true);
        setUser(res.data.user);
        saveUser(res.data.user);
      }
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api-auth/logout/', { withCredentials: true });

      if (res.status === 200) {
        console.log(res.data);
        localStorage.removeItem('user');
        localStorage.removeItem('auth');
        setAuth(false);
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;