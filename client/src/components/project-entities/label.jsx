function Label({project}) {
    return(
        <>
            {project.label && ( 
             <span className={`${project.labelColor} font-bold`}>
                {project.label}{" "}
            </span>
            )}
        </>
    )
}

export default Label;