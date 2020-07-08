import React from 'react';
import {Link} from 'react-router';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import '../styles/navbar.scss';
import PropTypes from 'prop-types'

let NavBar = (props) => {

  const loginOrProfile = (auth) => {

    return auth.isAuthenticated ?
      <Nav className="float-xs-right" navbar>
        <NavItem className="navbar-text">
          <Link to="/profile">Welcome back {auth.username}</Link>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">Logout</NavLink>
        </NavItem>
      </Nav>

      :

      <Nav className="float-xs-right" navbar>
        <NavItem>
          <NavLink tag={Link} to="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">Log in</NavLink>
        </NavItem>
      </Nav>;
  };


  return (
    <div>
      <Navbar color="inverse">
        <NavbarBrand href="/">Sample</NavbarBrand>
        {loginOrProfile(props.auth)}
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

export default NavBar;
