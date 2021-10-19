import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { editUpdate } from "../../utils/api";
import ErrorAlert from "../../layout/ErrorAlert";

function EditUpdate({ product_id, product_name, price, image_id, setSaves, saves }) {
  const [show, setShow] = useState(false);
  const [updateError, setUpdateError] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    product_name: product_name,
    price: price,
    image_id: image_id
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    /*editUpdate(update_id, {
      title: formData.title,
      message: formData.message,
      image_id: parseInt(formData.image_id)
    })
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
            htmlFor="product_name"
            className="mb-3"
            style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
          >
            <input
              type="text"
              name="product_name"
              id="product_name"
              value={formData.product_name}
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
        <Modal.Body as="label" htmlFor="price" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        Price: <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              style={{
                display: "flex",
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
                width: "100%",
                flexWrap: "wrap",
                marginLeft: "5px"
              }}
              onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Body as="label" htmlFor="image_id" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        Image ID: <input
              type="number"
              step="2"
              name="image_id"
              id="image_id"
              placeholder="Image Id"
              value={formData.image_id}
              style={{
                display: "flex",
                border: "0px solid",
                fontWeight: "bold",
                fontSize: "larger",
                width: "50%",
                flexWrap: "wrap",
                marginLeft: "5px"
              }}
              min="0"
              max="30"
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
