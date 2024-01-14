import Card from './Card';
import Canvas from './Canvas';
import text from '../textFiles/text';

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
                            p-20">

                {/* Card with contact text */}
                <Card text={text.contact} />
                                
                {/* Canvas Elements for spritesheet animations */}
                <Canvas spriteSheet="helloTest" 
                        frameRate="7" 
                        width="300px" 
                        height="200px" />

            </div>
        </>
    );
}

export default Contact;