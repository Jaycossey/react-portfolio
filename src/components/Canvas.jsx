// Resusable canvas element, want to be able to draw and use spritesheets onto these, will visit old JS code to handle this
// Currently only want 3 simple animations (khayman and wing movement, gem float, city floating <= this one still needs building remember)
const Canvas = (props) => {

    // props are: spritesheet(need to target pathname), framerate(default frames have always been 7, need to work out offset or whether to handle different)
    // width of canvas and height of canvas
    // console.log(props);

    return (
        <canvas width={props.width} 
                height={props.height}
                className="border-4
                        border-black
                        rounded-2xl">                    
        </canvas>
    );
}

export default Canvas;