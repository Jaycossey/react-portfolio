class Character {
    // this constructor will take spritesheet, spriteWidth, spriteHeight, frameCount
    constructor(sheet, sw, sh, fcount) {
        this.sheet = sheet;
        this.sw = sw;
        this.sh = sh;
        this.fcount = fcount;
    }
    // what methods do I need on the character? update, to handle frame iteration, draw, to draw those updates
    draw() {

    }
    
    update() {

    }

    // i need to think carefully, I have the width and height of the frame, I have the total times we iterate
    // I can change name to spritesheet - the object name will be the var name 
    // How do I handle the update function? where is context being referenced
}

export default Character;

/**
 * 
 * Ok so think about how this will work in react, 
 * I have a fragment containing a html element, thats all they are
 * so canvas should work the same, its just compartmented more.
 * 
 * I dont need to care about the component call from a higher level.
 * So lets start with just the canvas element and work back from there.
 * 
 * I dont need to declare anything except the name of the character
 * then I can write a simple OOP program to determine the next steps
 * 
 * 
 */