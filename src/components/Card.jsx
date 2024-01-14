// Reusable card component to hold plaintext
const Card = (props) => {
    return (
        // Container div
        <div className="bg-slate-200
                        bg-opacity-50
                        rounded-2xl
                        border-4
                        border-purple-500
                        text-purple-800
                        p-5">

            {/* Text Content */}
            {props.text}
            
        </div>
    );
}

export default Card;