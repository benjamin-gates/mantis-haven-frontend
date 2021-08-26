import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import galinthiasamoena2 from "./img/galinthias-amoena-2.jpg";
import majangellamoultoni from "./img/majangella-moultoni.jpg";

function Home() {
  const imageURLs = [
    'https://imgur.com/HUU7CWt',
    'https://imgur.com/do3JW7f',
    'https://imgur.com/jx9sWmH',
    'https://imgur.com/A0wQ8qv',
  ];

  const imageElements = imageURLs.map((url, index) => {
    return (
      <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
        <img src={`https://i.${url.slice(8)}.jpg`} title="source: imgur.com" alt={"image"+index} height="450px" />
        <Carousel.Caption>
          <h5 style={{ color: "#C3C9E3" }}>Image {index}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Container
      fluid
      as="main"
      style={{ backgroundColor: "black", margin: "0px", padding: "0px" }}
    >
      <Carousel fade>
       {imageElements}
      </Carousel>
    </Container>
  );
}

export default Home;
