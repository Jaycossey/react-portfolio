import Card from './Card';
import Canvas from './Canvas';
import text from '../textFiles/text';
import ContactLinks from './ContactLinks';

// Contact component, this will hold 3 animations as well as contact information
const Contact = () => {

    // Return HTML 
    return (
        <>
            {/* Container div for content only */}
            <div className="w-screen 
                            h-screen 
                            bg-slate-700 
                            bg-port
                            p-10
                            pt-20">

                {/* Card with contact text */}
                <Card text={text.contact} />

                <ContactLinks />
                                
                {/* Canvas Elements for spritesheet animations */}
                {/* <Canvas spriteSheet="./assets/spritesheets/heart-sprite.png" 
                        frameRate="7"
                        frameCount="2"
                        width="128px" 
                        height="128px"
                        spriteWidth="64"
                        spriteHeight="64"
                        stateCount="2" /> */}

            </div>
        </>
    );
}

export default Contact;