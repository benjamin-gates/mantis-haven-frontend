import React from "react";
import Container from "react-bootstrap/Container";
import notifications from "../data/notifications.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Updates() {
  const notificationsList = notifications.data;
  const notificationsElement = notificationsList.map(
    ({ title, message, image_url, date }, index) => {
      return (
        <Card key={index} style={{marginBottom: "10px"}}>
          <Card.Header>{date}</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{message}</Card.Text>
              </Col>

              {image_url ? (
                <Col xs={2}>
                  <Card.Img
                    src={`https://i.${image_url.slice(8)}.jpg`}
                    title="source: imgur.com"
                    alt={"mantis image"}
                    style={{ width: "100%" }}
                  />
                </Col>
              ) : null}
            </Row>
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <Container fluid as="main" style={{marginBottom: "40px"}}>
      <h1>Updates</h1>
      <hr />
      {notificationsElement}
    </Container>
  );
}

export default Updates;
