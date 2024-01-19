// Reusable card component to hold plaintext
const Card = (props) => {
    
    return (
        // Container div
        <div className="bg-slate-200
                        bg-opacity-80
                        rounded-2xl
                        border-4
                        border-purple-500
                        text-purple-800
                        text-center
                        p-5
                        shadow-black
                        shadow-2xl
                        h-max">

            {/* Text Content */}
            {props.text}
            
        </div>
    );
}

export default Card;