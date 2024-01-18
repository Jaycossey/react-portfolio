import { useState, useEffect, useRef } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";
import Card from './Card';
import text from '../textFiles/text';

const Portfolio = () => {
    // Set state for currently displayed (main/selected) project
    const [current, setCurrent] = useState(projectList[0]);

    // set up ref for showcase component
    const showcaseRef = useRef(null);

    // useEffect to trigger animation of cards, need to "swap" the current card, or at least give the appearance that that is the case
    useEffect(() => {
        console.log("UseEffect Tick", current.title);
        console.log(showcaseRef.current); // will show styled div in console
        // ok so now I have the showcase ref, I can pass the translate styling and animation to it
        // I can target the ref by dot notation
        // showcaseRef.current.style......
    }, [current]);

    // handle click to swap focused project
    const handleClick = (clickedProject) => {
        setCurrent(clickedProject);
    }

    // handle opening of project links in new tab
    const openLink = () => {
        // LINK TAGS BROWSER ROUTER REACT ROUTER
        window.open(current.link, '_blank', 'noopener', 'noreferrer');
    }

    return (
        <>
            {/* Page Container */}
            <div className="w-screen 
                            h-screen 
                            bg-port
                            p-20 
                            overflow-hidden
                            grid
                            grid-cols-2
                            grid-rows-2">
                
                {/* Intro to portfolio text */}
                <Card text={text.port} />

                {/* Use Map to create an array of portfolio cards */}
                {projectList.map((data) => {
                    return (
                        <Presentation key={data.key} 
                                    project={data} 
                                    onClick={handleClick} />
                    )
                })}

                {/* Main Presentation Project, pass ref as props to target for animation */}
                <Presentation id="showcase" 
                            project={current} 
                            ref={showcaseRef} 
                            onClick={openLink} />

            </div>

        </>
        
    );
}

export default Portfolio;