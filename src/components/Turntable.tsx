// @ts-nocheck
import React, { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import 'p5/lib/addons/p5.sound';
import styled from 'styled-components';
import { visitFunctionBody } from "typescript";

const StyledImg = styled.img`
    width: 700px;  
    position: absolute;
    left: 55vw;
    top: 50px;
`;

const StyledTurntable = styled.div`

    padding: 0;
    margin: 0;
    top: 50px;
    left: 100px;
    width: 500px;
    height: 350px;
    background-color: gray;
    z-index: -1;
    border-radius: px;
`;

const StyledProject = styled.div`
    height: 350px;
    width: 550px;
    padding: 0;
    margin: 50px;
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
		canvas = p5.createCanvas(500, 350).parent('canvasParent');
        
        mySound.loop();
        p5.angleMode(p5.DEGREES);

        pizza = p5.loadImage(require('../assets/images/turntable.webp'));

        button = p5.createButton('pause/play');
        button.parent("canvasParent");
        button.position(110, 370, 'static');
        button.mousePressed(pause);

        slider = p5.createSlider(0.5, 1.5, 1, 0.05);
        slider.parent("canvasParent");
        slider.position(450, 350, 'static');
        
        slider.style('width', '80px');


        p5.rectMode(p5.CENTER)
        p5.frameRate(120)
	};

	const draw = (p5: p5Types) => {
        p5.clear()
        
        let val = slider.value();
        
        let d = p5.dist(p5.mouseX, p5.mouseY, 250, 175);

        if (d < 200) {
            b = p5.atan2(p5.mouseY - p5.height / 2, p5.mouseX - p5.width / 2);
        } else if (rotation == 1) {
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
        <StyledProject >
            <StyledTurntable id="canvasParent">

                <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed}/>
                
            
            </StyledTurntable>
            <StyledImg src={require('../assets/images/body.webp')}/>
            <StyledImg src={require('../assets/images/tonearm.webp')}/>
            <StyledImg src={require('../assets/images/turntable.webp')}/>
        </StyledProject>
    );
};

export default Turntable