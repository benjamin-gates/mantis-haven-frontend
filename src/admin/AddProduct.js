import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import images from "../data/images.json";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function AddProduct() {
  const history = useHistory();
  const imageList = images.data;
  const imageOptions = imageList.map(
    ({ image_id, image_title, url }, index) => {
      return (
        <option value={image_id} key={image_id}>
          {image_title}
        </option>
      );
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/shop");
  };
  return (
    <Container fluid as="section" style={{ marginBottom: "40px" }}>
      <h1>Add Product</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product-url">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image_id">
          <Form.Select aria-label="Default select example" size="lg">
            <option>Choose a Mantis</option>
            {imageOptions}
          </Form.Select>
        </Form.Group>
        <Button variant="success">Cancel</Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      {/* <form onSubmit={handleSubmit}>
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
            <label htmlFor="product-url" className="form-component">
              URL:
              <input type="text" style={{ width: "90%", marginLeft: "10px" }} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="image" className="form-component">
              Image:
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
          </form>*/}
    </Container>
  );
}

export default AddProduct;
