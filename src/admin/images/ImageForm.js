import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ImageForm({initialState, handleSubmit}){
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: [e.target.value]
        });
    }

    //console.log("formData", formData);
    
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="image_title">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" value={formData.image_title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" value={formData.url} onChange={handleChange} />
                </Form.Group>
                    <Button variant="success" onClick={() => history.goBack()}>Cancel</Button>
                    <Button as="submit" variant="success">Submit</Button>
            </Form>
        </Container>
    )
}

export default ImageForm;