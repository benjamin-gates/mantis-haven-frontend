import React from "react";
import Container from "react-bootstrap/Container";

function PostUpdate(){
    return(
        <Container fluid>
            <h1>Post an Update</h1>
            <form>
                <label htmlFor="title">
                    Title:
                    <input type="text" />
                </label>
                <label htmlFor="message">
                    Message:
                    <input type="text" />
                </label>

            </form>
        </Container>
    )
}

export default PostUpdate;