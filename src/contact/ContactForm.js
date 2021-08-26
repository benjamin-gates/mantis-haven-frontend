import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ContactForm() {
  return (
    <Container fluid style={{ marginTop: "20px", marginBottom:"40px"}}>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message: </Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Button variant="success">Cancel</Button>
        <Button as="submit" variant="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
