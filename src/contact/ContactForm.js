import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Container>
    <form>
      <Row>
        <label htmlFor="name">
          Name:
          <input type="text" className="contact-form" name="name" id="name" />
        </label>
      </Row>
      <Row>
        <label htmlFor="email">
          Email:
          <input type="text" className="contact-form" name="email" id="email" />
        </label>
      </Row>
      <Row>
        <label htmlFor="message">
          Message:
          <textarea name="message" className="contact-form" id="message" />
        </label>
      </Row>
      <div className="btn-group" role="group" aria-label="Basic example" style={{marginBottom: "10px"}}>
        <button type="button" className="btn btn-success btn-outline-light">
          Cancel
        </button>
        <button type="button" className="btn btn-success btn-outline-light">
          Submit
        </button>
      </div>
    </form>
    </Container>
  );
}

export default ContactForm;
