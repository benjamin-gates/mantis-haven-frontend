import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
//import products from "../data/products.json";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { listProducts } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Shop() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(undefined);
  //const productList = products.data;
  useEffect(loadProducts, []);
  function loadProducts() {
    const abortController = new AbortController();
    setProductsError(null);
    listProducts(abortController.signal)
      .then(setProducts)
      .catch(setProductsError);
    return () => {
      abortController.abort();
    };
  }
  const productElements = products.map(
    ({ product_name, product_url, price, status, image_url }, index) => {
      return (
        <Col  xs={12} md={6} lg={4} xl={3}>
        <Card key={index}>
          <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Card.Title>{product_name}</Card.Title>
            {image_url ? (
              <Card.Img
                src={`https://i.${image_url.slice(8)}.jpg`}
                title="source: imgur.com"
                alt={"mantis image"}
                height="280px"
                style={{width: "280px"}}              />
            ) : null}

            <Card.Text style={{ alignSelf: "center", fontSize:"20px" }}><b>
              ${price}</b>
            </Card.Text>
            {status === "available" ? (
              <Button
                as="a"
                variant="success"
                href={product_url}
                target="_blank"
                style={{width: "300px"}}
              >
                Buy
              </Button>
            ) : (
              <Button variant="danger" disabled style={{width: "300px"}}>
                Out of Stock
              </Button>
            )}
          </Card.Body>
        </Card>
        </Col>
      );
    }
  );
  return (
    <Container fluid as="main" style={{ marginBottom: "40px"}}>
      <h1>Products</h1>
      <hr />
      {productsError ? (
        <ErrorAlert error={productsError} />
      ) : products ? (
        <Container
          fluid
          as="section"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {productElements}
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

export default Shop;
