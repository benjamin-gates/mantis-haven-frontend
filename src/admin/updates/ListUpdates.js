import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { listUpdates, deleteUpdate } from "../../utils/api";
import { formatAsDate } from "../../utils/date-time";
import EditUpdate from "./EditUpdate";
import ErrorAlert from "../../layout/ErrorAlert";

function ListUpdates() {
  const [updates, setUpdates] = useState([]);
  const [saves, setSaves] = useState(0);
  const [updatesError, setUpdatesError] = useState(null);
  const [deleteClicks, setDeleteClicks] = useState(0);
  const [deleteError, setDeleteError] = useState(undefined);
  useEffect(loadUpdates, [deleteClicks, saves]);
  function loadUpdates() {
    const abortController = new AbortController();
    setUpdatesError(null);
    listUpdates(abortController.signal).then(setUpdates).catch(setUpdatesError);
    return () => {
      abortController.abort();
    };
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (
      window.confirm("Do you want to delete this image? This cannot be undone.")
    ) {
      deleteUpdate(e.target.id)
      .then(() => setDeleteClicks(deleteClicks + 1))
      .catch(setDeleteError);
    }
  };

  const updatesElement = updates.map(
    ({ update_id, title, message, image_id, created_at, image_url }, index) => {
      return (
        <Card key={index} style={{ marginBottom: "10px" }}>
          <Card.Header>{formatAsDate(created_at)}</Card.Header>
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
          <ButtonGroup aria-label="images-buttons" style={{ width: "50%" }}>
            <Button id={update_id} variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <EditUpdate
              title={title}
              update_id={update_id}
              message={message}
              image_id={image_id}
              setSaves={setSaves}
              saves={saves}
            />
          </ButtonGroup>
          {deleteError ? <ErrorAlert error={deleteError} /> : null}
        </Card>
      );
    }
  );
  return (
    <Container fluid as="main" style={{ marginBottom: "40px" }}>
      <h1>Updates</h1>
      <hr />
      {updatesError ? <ErrorAlert error={updatesError} /> : updatesElement}
    </Container>
  );
}

export default ListUpdates;
