import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
//import products from "../data/products.json";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {listProducts} from "../utils/api";

function Shop() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(undefined);
  //const productList = products.data;
  useEffect(loadProducts, []);
  function loadProducts() {
    const abortController = new AbortController();
    setProductsError(null);
    listProducts(abortController.signal).then(setProducts).catch(setProductsError);
    return () => {
      abortController.abort();
    };
  }
  const productElements = products.map(
    ({ product_name, product_url, price, status, image_url }, index) => {
      return (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title>{product_name}</Card.Title>

            <Card.Img
              src={`https://i.${image_url.slice(8)}.jpg`}
              title="source: imgur.com"
              alt={"mantis image"}
              height="300px"
            />
            <Card.Text style={{ alignSelf: "center" }}>Price: ${price}</Card.Text>
          {status==="available" ? <Button as="a" variant="success" href={product_url} target="_blank">
            Buy
        </Button> : <Button variant="danger">Out of Stock</Button>}
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <Container fluid as="main" style={{marginBottom: "40px"}}>
      <h1>Products</h1>
      <hr />
      {products ? <Container
        fluid
        as="section"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {productElements}
      </Container> : <div>Loading...</div>}
    </Container>
  );
}

export default Shop;
