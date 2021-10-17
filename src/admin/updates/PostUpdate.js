import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ErrorAlert from "../../layout/ErrorAlert";
import { createUpdate } from "../../utils/api";

function PostUpdate() {
  const initialState = {
    title: "",
    message: "",
    image_id: "",
  };
 

  const [formData, setFormData] = useState(initialState);
  const [createError, setCreateError] = useState(undefined);
  const handleChange = (e) => {
    setFormData({ ... formData, [e.target.id]: e.target.value})
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUpdate({
      title: formData.title,
      message: formData.message,
      image_id: parseInt(formData.image_id)
    })
      .then(() => setFormData(initialState))
      .then(() => history.push("/admin/dashboard/updates"))
      .catch(setCreateError);
  };
  //console.log('parsedId', parseInt(formData.image_id));
  //console.log("form data", formData);
  return (
    <Container fluid as="section">
      <h1>Post an Update</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image_id">
          <Form.Label>Image ID:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="30"
            value={formData.image_id}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" onClick={() => history.goBack()}>
          Cancel
        </Button>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </Form>
      {createError ? <ErrorAlert error={createError} /> : null}
    </Container>
  );
}

export default PostUpdate;
