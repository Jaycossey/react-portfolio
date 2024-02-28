// Resusable canvas element, want to be able to draw and use spritesheets onto these, will visit old JS code to handle this
import { useEffect, useRef } from "react";

// Sprites class constructor, takes spriteWidth, spriteHeight, frameCount, frameRate, stateCount, name. as params
import Character from "../utils/character";

const Canvas = (props) => {
    const {name, width, height} = props;

    // create ref for current canvas element
    const canvasRef = useRef(null);

    // get current and context (ctx)
    const canvas = canvasRef.current;
    // const ctx = canvas.getContext('2d');
    // console.log(ctx);

    // I need to handle the name parameter to assign spritesheets


    return (
        <></>
        // <canvas ref={canvasRef} width={width} height={height} className="border-2"></canvas>
    );
}

export default Canvas;