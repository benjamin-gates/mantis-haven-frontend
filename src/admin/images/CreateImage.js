import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import ImageForm from "./ImageForm";
import Container from "react-bootstrap/Container";
import {createImage} from "../../utils/api";

function CreateImage() {
  const initialState = {
    image_url: "",
    caption: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createImage(formData)
    .then(setFormData(initialState))
    .then(history.push("/"))
  };
  return (
    <Container>
      <h1>Add Image</h1>
      <hr />
      <ImageForm setFormData={setFormData} handleSubmit={handleSubmit} formData={formData}/>
    </Container>
  );
}

export default CreateImage;
