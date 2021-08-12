import React from "react";
import EditImage from "./EditImage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import images from "../../data/images.json";
import Container from "react-bootstrap/Container";


function ImageList() {
  //console.log('images', images);
  const imageList = images.data;
  //console.log('image list', imageList);
  const handleDelete = (e) => {
      e.preventDefault();
    if (
        window.confirm(
          "Do you want to delete this image? This cannot be undone."
        )
      ) {
          console.log('some ajax to delete the image');
      }
  }
  const imageElements = imageList.map(({ image_id, image_title, url }) => {
    return (
      <Card style={{ width: "18rem" }} key={image_id}>
        <a href={url}>
          <img
            src={`https://i.${url.slice(8)}.jpg`}
            title="source: imgur.com"
            alt={"image" + image_id}
            height="200px"
          />
        </a>
        <Card.Body>
          <Card.Title>{image_title}</Card.Title>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
          <EditImage image_id={image_id} image_title={image_title} url={url}/>
        </Card.Body>
      </Card>
    );
  });
  return <Container as="section" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}> {imageElements} </Container>;
}

export default ImageList;
