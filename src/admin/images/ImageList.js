import React, { useState, useEffect } from "react";
import EditImage from "./EditImage";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
//import images from "../../data/images.json";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { listImages } from "../../utils/api";
import { deleteImage } from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function ImageList() {
  //console.log('images', images);
  const [images, setImages] = useState([]);
  const [saves, setSaves] = useState(0);
  const [imagesError, setImagesError] = useState([]);
  useEffect(loadImages, [saves]);
  function loadImages() {
    const abortController = new AbortController();
    setImagesError(null);
    listImages(abortController.signal).then(setImages).catch(setImagesError);
    return () => {
      abortController.abort();
    };
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (
      window.confirm("Do you want to delete this image? This cannot be undone.")
    ) {
      deleteImage(e.target.id)
      .then(() => document.location.reload());

    }
  };
  const imageElements = images.map(
    ({ image_id, caption, image_url, carousel_image }) => {
      let badgeElement = null;
      carousel_image
        ? (badgeElement = (
            <Badge bg="info" text="light">
              Carousel
            </Badge>
          ))
        : (badgeElement = null);
      return (
        <Card style={{ width: "18rem" }} key={image_id}>
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title>
              {caption} {badgeElement}
            </Card.Title>

            <Card.Img
              src={`https://i.${image_url.slice(8)}.jpg`}
              title="source: imgur.com"
              alt={"image" + image_id}
              height="300px"
            />

            <ButtonGroup aria-label="images-buttons" style={{ width: "50%" }}>
              <Button id={image_id} variant="danger" onClick={handleDelete}>
                Delete
              </Button>
              <EditImage
                image_id={image_id}
                image_title={caption}
                url={image_url}
                inCarousel={carousel_image}
                setSaves={setSaves}
                saves={saves}
              />
            </ButtonGroup>
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <Container
      as="section"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {" "}
      {images ? imageElements : <ErrorAlert error={imagesError} />}{" "}
    </Container>
  );
}

export default ImageList;
