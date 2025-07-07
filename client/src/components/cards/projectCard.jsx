// components/ProjectCard.jsx
import React from "react";
import ProjectImage from "../project-entities/image";

function ProjectCard({ projectList }) {
  return (
      <div className="space-y-4">
        {projectList.map((project) => {
          const percent = Math.round((project.current / project.goal) * 100) // Percentage achieved
          return (
            <div
              key={project.id}
              // className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 dark:border-gray-700 rounded p-4"
              className="flex flex-row sm:flex-col sm:items-center justify-between border border-gray-200 dark:border-gray-700 rounded p-4"
            >
              {/* Image */}
             <ProjectImage project={project}/>
             <div className="flex   sm:justify-between">
                <div className="flex items-center gap-2">
                  {/* <span className="text-blue-500">◆</span> */}
                  <span className="font-medium sm:font-sm text-gray-800 dark:text-white">
                        {project.label && ( 
                          <span className={`${project.labelColor} font-bold`}>
                            {project.label}{" "}
                          </span>
                        )}
                        {project.title}
                  </span>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 sm:ml-4">
                  <span className="text-blue-600 dark:text-blue-400">
                  ${project.current}
                  </span>{" "}
                /{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                  ${project.goal}
                  </span>{" "}
                ({percent}%)
                </div>
            </div>
          </div>
          )
        })}
      </div>
  );
}

export default ProjectCard;