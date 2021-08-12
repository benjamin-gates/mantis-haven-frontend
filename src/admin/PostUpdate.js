import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";

function PostUpdate(){
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/updates");
    }
    return(
        <Container fluid as="section">
            <h1>Post an Update</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="form-component">
                    Title:
                    <input type="text" className="input-element"/>
                </label>
                <label htmlFor="message" className="form-component">
                    Message:
                    <input type="text" className="input-element"/>
                </label>
                <div className="btn-group" role="group" aria-label="login-buttons" style={{width: "100px", display: "flex", justifyContent: "left", alignSelf: "left", margin: "0px"}}>
            <button type="button" className="btn btn-success btn-outline-light" onClick={() => history.goBack()}>Cancel</button>
            <button type="submit" className="btn btn-success btn-outline-light">Submit</button>
            </div>
            </form>
        </Container>
    )
}

export default PostUpdate;