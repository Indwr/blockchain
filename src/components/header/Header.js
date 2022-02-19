import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact us</Link>
      </Navbar>
    </div>
  );
};

export default Header;
