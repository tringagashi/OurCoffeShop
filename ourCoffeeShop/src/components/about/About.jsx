import React, { useEffect } from "react";
import "./about.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div class="container">
        <h2 class="title">
          <span class="title-word title-word-1">OUR</span>
          <span class="title-word title-word-2">COFFE</span>
          <span class="title-word title-word-3">COMPANY</span>
        </h2>
      </div>
      <div className="video-section">
        <video autoPlay loop muted className="video">
          <source src="../../../videos/aboutVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section" data-aos="flip-right">
        <div className="text-box">
          <h2>Our Coffe Shop</h2>
          <p> 
            Welcome to Coffee Shop, where every cup tells a story.
            Established with a passion for quality and a love for coffee
            culture, we strive to craft exceptional experiences, one sip at a
            time. Our journey began with a simple mission: to create a space
            where coffee aficionados and casual drinkers alike can indulge in
            the finest brews, hand-selected from around the globe. From the rich
            aroma that greets you at the door to the warm smiles of our
            baristas, every visit to Coffee Shop is an invitation to
            savor the moment. Join us in celebrating the artistry of coffee and
            the joy of community. This is more than a café; it's a destination
            for connoisseurs, a sanctuary for seekers of the perfect brew. We
            invite you to linger over a cup, share stories with friends old and
            new, and experience the magic of coffee in every sip. At 
            Coffee Shop, we're not just serving coffee; we're brewing
            connections.
          </p>
        </div>
        <div className="slider-box" data-aos="flip-left">
          <Carousel
            autoPlay
            interval={2000}
            showArrows={false}
            showIndicators={false}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div
        class="cover-section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <img src="../../images/coffecup.webp" alt="Cover Image" />
        <img src="../../images/coffecup.webp" alt="Cover Image" />
        <img src="../../images/coffecup.webp" alt="Cover Image" />
        <img src="../../images/coffecup.webp" alt="Cover Image" />
        <img src="../../images/coffecup.webp" alt="Cover Image" />
      </div>
      <div class="container">
        <h2 class="title">
          <span class="title-word title-word-1">GRAB</span>
          <span class="title-word title-word-2">A</span>
          <span class="title-word title-word-3">COFFEE</span>
        </h2>
      </div>
    </>
  );
};

export default About;
