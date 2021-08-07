import React from "react";
import Container from "react-bootstrap/Container";

function CreateMantis(){
    return (
        <Container>
            <h1>Create Mantis</h1>
            <form>
                <label htmlFor="name">Name:
                <input type="text" /></label>
                <label htmlFor="status">Status:
                <input type="text" /></label>
            </form>
        </Container>
    )


}

export default CreateMantis;