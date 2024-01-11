import { useState } from 'react';
import Presentation from './Presentation';
import projectList from "../utils/projectObj";

const Portfolio = () => {
    console.log(projectList);

    // IMPORTANT NOTE FOR NEXT SESSION !!!! ---- GitHub has the root of this project, stored within its parent directory, double check this 
    // ASAP
    
    // I need to now work out how to handle the changing of the projects. I can target them with projectList[i]
    // How do I iterate through? and What happens when i is at the length of the array 
    // I need to have useState ideally to handle which of the projects are shown. I also need to add in the remaining images and screenshots
    // I need to handle a more dynamic alt tag for the projects images
    // let's handle the iteration through the arrays first. 
    
    /**
     * Current error cases: if i < 1 || i > arr.length - 1;
     * then data does not exist, 
     */
    
    let left = 0;
    let center = 1;
    let right = 2;
    let i = 1;

    return (
        <>
            {/* Page Container */}
            <div className="w-screen 
                            h-screen 
                            bg-port">
                
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
                                project={projectList[left]} />
                    
                    {/* Center focus Portfolio [2] These indexes will be important */}
                    <Presentation position="center" 
                                project={projectList[i]} />

                    {/* Portfolio [3] 3rd shown half transparent */}
                    <Presentation position="right" 
                                project={projectList[right]} />
                </div>

            </div>
        </>
        
    );
}

export default Portfolio;