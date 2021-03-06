import React from "react";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container fluid as="main">
      <h1>Contact</h1>
      <hr />
      <div>
        If you have any questions or just want to chat about mantids, then drop
        me a line here!{" "}
      </div>
      <ContactForm />
    </Container>
  );
}

export default Contact;
