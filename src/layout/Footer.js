import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import instagram from "./instagram.png";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
function Footer() {
  return (
    <Navbar as="footer" fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Row style={{ color: "grey", alignself: "center" }}>
          <Nav className="me-auto">
            {" "}
            <Nav.Item>Follow me on Instagram! </Nav.Item>
            <Nav.Link
              href="https://www.instagram.com/mantis_haven/?hl=en"
              target="_blank"
            >
              <Image src={instagram} width="25px" height="25px" />
            </Nav.Link>
          </Nav>
        </Row>
        <Row style={{ color: "grey", alignself: "center" }}>
          <Nav>
          <Nav.Link href="/login">Admin</Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
