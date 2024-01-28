import Card from './Card';
import Canvas from './Canvas';
import text from '../textFiles/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

// Contact component, this will hold 3 animations as well as contact information
const Contact = () => {

    // Set state and ref for modal
    const [toggleHidden, setToggleHidden] = useState('hidden');
    const modalRef = useRef(null);

    // Modal toggle hidden after email click
    const copyToClip = () => {
        // copy email address to clipboard
        navigator.clipboard.writeText('jaycossey@live.com');
        
        // toggle classnames with state
        setToggleHidden('visible fadeOut');
        setTimeout(() => {
            setToggleHidden('hidden');
        }, 2000);
    }

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

                {/* Font awesome container for contact section */}
                <div className='text-3xl 
                                text-center
                                p-10'>

                    {/* Icons within their respective anchors */}
                    <a href="https://www.linkedin.com/in/ian-j-scott/" target="_blank" referrer="noreferrer noopener">
                        <FontAwesomeIcon icon={faLinkedin} 
                                        className='fa-2xl 
                                                    m-2 
                                                    drop-shadow 
                                                    text-purple-500 
                                                    hover:scale-110 
                                                    cursorIcon' />
                    </a>

                    <a href="https://github.com/Jaycossey" target="_blank" referrer="noreferrer noopener">
                        <FontAwesomeIcon icon={faGithubSquare} 
                                        className='fa-2xl 
                                                    m-2 
                                                    drop-shadow 
                                                    text-purple-500 
                                                    hover:scale-110 
                                                    cursorIcon' />
                    </a>
                    
                    <a href="https://stackoverflow.com/users/20585015/jaycossey" target="_blank" referrer="noreferrer noopener">
                        <FontAwesomeIcon icon={faStackOverflow} 
                                        className='fa-2xl 
                                                    m-2 
                                                    drop-shadow 
                                                    text-purple-500 
                                                    hover:scale-110 
                                                    cursorIcon' />
                    </a>

                    <a href="#" id="emailCopy" onClick={copyToClip}>
                        <FontAwesomeIcon icon={faEnvelope} 
                                        className='fa-2xl 
                                                    m-2 
                                                    drop-shadow 
                                                    text-purple-500 
                                                    hover:scale-110 
                                                    cursorIcon' />
                        <dialog id="copyModal" ref={modalRef} className={`emailCopy text-sm cursor-default ${toggleHidden}`}>Copied to Clipboard!</dialog>
                    </a>
                </div>
                                
                {/* Canvas Elements for spritesheet animations
                <Canvas spriteSheet="helloTest" 
                        frameRate="7" 
                        width="300px" 
                        height="200px" /> */}

            </div>
        </>
    );
}

export default Contact;