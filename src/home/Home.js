import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import galinthiasamoena2 from "./img/galinthias-amoena-2.jpg";
import majangellamoultoni from "./img/majangella-moultoni.jpg";
import {listImages} from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Home() {
  const [images, setImages] = useState([]);
  const [imagesError, setImagesError] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  useEffect(loadImages, []);
  function loadImages() {
    const abortController = new AbortController();
    setImagesError(null);
    listImages(abortController.signal).then(setImages).catch(setImagesError);
    return () => {
      abortController.abort();
    };
  }


  const carouselImages = images.filter(({carousel_image}) => carousel_image)

  const imageElements = carouselImages.map(({image_url, caption}, index) => {
    return (
      <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
        <img src={`https://i.${image_url.slice(8)}.jpg`} title="source: imgur.com" alt={"image"+index} height="550px"/>
        <Carousel.Caption style={{textAlign: "center"}}>
          <h5 style={{ color: "#C3C9E3", textAlign: "center", alignSelf: "center", alignContent: "center"}}>{caption}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Container
      fluid
      as="main"
      style={{ backgroundColor: "black", margin: "0px", padding: "20px 20px 50px 20px" }}
    >
      {images.length ? <Carousel variant="dark" fade>
       {imageElements}
       {/*<ErrorAlert error={imagesError} />*/}
      </Carousel> : <div>Loading...</div>}
    </Container>
  );
}

export default Home;
