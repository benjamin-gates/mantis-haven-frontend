import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
//import notifications from "../data/notifications.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {listUpdates} from "../utils/api";
import {formatAsDate} from "../utils/date-time";

function Updates() {
  const[updates, setUpdates] = useState([]);
  const[updatesError, setUpdatesError] = useState(null);
  useEffect(loadUpdates, []);
  function loadUpdates() {
    const abortController = new AbortController();
    setUpdatesError(null);
    listUpdates(abortController.signal).then(setUpdates).catch(setUpdatesError);
    return () => {
      abortController.abort();
    };
  }
  //const notificationsList = notifications.data;
  const updatesElement = updates.map(
    ({title, message, created_at}, index) => {
      return (
        <Card key={index} style={{marginBottom: "10px"}}>
          <Card.Header>{formatAsDate(created_at)}</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{message}</Card.Text>
              </Col>

              {/*image_url ? (
                <Col xs={2}>
                  <Card.Img
                    src={`https://i.${image_url.slice(8)}.jpg`}
                    title="source: imgur.com"
                    alt={"mantis image"}
                    style={{ width: "100%" }}
                  />
                </Col>
              ) : null*/}
            </Row>
          </Card.Body>
              </Card>
              );
    
    });
  return (
    <Container fluid as="main" style={{marginBottom: "40px"}}>
      <h1>Updates</h1>
      <hr />
      {/*notificationsElement*/}
      {updatesElement}
    </Container>
  );
}

export default Updates;