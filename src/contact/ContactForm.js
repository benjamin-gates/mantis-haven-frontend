import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ContactForm() {
  return (
    <Container fluid style={{marginTop: "20px"}}>
    <form>
      <Row>
        <label htmlFor="name" className="form-component">
          Name:
          <input type="text" name="name" id="name" style={{width: "80%", marginLeft: "20px"}}/>
        </label>
      </Row>
      <Row>
        <label htmlFor="email" className="form-component">
          Email:
          <input type="text" name="email" id="email" style={{width: "80%", marginLeft: "20px"}}/>
        </label>
      </Row>
      <Row>
        <label htmlFor="message" className="form-component">
          Message:
          <textarea name="message"  id="message" style={{width: "79%", marginLeft: "10px"}}/>
        </label>
      </Row>
      <div className="btn-group" role="group" aria-label="Basic example" style={{marginBottom: "10px", marginLeft: "10px"}}>
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
