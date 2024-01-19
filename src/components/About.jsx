import Card from './Card';
import text from '../textFiles/text';
import profile from '../assets/images/profile.png';

// Also dont like this layout -- need to think how to show and hold this information, create a reusable card element and then handle
// text data by passing in as props.

// About me component
const About = () => {

    return (
        <>
        {/* Flex Container for static about section */}
            <div className='w-screen 
                            h-screen 
                            bg-slate-500 
                            p-10 
                            text-center 
                            bg-port
                            flex
                            flex-col
                            gap-5 overflow-y-auto'>
                
                {/* Profile photo container */}
                <img src={profile}
                    className='w-80
                                h-80
                                rounded-full
                                border-4
                                border-purple-500
                                m-auto
                                row-span-2
                                shadow-black
                                shadow-xl
                                relative' />

                {/* Hello Text */}
                <Card text={text.hello} />

                {/* Welcome Text Container */}
                <Card text={text.about} />

                {/* Tech Stack container */}
                <Card text={text.techStack} />

            </div>
        </>
    );
}

export default About;