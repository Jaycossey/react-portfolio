import { useState } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";

const Portfolio = () => {
    console.log(projectList);

    return (
        <>
            {/* Page Container */}
            <div className="w-screen 
                            h-screen 
                            bg-port
                            p-20">
                
                {/* carousel display container */}
                <div className="h-screen 
                                flex 
                                flex-row 
                                gap-20 
                                m-auto 
                                text-center 
                                items-center 
                                justify-center">
                    
                    {/* Portfolio piece [1], click to bring to focus */}
                    <Presentation position="left" 
                                project={projectList[0]} />
                    
                    {/* Center focus Portfolio [2] These indexes will be important */}
                    <Presentation position="center" 
                                project={projectList[1]} />

                    {/* Portfolio [3] 3rd shown half transparent */}
                    <Presentation position="right" 
                                project={projectList[2]} />
                </div>

            </div>
        </>
        
    );
}

export default Portfolio;