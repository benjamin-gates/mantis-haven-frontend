import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ImageForm({initialState, handleSubmit}){
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        });
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label htmlFor="image_title" className="form-component">
                        Title:
                        <input name="image_title" type="text" id="image_title" value={formData.image_title} onChange={handleChange} />
                    </label>
                </Row>
                <Row>
                    <label htmlFor="url" className="form-component">
                        URL:
                        <input name="url" id="url" type="text" value={formData.url} onChange={handleChange} />
                    </label>
                </Row>
                <Row>
                    <button type="button" className="btn btn-success btn-outline-light" onClick={() => history.goBack()}>Cancel</button>
                    <button type="submit" className="btn btn-success btn-outline-light">Submit</button>
                </Row>
            </form>
        </Container>
    )
}

export default ImageForm;