import { useState } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";

const Portfolio = () => {
    console.log(projectList);
    
    // I need to now work out how to handle the changing of the projects. I can target them with projectList[i]
    // How do I iterate through? and What happens when i is at the length of the array 
    
    let i = 1;

    return (
        <>
            {/* Page Container */}
            <div className="w-screen h-screen bg-port">
                
                {/* carousel display container */}
                <div className="h-screen flex flex-row gap-20 m-auto text-center items-center justify-center">
                    
                    {/* Portfolio piece [1], click to bring to focus */}
                    <Presentation position="left" project={projectList[i - 1]} />
                    
                    {/* Center focus Portfolio [2] These indexes will be important */}
                    <Presentation position="center" project={projectList[i]} />

                    {/* Portfolio [3] 3rd shown half transparent */}
                    <Presentation position="right" project={projectList[i + 1]} />
                </div>

            </div>
        </>
        
    );
}

export default Portfolio;