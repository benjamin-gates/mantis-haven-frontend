import React from "react";
import ImageList from "./ImageList";
import CreateImage from "./CreateImage";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ImageDashboard() {
  return (
      <Row>
        <Col sm={8}>
          <ImageList />
        </Col>
        <Col sm={4}>
          <CreateImage />
        </Col>
      </Row>
  );
}

export default ImageDashboard;
