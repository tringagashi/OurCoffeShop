import React, { useEffect, useRef } from "react";
import "./nespresso.css";

const Nespresso = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      audioElement.play();
    };

   
    playAudio();

    
    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  return (
    <>
   

      <div className="fuzetea-container" transition-style="in:circle:top-right">

      <div  id="container">
        <h2 class="title">
          <span class="title-word title-word-1">OUR</span> 
          <span class="title-word title-word-2">BELOVED</span>
          <span class="title-word title-word-3">NESPRESSO</span>
        </h2>
      </div>

        <div className="fuzetea-bubble">
          <img
            src="https://images.pexels.com/photos/21033142/pexels-photo-21033142/free-photo-of-food-light-art-abstract.jpeg"
            alt="Nespresso Logo"
            className="nespresso-logo"
          />
        </div>
        <audio ref={audioRef} src="../../sounds/nespresso.wav" autoPlay />


       
      </div>
    </>
  );
};

export default Nespresso;

