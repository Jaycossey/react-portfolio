const Presentation = (props) => {    
    // custom className variable, used in switch case and parent div
    let customClasses;

    console.log(props.project);

    // Switch case to determine styles for each presentation (size)
    switch(props.position) {
        case 'center':
            customClasses = "border-2 border-purple-500 rounded-xl p-2 bg-slate-100 bg-opacity-60";
            break;
        case 'right':
            customClasses = "border-2 border-purple-500 rounded-xl p-2 bg-slate-100 bg-opacity-60 scale-50";
            break;
        case 'left':
            customClasses = "border-2 border-purple-500 rounded-xl p-2 bg-slate-100 bg-opacity-60 scale-50";
            break;
        default:
            console.log(`position not set`);
            break;
    }

    return (
        // Parent/Background container
        <div className={customClasses}>
            {/* Image of project */}
            <img src={props.project.image} 
                alt="Screenshot of Code from the Main Presentation piece" 
                className="w-full 
                    h-80 
                    rounded-lg
                    border-4
                    border-purple-500" />
            
            {/* Title */}
            <p className="underline underline-offset-4 mb-4 mt-1">{props.project.title}</p>
            
            {/* Description */}
            <p>{props.project.description}</p>
            
            {/* Tech Used */}
            <p className="pt-2">{props.project.techStack}</p>
        </div>
    );
}

export default Presentation;