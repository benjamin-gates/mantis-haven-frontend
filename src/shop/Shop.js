import React from "react";
import Card from "react-bootstrap/Card";
import products from "../data/products.json";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Shop() {
  const productList = products.data;
  const productElements = productList.map(
    ({ product_url, image_url }, index) => {
      return (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title>Mantis {index}</Card.Title>

            <Card.Img
              src={`https://i.${image_url.slice(8)}.jpg`}
              title="source: imgur.com"
              alt={"mantis image"}
              height="300px"
            />

            <Button as="a" variant="success" href={product_url}>
              Buy
            </Button>
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <Container fluid as="main">
      <h1>Products</h1>
      <hr />
      {productElements}
    </Container>
  );
}

export default Shop;
