import React from "react";
import {useHistory} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function CreateMantis() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/shop");
  }
  return (
    <Container fluid as="section">
      <h1>Create Mantis</h1>
      <hr />
      <form onSubmit={handleSubmit}> 
        <Row>
          <Col>
            <label htmlFor="name" className="form-component">
              Name:
              <input type="text" style={{ width: "90%", marginLeft: "10px" }} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="status" className="form-component">
              Status:
              <input type="text" style={{ width: "90%", marginLeft: "10px" }} />
            </label>
          </Col>
        </Row>
        <Row>
          <div
            className="btn-group"
            role="group"
            aria-label="login-buttons"
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "left",
              alignSelf: "left",
              margin: "0px",
            }}
          >
            <button
              type="button"
              className="btn btn-success btn-outline-light"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success btn-outline-light">
              Submit
            </button>
          </div>
        </Row>
      </form>
    </Container>
  );
}

export default CreateMantis;
