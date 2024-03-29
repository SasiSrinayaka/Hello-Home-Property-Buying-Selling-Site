// HomePage.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/MainImage/p21.jpg"
            alt="First slide"
            style={{ maxHeight: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/MainImage/p22.jpg"
            alt="Second slide"
            style={{ maxHeight: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/MainImage/p23.jpg"
            alt="Third slide"
            style={{ maxHeight: "600px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
