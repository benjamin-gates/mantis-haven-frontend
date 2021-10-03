import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {editImage} from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function EditImage({ image_id, image_title, url, inCarousel, setSaves, saves }) {
  const [show, setShow] = useState(false);
  const [editError, setEditError] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    caption: image_title,
    image_url: url
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    //console.log("some ajax to handle the save");
    editImage(image_id, formData)
    .then(() => setSaves(saves + 1))
    .then(() => setShow(false))
    .catch((error) => setEditError(error));
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header>
          <Modal.Title as="label" htmlFor="caption" wrap>
            <input
              type="text"
              name="caption"
              id="caption"
              value={formData.caption}
              style={{
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
              }}
              onChange={handleChange}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body as="a" href={url}>
          <img
            src={`https://i.${url.slice(8)}.jpg`}
            title="source: imgur.com"
            alt={"image" + image_id}
            height="200px"
          />
        </Modal.Body>
        <Modal.Body as="label" htmlFor="description">
          <input
            type="text"
            name="description"
            id="description"
            value="description"
            style={{ border: "0px solid" }}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Body as="label" htmlFor="inCarousel">In Carousel: 
          <input
            type="checkbox"
            name="inCarousel"
            id="inCarousel"
            style={{ border: "0px solid" }}
            onChange={handleChange}
          />
        </Modal.Body>
        {editError ? <ErrorAlert error={editError} /> : null}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button as="submit" variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditImage;
