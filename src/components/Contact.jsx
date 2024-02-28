import Card from './Card';
import text from '../textFiles/text';
import ContactLinks from './ContactLinks';

// Contact component, this will hold 3 animations as well as contact information
const Contact = () => {

    // Return HTML 
    return (
        <>
            {/* Container div for content only */}
            <div className="w-screen 
                            h-screen 
                            bg-slate-700 
                            bg-port
                            p-10
                            pt-20">

                {/* Card with contact text */}
                <Card text={text.contact} />

                <ContactLinks />


            </div>
        </>
    );
}

export default Contact;