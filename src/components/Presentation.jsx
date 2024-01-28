// import forwardRef to handle showcase animation manipulation
import { forwardRef } from "react";

// Presentation component to store and handle projects on display
const Presentation = forwardRef((props, ref) => {
    // copy of project to use with onclick handlers
    const projects = props.project;

    return (
        // Parent/Background container
        <div id={props.id}
            // pass ref to handle showcase animation 
            ref={ref}
            className="bg-slate-200
                        bg-opacity-80
                        border-4
                        rounded-2xl
                        border-purple-500
                        p-2
                        text-purple-800 
                        shadow-2xl 
                        shadow-black
                        animationCard"
            onClick={() => props.onClick(projects)}>

            {/* Image of project */}
            <img src={`../assets/images/${props.project.image}`} 
                alt="Screenshot of Code from the Main Presentation piece" 
                className="h-40
                        m-auto
                        rounded-md
                        border-2
                        border-purple-400" />
            
            {/* Title */}
            <p className="underline 
                        underline-offset-4 
                        mb-4 
                        mt-1">
                {props.project.title}
            </p>
            
            {/* Description */}
            <p>
                {props.project.description}
            </p>
            
            {/* Tech Used */}
            <p className="pt-2">
                {props.project.techStack}
            </p>
        </div>
    );
});

export default Presentation;