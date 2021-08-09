import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
function CreateMantis() {
  return (
    <Container fluid as="section">
      <h1>Create Mantis</h1>
      <hr />
      <form>
        <Row>
            <Col>
          <label htmlFor="name" className="form-component">
            Name:
            <input type="text" style={{width: "90%", marginLeft:"10px"}}/>
          </label>
          </Col>
        </Row>
        <Row>
            <Col>
          <label htmlFor="status" className="form-component">
            Status:
            <input type="text" style={{width: "90%", marginLeft:"10px"}} />
          </label>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default CreateMantis;
