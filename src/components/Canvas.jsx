// Resusable canvas element, want to be able to draw and use spritesheets onto these, will visit old JS code to handle this
import { useEffect, useRef } from "react";

// Sprites class constructor, takes spriteWidth, spriteHeight, frameCount, frameRate, stateCount, name. as params
import SpriteFrames from "../utils/sprites";

const Canvas = (props) => {
    // create duplicate of framecount and framerate
    const frameCount = props.frameCount;
    const frameRate = props.frameRate;
    const stateCount = props.stateCount;

    // spriteSheet details
    const spriteWidth = props.spriteWidth;
    const spriteHeight = props.spriteHeight;

    // spritesheet w+h
    const sheetWidth = spriteWidth * frameCount;
    const sheetHeight = spriteHeight * stateCount;

    // I need to loop through the total framecount across the sheet
    // in this case 2 but others will have more and other states -- use OOP to create an object we can pass as an argument

    // spriteFrames
    const spriteFrames = [];
    const spritesheet = props.spritesheet;

    for (let i = 0; i < frameCount - 1; i++) {
        const spriteFrame = new SpriteFrames(spriteWidth, spriteHeight, frameCount, frameRate, stateCount, `${spritesheet}`);
        // spriteFrames.push(spriteFrame);
        const sprite = new Image(spriteFrame.spriteHeight, spriteFrame.spriteHeight);
        sprite.src = spritesheet;
        spriteFrames.push(sprite);
    }

    // reference canvas
    const canvasRef = useRef(null);

    // animate spritesheet
    const animate = (ctx, currentFrame) => {
        // animate function here
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "green";
        // draw the frame 
        ctx.drawImage(spritesheet, spriteFrames[currentFrame].spriteWidth, spriteFrames[currentFrame].spriteHeight, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }


/**
 * 
 *   READ YOUR CODE WHEN YOURE BACK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!READ YOURE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!READ YOUR CODE!!!!!!!
 * 
 * go back to drawing board and plan what I need, break it down and compartmentalise everything
 */




    // useEffect for state management - listens to animate function call (allows continuous animation with recursion)
    useEffect(() => {
        // canvas reference for targeting 
        const canvas = canvasRef.current;
        // canvas context
        const ctx = canvas.getContext('2d');

        let currentFrame = 0;
        let animationID;
        
        // renderer
        const renderer = () => {
            currentFrame++;
            animate(ctx, currentFrame);
            animationID = window.requestAnimationFrame(renderer);
        }
        renderer();

        // return value
        return () => window.cancelAnimationFrame(animationID);

    }, [animate]);

    return (
        <canvas ref={canvasRef}
                width={props.width} 
                height={props.height}
                className="m-auto border-2">
        </canvas>
    );
}

export default Canvas;