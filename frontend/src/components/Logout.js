import axios from 'axios';
import '../App.css';

const Logout = () => {

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('logout/');
      // Handle successful logout
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>
        Log Out
    </button>
  );
};

export default Logout;