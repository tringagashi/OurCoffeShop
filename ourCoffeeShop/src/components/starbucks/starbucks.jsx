import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./starbucks.css";

const Starbucks = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className="video-section">
        <video autoPlay loop className="video">
          <source src="../../../videos/starbucks.mp4" type="video/mp4" />
        </video>
      </div>

      <section>
        <div className="main" >
          <div className="text" data-aos="fade-up">
            <h1>
              THAT'S WHAT<span>  I DRINK</span>
            </h1>
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

            <a href="#" className="btn">
              OUR COFFE SHOP
            </a>
          </div>

          <div className="image" data-aos="fade-left">
            <img src="https://www.pngall.com/wp-content/uploads/4/Starbucks-Coffee.png" alt="Sprite" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Starbucks;
