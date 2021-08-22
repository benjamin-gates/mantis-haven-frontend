import React from "react";
import ImageForm from "./ImageForm";
import Container from "react-bootstrap/Container";

function CreateImage() {
  const initialState = {
    image_id: "",
    url: "",
    image_title: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create image ajax
  };
  return (
    <Container>
      <h1>Add Image</h1>
      <hr />
      <ImageForm initialState={initialState} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default CreateImage;
