import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "./logo.jpg";
import cart from "./cart.png";

import Col from "react-bootstrap/Col";
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
      <Container fluid>
        <Col md={4} alignSelf="flex-start">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col md={4} style={{ textAlign: "center" }}>
          <Navbar.Brand>
            <Image
              src={logo}
              width="100px"
              height="100px"
              roundedCircle
              fluid
            />
          </Navbar.Brand>
        </Col>
        <Col md={4} style={{ textAlign: "right", alignSelf:"center"}}>
          <Nav.Link href="/cart">
            <Image src={cart} width="50px" height="50px" roundedCircle fluid />
          </Nav.Link>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Menu;
