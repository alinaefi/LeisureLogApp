import '../App.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NotAuthNavbar = () => {
  return (
    <Navbar>
    <Nav tabs>
      <NavItem>
        <NavLink href="#">
          About Us
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Sign Up
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
    </Navbar>
  )
};

export default NotAuthNavbar;