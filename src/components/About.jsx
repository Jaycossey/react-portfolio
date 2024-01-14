import Card from './Card';
import text from '../textFiles/text';

// Also dont like this layout -- need to think how to show and hold this information, create a reusable card element and then handle
// text data by passing in as props.

// About me component
const About = () => {

    return (
        <>
        {/* Grid Container for static about section */}
            <div className='w-screen 
                            h-screen 
                            bg-slate-500 
                            p-20 
                            text-center 
                            bg-port'>
                
                {/* Welcome Text Container */}
                <Card text={text.about} />
                
                {/* Profile photo container */}
                <div className="">

                    <img className="w-80 
                                    h-80 
                                    border-8 
                                    border-purple-900 
                                    rounded-full 
                                    ml-40 
                                    m-auto" 
                        src='./src/assets/images/profile.png' 
                        alt="Profile Photo" />
                </div>
                
                {/* Tech Stack and soft skills */}
                <div className="row-span-3 
                                col-start-2 
                                text-right 
                                mr-16 
                                shadowBg">
                    
                    <p className="text-lg 
                                underline 
                                underline-offset-4 
                                mb-6 
                                mr-2">My Tech Stack</p>
                    
                    <ul className="mr-5">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript (ES6)</li>
                        <li>Node.JS</li>
                        <li>React.JS</li>
                        <li>npm</li>
                        <li>TailwindCSS</li>
                        <li>BootstrapCSS</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                    
                </div>
            </div>
        </>
    );
}

export default About;