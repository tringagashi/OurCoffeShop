import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./princCaffe.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PrincCaffe = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="video-section" data-aos="circle-in-top-right">
        <video autoPlay loop className="video">
          <source src="../../../videos/princCoffee.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section">
        <div className="container">
          <div className="textbox" data-aos="fade-right">
            <h2>Enjoy black coffee with some sweet people! 🙌</h2>
            <p>
              It is an original mix of original and selected beans of coffee, in
              compliance with unique recipes and designed for those who enjoy
              strong and traditional taste of coffee, black with tasty cream. It
              is the most sold product from the Prince Caffe and the most sold
              coffee product in our country. It is sold in regional countries as
              well. Capacity of packing for shift in a day is 15.000 kg
            </p>
          </div>
          <div className="imgbox" data-aos="fade-left">
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showStatus={false}
              showThumbs={false}
            >
              <div>
                <img
                  src="https://princecaffe.com/wp-content/uploads/2021/03/Turke1.jpg"
                  alt="Slide 1"
                />
              </div>
              <div>
                <img
                  src="https://princecaffe.com/wp-content/uploads/2023/04/feed.jpg"
                  alt="Slide 2"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRt8dR8v5SIwkGdFCOCEpXk_eIvBXG-jaWA&s"
                  alt="Slide 3"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="cover-section">
        <img
          src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cover Image"
        />
      </div>
    </>
  );
};

export default PrincCaffe;
