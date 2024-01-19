import { useState, useEffect, useRef } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";
import Card from './Card';
import text from '../textFiles/text';
import animateSwap from '../utils/animateSwap';

const Portfolio = () => {
    // Set state for currently displayed (main/selected) project
    const [currentShow, setCurrentShow] = useState(projectList[0]);

    // set up ref for showcase component
    const showcaseRef = useRef(null);
    const directionRef = useRef(null);

    // useEffect to trigger animation of cards, need to "swap" the current card, or at least give the appearance that that is the case
    useEffect(() => {
        // call animation to "swap" the divs.
        animateSwap(showcaseRef.current, directionRef.current);
    }, [currentShow]);

    // handle click to swap focused project
    const handleClick = (clickedProject) => {
        setCurrentShow(clickedProject);
    }

    // handle opening of project links in new tab
    const openLink = () => {
        // LINK TAGS BROWSER ROUTER REACT ROUTER
        window.open(currentShow.link, '_blank', 'noopener', 'noreferrer');
    }

    return (
        <>
            {/* Page Container */}
            <div className="w-screen 
                            h-screen 
                            bg-port
                            p-10
                            mt-10
                            fixed
                            flex
                            flex-col">
                
                {/* Intro to portfolio text */}
                <Card text={text.port} />

                {/* Main Presentation Project, pass ref as props to target for animation */}
                <Presentation id="showcase" 
                            project={currentShow} 
                            ref={showcaseRef} 
                            onClick={openLink} />

                <div className='flex
                                m-auto
                                border-4
                                w-full
                                h-full'>
                    {/* Use Map to create an array of portfolio cards */}
                    {projectList.map((data) => {
                        return (
                            <Presentation key={data.key} 
                                        project={data} 
                                        onClick={handleClick}
                                        // pass direction ref to handle bounding client rect for animation direction
                                        ref={directionRef} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Portfolio;