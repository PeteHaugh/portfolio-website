// @ts-nocheck
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense



const Turntable: React.FC<ComponentProps> = () => {

    let angle = p5.mouseY;
    console.log(p5.pmouseY)
    console.log(angle)
    console.log(p5.mouseIsPressed);

    const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(1000, 500).parent(canvasParentRef);
    
	};

	const draw = (p5: p5Types) => {
		p5.background(51);
		let c = p5.cos(angle);
        //move the shape to the center of the canvas
        //p5.translate(500, 250);
        //apply the final rotation
        p5.rotate(c);
        p5.rect(50, 50, 100, 100);
	};

    
	return (
        <div className="App">
            What is happening then
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default Turntable