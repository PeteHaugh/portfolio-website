// @ts-nocheck
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import 'p5/lib/addons/p5.sound';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100%;  
    position: absolute;
    z-index: -1;
`;

const StyledImgArm = styled.img`
    width: 85%;  
    margin-left: 75px;
    margin-top: 30px;
`;

const StyledTurntable = styled.div`
    padding: 0;
    margin: 0;
    width: 700px;
    height: 880px;
    position: relative;
`;

const Turntable: React.FC<ComponentProps> = () => {

    let a = 0;
    let b = 0;
    let canvas;
    let mySound;
    let Angle;
    let AngleOld = 0;
    let AngleV = 0;
    let record;
    let rotation = 0;
    let tonearm;
    let toneAngle = 0;
    let sliderKnob;
    let position = 470;
    let bx;
    let by;
    let overBox = false;
    let locked = false;
    let xOffset = 0.0;
    let boxWidth = 30;
    let boxHeight = 50;
    let range = 100;




    const preload = (p5: p5Types, canvasParent: Element) => {
        p5.soundFormats('mp3', 'ogg');
		mySound = p5.loadSound('https://freesound.org/data/previews/612/612610_5674468-lq');
        record = p5.loadImage(require('../assets/images/turntable.png'));
        tonearm = p5.loadImage(require('../assets/images/tonearm.png'));
        sliderKnob = p5.loadImage(require('../assets/images/slider.png'));
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
		canvas = p5.createCanvas(700, 880, 'relative').parent('canvasParent');
        
        mySound.loop();
        p5.angleMode(p5.DEGREES);

        p5.rectMode(p5.CENTER)
        p5.frameRate(120)

        bx = 480;
        by = 23;
	};

	const draw = (p5: p5Types) => {
        p5.clear()
        p5.push();
        range = p5.constrain(bx, 380, 580)
        let val = range/480;
        
        let d = p5.dist(p5.mouseX, p5.mouseY, 350, 440);

        if (d < 650/2) {
            b = p5.atan2(p5.mouseY - p5.height / 2, p5.mouseX - p5.width / 2);
            p5.cursor('grab');
        } else if (rotation === 1) {
            a += 3;
            p5.cursor('arrow');
        } else {
            p5.cursor('arrow');
        }
    
        Angle = a + b;
        AngleV = (Angle - AngleOld)/(1/60)

        
        p5.translate(p5.width / 2, 500)
        p5.rotate(((a * val)+ b));
        p5.image(record, -325, -325, 650, 650);
        p5.pop();
        
        let speed = (AngleV/180)*val;
        speed = p5.constrain(speed, -5, 5);
        mySound.rate(speed);

        AngleOld = Angle;

        p5.push();
        if (rotation === 1) {
            if (toneAngle < 20) {
                toneAngle += 2;
            } 
            
        } else {
            if (toneAngle > 0) {
                toneAngle -= 2;
            } 
        }
        p5.translate(170, 120)
        p5.rotate(toneAngle);
        p5.image(tonearm, -95, -95, 595, 190)
        
        p5.pop();
        
        p5.push();

        if (
            p5.mouseX > bx - boxWidth &&
            p5.mouseX < bx + boxWidth &&
            p5.mouseY > by - boxHeight &&
            p5.mouseY < by + boxHeight
          ) {
            overBox = true;
          } else {
            overBox = false;
          }

        
        p5.translate(range, 23);
        
        p5.image(sliderKnob,0,0,30,50);
        p5.pop();

        p5.push();
            p5.noStroke();
            p5.fill(160, 173, 173);
            p5.rect(70, 810, 100, 100, 5)
          
        p5.pop();
	};

    function mousePressed(p5: p5Types) {
        if (overBox) {
          locked = true;
        } else {
          locked = false;
        }
        xOffset = p5.mouseX - bx;
        let f = p5.dist(p5.mouseX, p5.mouseY, 75, 805);
        if (f < 50) {
            pause();
        }
      }
      
      function mouseDragged(p5: p5Types) {
        if (locked) {
          bx = p5.mouseX - xOffset;
        }
      }
      
      function mouseReleased() {
        locked = false;
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
            <StyledTurntable id="canvasParent">

                <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} mouseReleased={mouseReleased}/>
                <StyledImg src={require('../assets/images/body.webp')}/>
                {/* <StyledImgArm src={require('../assets/images/tonearm.webp')}/> */}
                

            </StyledTurntable>

        </>
    );
};

export default Turntable