import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import './segafredo.css'; 

const Segafredo = () => {
  useEffect(() => {
    const app = new PIXI.Application({ backgroundAlpha: 0 });
    document.body.appendChild(app.view);

    const coke = PIXI.Sprite.from('https://t3.ftcdn.net/jpg/06/00/52/56/360_F_600525660_ZOii4pRaFvMAJjMbOHNrpA9q0eXJrcZa.jpg');
    coke.anchor.set(0.5);
    coke.x = app.screen.width / 2;
    coke.y = app.screen.height / 2;

    const rotationSpeed = 0.008; 

    app.stage.addChild(coke);

    app.ticker.add(() => {
      coke.rotation += rotationSpeed;
    });

    return () => {
      app.destroy();
    };
  }, []);



  return (
    <div className="diet-coke-container">
      <h1>D</h1>
    </div>
  );
};

export default Segafredo;
