function CurrentAmount({project}) {
    return(
        <>
            <span className="text-blue-600 dark:text-blue-400">
                ${project.current}
            </span>
        </>
    )
}

function Goal({project}) {
    return(
        <>
            <span className="text-blue-600 dark:text-blue-400">
                ${project.goal}
            </span>
        </>
    )
}

function Percent({percent}) {
    return(
        <>
            ({percent}%)
        </>
    )
}



export {
    CurrentAmount,
    Goal,
    Percent
}