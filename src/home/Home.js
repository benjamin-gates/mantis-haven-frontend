import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import galinthiasamoena from "./img/galinthias-amoena.jpg";
import galinthiasamoena2 from "./img/galinthias-amoena-2.jpg";
import majangellamoultoni from "./img/majangella-moultoni.jpg";



function Home(){
    return (
        <Container fluid as="main" style={{ backgroundColor: "black", margin: "0px", padding: "0px"}}>
        <Carousel fade>
        <Carousel.Item style={{display: "flex", justifyContent: "center"}}>
          <img
            className="d-block"
            src={galinthiasamoena}
            alt="Galinthias amoena"
            height="450px"
          />
          <Carousel.Caption>
            <h5 style={{color: "#C3C9E3"}}>Galinthias amoena</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{display: "flex", justifyContent: "center"}}>
          <img
            className="d-block"
            src={galinthiasamoena2}
            alt="Galinthias amoena (2)"
            height="450px"
          />
      
          <Carousel.Caption>
            <h5 style={{color: "#C3C9E3"}}>Galinthias amoena (2)</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{display: "flex", justifyContent: "center"}}>
          <img
            className="d-block"
            src={majangellamoultoni}
            alt="Majangella moultoni"
            height="450px"
          />
      
          <Carousel.Caption>
            <h5 style={{color: "#C3C9E3"}}>Majangella moultoni (Giant moss mantis)</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      )
}

export default Home;