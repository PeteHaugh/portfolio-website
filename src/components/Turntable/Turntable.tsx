// @ts-nocheck
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import 'p5/lib/addons/p5.sound';



const Turntable: React.FC<ComponentProps> = () => {

    let a = 0;
    let b = 0;
    let song;
    let canvas;




    const setup = (p5: p5Types, canvasParentRef: Element) => {
		canvas = p5.createCanvas(1000, 1000).parent(canvasParentRef);
        song = p5.loadSound('../assets/Beat.wav');
	};

	const draw = (p5: p5Types) => {
		p5.background(51);
        //p5.frameRate(60)
        
        let d = p5.dist(p5.mouseX, p5.mouseY, 500, 500);

        if (d < 300) {
            b = p5.atan2(p5.mouseY - p5.height / 2, p5.mouseX - p5.width / 2);
        } else {
            a+=0.05;
        }

        p5.translate(p5.width / 2, p5.height / 2)
        p5.rotate(a + b);

        p5.fill(100,100,0)
        p5.rect(0, 0, 300, 300);
        

	};

    function mousePressed() {
        // Check if mouse is inside the circle
        console.log('press')
        song.p5.loop()
      }

    
	return (
        <div className="App">
            What is happening then
            <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>
        </div>
    );
};

export default Turntable