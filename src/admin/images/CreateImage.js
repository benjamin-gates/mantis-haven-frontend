import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import ImageForm from "./ImageForm";
import Container from "react-bootstrap/Container";
import {createImage} from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function CreateImage() {
  const initialState = {
    image_url: "",
    caption: "",
  };
  const history = useHistory();
  const [createError, setCreateError] = useState(undefined);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createImage(formData)
    .then(setFormData(initialState))
    .then(history.push("/admin/dashboard/images"))
    .catch(setCreateError)
  };
  return (
    <Container fluid as="section" style={{ marginBottom: "40px" }}>
      <h1>Add Image</h1>
      <hr />
      <ImageForm setFormData={setFormData} handleSubmit={handleSubmit} formData={formData}/>
     {createError ? <ErrorAlert error={createError} /> : null}
    </Container>
  );
}

export default CreateImage;
