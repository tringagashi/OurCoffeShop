import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const Nescafe = () => {
  const pixiCanvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current = new PIXI.Application({
      width: 100, 
      height: 100, 
      background: '#ffffff9b',
      resizeTo: window,
    });
    const app = appRef.current;

    const texture = PIXI.Texture.from('../../images/111.png');
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    for (let i = 0; i < 10; i++) {
      createBunny(
        Math.floor(Math.random() * app.screen.width),
        Math.floor(Math.random() * app.screen.height)
      );
    }

    function createBunny(x, y) {
      const bunny = new PIXI.Sprite(texture);
      bunny.interactive = true;
      bunny.cursor = 'pointer';
      bunny.anchor.set(0.5);
      bunny.scale.set(3);
      bunny.scale.set(350 / texture.width, 300 / texture.height);
      bunny.on('pointerdown', onDragStart, bunny);
      bunny.x = x;
      bunny.y = y;
      app.stage.addChild(bunny);
    }

    let dragTarget = null;

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerup', onDragEnd);
    app.stage.on('pointerupoutside', onDragEnd);

    function onDragMove(event) {
      if (dragTarget) {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
      }
    }

    function onDragStart() {
      this.alpha = 0.5;
      dragTarget = this;
      app.stage.on('pointermove', onDragMove);
    }

    function onDragEnd() {
      if (dragTarget) {
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
      }
    }

    
    const titleStyle = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 48,
      fontWeight: 'bold',
      fill: ['#ffffff'],
      align: 'center',
      stroke: '#000000',
      strokeThickness: 6,
    });

    const title = new PIXI.Text('NESCAFE', titleStyle);
    title.anchor.set(0.5);
    title.x = -title.width / 2; 
    title.y = app.screen.height / 2;

    app.stage.addChild(title);

 
    const slideSpeed = 3; 
    const slideDistance = app.screen.width / 2 - title.width / 2; 

    const animateSlideIn = () => {
      const newPosition = app.screen.width / 2 - title.width / 2;
      const distanceToTravel = newPosition - title.x;
      const framesNeeded = Math.abs(distanceToTravel) / slideSpeed;

      PIXI.Ticker.shared.add(() => {
        const movementPerFrame = distanceToTravel / framesNeeded;
        title.x += movementPerFrame;

        if (Math.abs(title.x - newPosition) < slideSpeed) {
          title.x = newPosition;
          PIXI.Ticker.shared.stop();
          setTimeout(animateSlideOut, 2000); 
        }
      });
    };

    const animateSlideOut = () => {
      const newPosition = -title.width / 2;
      const distanceToTravel = newPosition - title.x;
      const framesNeeded = Math.abs(distanceToTravel) / slideSpeed;

      PIXI.Ticker.shared.add(() => {
        const movementPerFrame = distanceToTravel / framesNeeded;
        title.x += movementPerFrame;

        if (Math.abs(title.x - newPosition) < slideSpeed) {
          title.x = newPosition;
          PIXI.Ticker.shared.stop();
          setTimeout(animateSlideIn, 2000); 
        }
      });
    };

    setTimeout(animateSlideIn, 2000); 

    pixiCanvasRef.current.appendChild(app.view);

    
    appRef.current.renderer.view.style.width = '100%';
    appRef.current.renderer.view.style.height = '100%';
    appRef.current.renderer.view.style.objectFit = 'cover';

    return () => {
      PIXI.Ticker.shared.stop();
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiCanvasRef}></div>;
};

export default Nescafe;
