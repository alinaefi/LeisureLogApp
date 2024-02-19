import '../App.css';
import axios from 'axios';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const NotAuthNavbar = () => {
    return (
        <Navbar>
            <Nav tabs>
                <NavItem>
                    <Link className="nav-link" href="#"> About Us </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to={"/login"}>Sign In</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to={"/register"}>Sign Up</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
};

const AuthNavbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const result = await logout();
            console.log(result);

            navigate('/login');
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    return (
        <Navbar>
            <Nav tabs>
                <NavItem>
                    <Link className="nav-link" href="#"> About Us </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to={"/posts"}>Dashboard</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" href="#"> My Account </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to={"/logout"} onClick={handleLogout}>Logout</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
};

export { NotAuthNavbar, AuthNavbar };