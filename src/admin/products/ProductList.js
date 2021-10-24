import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { listProducts, deleteProduct } from "../../utils/api";
import EditProduct from "./EditProduct";
import ErrorAlert from "../../layout/ErrorAlert";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(undefined);
  const [deleteError, setDeleteError] = useState(undefined);
  const [saves, setSaves] = useState(0);
  const [deleteClicks, setDeleteClicks] = useState(0);
  useEffect(loadProducts, [deleteClicks, saves]);
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
  const handleDelete = (e) => {
    e.preventDefault();
    if (
      window.confirm("Do you want to delete this image? This cannot be undone.")
    ) {
      deleteProduct(e.target.id)
      .then(() => setDeleteClicks(deleteClicks + 1))
      .catch(setDeleteError);
    }
  };
  const productElements = products.map(
    ({ product_id, product_name, product_url, price, status, image_url, image_id }, index) => {
      return (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title>
              {product_name}
              {status === "available" ? (
                <Badge bg="success" size="lg" style={{marginLeft: "10px", color: "white"}}>
                  {" "}
                  {`${
                    status.substring(0, 1).toUpperCase() + status.substring(1)
                  }`}{" "}
                </Badge>
              ) : (
                <Badge bg="danger" style={{color: "white"}}> Out of Stock </Badge>
              )}
            </Card.Title>

            {image_url ? <Card.Img
              src={`https://i.${image_url.slice(8)}.jpg`}
              title="source: imgur.com"
              alt={"mantis image"}
              height="300px"
            /> : null}
            <Card.Text style={{ alignSelf: "center" }}>
              Price: ${price}
            </Card.Text>
            <ButtonGroup aria-label="images-buttons" style={{ width: "50%" }}>
            <Button id={product_id} variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <EditProduct
              product_name={product_name}
              product_id={product_id}
              product_url={product_url}
              price={price}
              image_id={image_id}
              status={status}
              setSaves={setSaves}
              saves={saves}
            />
          </ButtonGroup>
          {deleteError ? <ErrorAlert error={deleteError} /> : null}
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <Container fluid as="main" style={{ marginBottom: "40px" }}>
      <h1>Products</h1>
      <hr />
      { productsError ? <ErrorAlert error={productsError} /> : products ? (
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

export default ListProducts;
