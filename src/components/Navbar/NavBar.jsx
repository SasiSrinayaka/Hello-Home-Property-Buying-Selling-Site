import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/public/images/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="container1">
        <img src="/public/images/logo.png" alt="" className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={`m-1 ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/properties"
              className={`m-1 ${
                location.pathname === "/properties" ? "active" : ""
              }`}
            >
              Properties
            </Nav.Link>
            <Nav.Link
              href="/aboutus"
              className={`m-1 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/services"
              className={`m-1 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/contactus"
              className={`m-1 ${
                location.pathname === "/contactus" ? "active" : ""
              }`}
            >
            Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
