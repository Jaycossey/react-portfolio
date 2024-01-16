import Card from './Card';
import text from '../textFiles/text';
import profile from '../assets/images/profile.png';

// Also dont like this layout -- need to think how to show and hold this information, create a reusable card element and then handle
// text data by passing in as props.

// About me component
const About = () => {
    const techList = "Tech Stack\nHTML\nCSS\nJavaScript\nNode.Js\nReact.JS\njQuery\nGit\nGitHub\n";

    return (
        <>
        {/* Flex Container for static about section */}
            <div className='w-screen 
                            h-screen 
                            bg-slate-500 
                            p-20 
                            text-center 
                            bg-port
                            grid
                            grid-cols-2
                            grid-rows-2
                            gap-10'>
                
                {/* Profile photo container */}
                <img src={profile}
                    className='w-80
                                h-80
                                rounded-full
                                border-4
                                border-purple-500
                                shadow-xl' />

                {/* Welcome Text Container */}
                <Card text={text.about} className='' />

                {/* Tech Stack container */}
                <Card text={techList} />

            </div>
        </>
    );
}

export default About;