import { useState } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";
import Card from './Card';
import text from '../textFiles/text';

const Portfolio = () => {
    // console.log(projectList);
    const [current, setCurrent] = useState(projectList[0]);

    const handleClick = (clickedProject) => {
        if(event.target.id === 'showcase') console.log("click");
        setCurrent(clickedProject);
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
                <Presentation id="showcase" project={current} />

            </div>

        </>
        
    );
}

export default Portfolio;