import React from "react";
import "./lavazza.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Lavazza = () => {
  return (
    <>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="fanta-section">
        <div class="fantaImage"></div>

        <div class="fantaText">
          <h1>LAVAZZA Coffee </h1>
          <br />
          <p>
            It's a classic iconic flavor inspiration in a bottle passion for
            life share every moment because embracing what makes you unique
            makes you cool thing.
          </p>
        </div>
      </div>

    
    </>
  );
};

export default Lavazza;
