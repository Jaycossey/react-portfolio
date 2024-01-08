import { useState } from 'react';
import Presentation from './Presentation';


const Portfolio = () => {
    // I need to work out how to cycle through the projects.
    // If I get an array of objects, imported from another file to keep pure, then I can iterate through the projects and pass those to the 
    // individual presentation components as props. 

    // Then I can also determine if the title works as an anchor or if it works as just the title. 

    // so in the case switch, if project position === center, then add onclick handler.

    // Let's make this array of objects to start with. 

    return (
        <>
            {/* Page Container */}
            <div className="w-screen h-screen bg-port">
                
                {/* carousel display container */}
                <div className="h-screen flex flex-row gap-20 m-auto text-center items-center justify-center">
                    
                    {/* Portfolio piece [1], click to bring to focus */}
                    <Presentation position="left" project={'array - 1'} />
                    
                    {/* Center focus Portfolio [2] These indexes will be important */}
                    <Presentation position="center" project={'array'} />

                    {/* Portfolio [3] 3rd shown half transparent */}
                    <Presentation position="right" project={'array + 1'} />
                </div>

            </div>
        </>
        
    );
}

export default Portfolio;