import React, { useEffect } from "react";

import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-stone-200">
      <div className="video-section">
        <video autoPlay loop muted className="video">
          <source src="../../../videos/home1.mp4" type="video/mp4" />
        </video>
        <div class="text-overlay">
          <p>Welcome to our Coffee Shop</p>
        </div>
      </div>

      <div
        className="section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div className="image-container">
          <img src="../../../images/coffecup.webp" alt="Image" />
        </div>

        <div className="card-text">
          <h2>Coffee Shop</h2>
          <p>
            Welcome to Coffee Shop, where every cup tells a story. Established
            with a passion for quality and a love for coffee culture, we strive
            to craft exceptional experiences, one sip at a time.
          </p>
        </div>
      </div>
      <div className="p-5 pb-10">
        <div className="picture-frame">
          <div className="image-container">
            <h2 className="title">Enjoy a Good Coffee</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
