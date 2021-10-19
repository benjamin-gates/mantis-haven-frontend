import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import images from "../../data/images.json";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ErrorAlert from "../../layout/ErrorAlert";
import { createProduct } from "../../utils/api";

function AddProduct() {
  const history = useHistory();
  const initialState = {
    product_name: "",
    product_url: "",
    price: "",
    image_id: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [createError, setCreateError] = useState(undefined);
  /*const imageList = images.data;
  const imageOptions = imageList.map(
    ({ image_id, image_title, url }, index) => {
      return (
        <option value={image_id} key={image_id}>
          {image_title}
        </option>
      );
    }
  );*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("substring(0,22)", formData.product_url.substring(0, 22), "substring(3, 4)", formData.product_url.substring(3,4));
    setCreateError(undefined);
    createProduct({
      product_name: formData.product_name,
      product_url: formData.product_url,
      price: parseInt(formData.price),
      image_id: parseInt(formData.image_id),
    })
    .then(() => setFormData(initialState))
    .then(() => history.push("/admin/dashboard/products"))
    .catch(setCreateError);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCancel = (e) => {
    setFormData(initialState);
    history.goBack();
  };

  //console.log("formData", formData);
  return (
    <Container fluid as="section" style={{ marginBottom: "40px" }}>
      <h1>Add Product</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="product_name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.product_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_url">
          <Form.Label>Square URL</Form.Label>
          <Form.Control
            type="text"
            value={formData.product_url}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image_id">
          <Form.Label>Image ID</Form.Label>
          <FormControl
            type="number"
            min="0"
            value={formData.image_id}
            onChange={handleChange}
          />
          {/*<Form.Select aria-label="Default select example" size="lg">
            <option>Choose a Mantis</option>
            {imageOptions}
  </Form.Select>*/}
        </Form.Group>
        <Button variant="success" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      {createError ? <ErrorAlert error={createError} /> : null}
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
