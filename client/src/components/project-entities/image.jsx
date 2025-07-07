export default function ProjectImage({project}){
    return(
            <img src={project.image}
                alt={project.label}
                width= '50%'
        />
    )
}