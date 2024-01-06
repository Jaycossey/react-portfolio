import text from '../textFiles/text';

const About = () => {
    return (
        <>
        {/* Grid Container for static about section */}
            <div className='w-screen h-screen bg-slate-500 grid grid-cols-2 grid-rows-5 p-8 text-center'>
                
                {/* Welcome Text Container */}
                <div className="col-span-2 row-start-2 pr-40 pl-40">
                    <p>{text.about}</p>
                </div>
                
                {/* Profile photo container */}
                <div className="row-span-2 col-start-1">
                    <img className="w-80 h-80 border-8 border-purple-900 rounded-full ml-40 m-auto" src='./src/assets/profile.png' alt="Profile Photo" />
                </div>
                
                {/* Tech Stack and soft skills */}
                <div className="row-span-2 col-start-2 text-right mr-16 shadowBg">
                    <p className="text-lg underline underline-offset-4 mb-6 mr-2">My Tech Stack</p>
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