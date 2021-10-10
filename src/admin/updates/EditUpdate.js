import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//import { editImage } from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function EditUpdate({ update_id, image_url, title, message }) {
  const [show, setShow] = useState(false);
  const [updateError, setUpdateError] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    title: title,
    message: message,
  });

  const handleChange = (e) => {
    console.log("event", e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    //console.log("some ajax to handle the save");
    /*editImage(image_id, formData)
      .then(() => setSaves(saves + 1))
      .then(() => setShow(false))
      .catch((error) => setUpdateError(error));*/
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header style={{ display: "flex", flexWrap: "wrap" }}>
          <Modal.Title
            as="label"
            htmlFor="title"
            className="mb-3"
            style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
          >
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              style={{
                display: "flex",
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
                width: "100%",
                flexWrap: "wrap",
              }}
              onChange={handleChange}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body as="label" htmlFor="message">
        <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              style={{
                display: "flex",
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
                width: "100%",
                flexWrap: "wrap",
              }}
              onChange={handleChange}
            />
        </Modal.Body>
        {updateError ? <ErrorAlert error={updateError} /> : null}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUpdate;
