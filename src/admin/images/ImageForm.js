import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ImageForm({setFormData, handleSubmit, formData}){
    const history = useHistory();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

   // console.log("formData", formData);
    
    return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="caption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" value={formData.caption} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image_url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" value={formData.image_url} onChange={handleChange} />
                </Form.Group>
                    <Button variant="success" onClick={() => history.goBack()}>Cancel</Button>
                    <Button type="submit" variant="success">Submit</Button>
            </Form>
    )
}

export default ImageForm;