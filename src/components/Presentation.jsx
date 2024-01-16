const Presentation = (props) => {

    const handleClick = () => { 
        if (event.target.id === 'showcase') {
            console.log("Show, setup link");
        }

        // if () {
        //     console.log("Sort out anim")
        // }
    }

    return (
        // Parent/Background container
        <div id={props.id}
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
            onClick={handleClick}>

            {/* Image of project */}
            <img src={props.project.image} 
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
}

export default Presentation;