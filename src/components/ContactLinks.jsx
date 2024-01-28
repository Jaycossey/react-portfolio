import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactLinks = () => {
    
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

    return (
        // Font awesome container for contact section
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
        );
}

export default ContactLinks;