// @ts-nocheck
import React, { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import 'p5/lib/addons/p5.sound';
import styled from 'styled-components';

const StyledTurntable = styled.div`
    position: absolute;
    padding: 0;
    margin: 0;
    top: 200px;
    left: 330px;
    width: 500px;
    height: 350px;
    background-color: gray;
    z-index: -1;
    border-radius: 10px;
`;

const Turntable: React.FC<ComponentProps> = () => {

    let a = 0;
    let b = 0;
    let canvas;
    let mySound;
    let button;
    let Angle;
    let AngleOld = 0;
    let AngleV = 0;
    let slider;
    let pizza;
    let rotation = 0;


    const preload = (p5: p5Types, canvasParent: Element) => {
        p5.soundFormats('mp3', 'ogg');
		mySound = p5.loadSound('https://freesound.org/data/previews/612/612610_5674468-lq');
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
		canvas = p5.createCanvas(1000, window.innerHeight).parent('canvasParent');
        
        mySound.loop();
        p5.angleMode(p5.DEGREES);

        pizza = p5.loadImage("https://i.ibb.co/3cD6ZyW/vinyl.png");

        button = p5.createButton('pause/play');
        button.position(500, 65);
        button.mousePressed(pause);

        slider = p5.createSlider(0.5, 1.5, 1, 0.05);
        slider.position(10, 10);
        slider.style('width', '80px');


        p5.rectMode(p5.CENTER)
        p5.frameRate(120)
	};

	const draw = (p5: p5Types) => {
        p5.clear()
		//p5.background(0);
        
        let val = slider.value();
        
        let d = p5.dist(p5.mouseX, p5.mouseY, 500, 500);

        if (d < 300) {
            b = p5.atan2(p5.mouseY - p5.height / 2, p5.mouseX - p5.width / 2);
        } else {
            a += 3;
        }

        Angle = a + b;

        AngleV = (Angle - AngleOld)/(1/60)
        p5.translate(p5.width / 2, p5.height / 2)
        p5.rotate(((a * val)+ b));

        p5.image(pizza, -150, -150, 300, 300);
        p5.rectMode(p5.CENTER)
        let speed = (AngleV/180)*val;
        speed = p5.constrain(speed, -5, 5);
        mySound.rate(speed);

        AngleOld = Angle;
	};

    function mousePressed() {

      }

      function pause() {
        if (mySound.isPlaying()) {
            // .isPlaying() returns a boolean
            mySound.pause();
            rotation = 0;
          } else {
            mySound.loop(); // playback will resume from the pause position
            rotation = 1;
          }
      }

	return (
        <>
            <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed}/>
            
            <StyledTurntable>
                <h1>Turntable</h1>
            </StyledTurntable>
        </>
    );
};

export default Turntable