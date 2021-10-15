import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PostUpdate() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/updates");
  };
  return (
    <Container fluid as="section">
      <h1>Post an Update</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image_id">
          <Form.Label>Image ID:</Form.Label>
          <Form.Control type="number" min="0" max="30"/>
        </Form.Group>
        <Button
          variant="success"
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button as="submit" variant="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PostUpdate;
