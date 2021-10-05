import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import { editImage } from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function EditImage({
  image_id,
  image_title,
  url,
  inCarousel,
  setSaves,
  saves,
}) {
  const [show, setShow] = useState(false);
  const [editError, setEditError] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    caption: image_title,
    image_url: url,
    carousel_image: inCarousel,
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
    editImage(image_id, formData)
      .then(() => setSaves(saves + 1))
      .then(() => setShow(false))
      .catch((error) => setEditError(error));
  };

  let checkboxStatus = null;
  if (inCarousel) {
    checkboxStatus = "checked";
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header style={{display: "flex", flexWrap: "wrap"}}>
          <Modal.Title as="label" htmlFor="caption" className="mb-3" style={{display: "flex", width: "100%", flexWrap: "wrap"}}>
            <input
              type="text"
              name="caption"
              id="caption"
              value={formData.caption}
              style={{
                display: "flex",
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
                width: "100%",
                flexWrap: "wrap"
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
        <Modal.Body as="label" htmlFor="carousel_image">
       <label htmlFor="carousel_image" style={{marginRight: "10px"}}>Carousel Image:</label>
          {formData.carousel_image ? (
            <input
              type="checkbox"
              name="carousel_image"
              defaultChecked="checked"
              id="carousel_image"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: !formData.carousel_image })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="carousel_image"
              id="carousel_image"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: !formData.carousel_image })
              }
            />
            )}
          
        </Modal.Body>
        {editError ? <ErrorAlert error={editError} /> : null}
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

export default EditImage;
