import { useState, useEffect } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";
import Card from './Card';
import text from '../textFiles/text';

const Portfolio = () => {
    // Set state for currently displayed (main/selected) project
    const [current, setCurrent] = useState(projectList[0]);

    // useEffect to trigger animation of cards, need to "swap" the current card, or at least give the appearance that that is the case
    useEffect(() => {
        console.log("UseEffect Tick", current.title);
    }, [current]);

    // handle click to swap focused project
    const handleClick = (clickedProject) => {
        setCurrent(clickedProject);
    }

    // handle opening of project links in new tab
    const openLink = () => {
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
                        <Presentation key={data.key} project={data} onClick={handleClick} />
                    )
                })}

                {/* Main Presentation Project */}
                <Presentation id="showcase" project={current} onClick={openLink} />

            </div>

        </>
        
    );
}

export default Portfolio;