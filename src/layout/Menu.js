import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "./logo-only.jpg";
import cart from "./cart.png";
import userIcon from "./abstract-user-flat-1.png";
import NavDropdown from "react-bootstrap/NavDropdown";

import Col from "react-bootstrap/Col";
import { NavItem } from "react-bootstrap";
function Menu() {
  return (
    <Navbar
      collapseOnSelect
      as="header"
      bg="dark"
      variant="dark"
      expand="lg"
      className="nav-bar"
    >
      <Container fluid style={{ alignItems: "left" }}>
        <Col xs={4} style={{ textAlign: "left", alignItems: "center" }}>
          <Navbar.Brand style={{ fontFamily: "'Meddon', 'cursive'" }}>
            <Image src={logo} width="50px" height="100px" roundedCircle fluid />{" "}
            Mantis Haven
          </Navbar.Brand>
        </Col>
        <Col xs={3} style={{ textAlign: "right", contentAlign: "right" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              
              <NavDropdown title="Shop" id="nav-dropdown">
                <NavDropdown.Item eventKey="1" href="/shop">Shop</NavDropdown.Item>
                <NavDropdown.Item eventKey="2" href="shipping-policy">
                  Shipping Policy
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/login"><Image src={userIcon} height="30px"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        {/* <Col xs={4} style={{ textAlign: "right", alignSelf:"center"}}>
          <Nav.Link href="/cart">
            <Image src={cart} width="50px" height="50px" roundedCircle fluid />
          </Nav.Link>
  </Col>*/}
      </Container>
    </Navbar>
  );
}

export default Menu;
