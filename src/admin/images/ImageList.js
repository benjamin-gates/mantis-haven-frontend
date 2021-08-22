import React from "react";
import EditImage from "./EditImage";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import images from "../../data/images.json";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

function ImageList() {
  //console.log('images', images);
  const imageList = images.data;
  //console.log('image list', imageList);
  const handleDelete = (e) => {
    e.preventDefault();
    if (
      window.confirm("Do you want to delete this image? This cannot be undone.")
    ) {
      console.log("some ajax to delete the image");
    }
  };
  const imageElements = imageList.map(
    ({ image_id, image_title, url, inCarousel }) => {
      let badgeElement = null;
      inCarousel ? badgeElement = <Badge bg="info" text="light">Carousel</Badge> : badgeElement=null;
      return (
        <Card style={{ width: "18rem" }} key={image_id}>
          <Card.Body style={{display: "flex", flexDirection: "column"}}>
            <Card.Title>{image_title} {badgeElement}</Card.Title>
            <Card.Link href={url}>
              <img
                src={`https://i.${url.slice(8)}.jpg`}
                title="source: imgur.com"
                alt={"image" + image_id}
                height="200px"
              />
            </Card.Link>
            <ButtonGroup aria-label="images-buttons" style={{width: "50%"}}>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <EditImage
              image_id={image_id}
              image_title={image_title}
              url={url}
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
      {imageElements}{" "}
    </Container>
  );
}

export default ImageList;
