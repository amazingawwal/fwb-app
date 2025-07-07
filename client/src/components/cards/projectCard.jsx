// components/ProjectCard.jsx
import React from "react";
import ProjectImage from "../project-entities/image";
import Label from "../project-entities/label";
import Title from "../project-entities/title";
import { CurrentAmount, Goal, Percent } from "../project-entities/amount";

function ProjectCard({ projectList }) {
  return (
      <div className=" space-y-4">
        {projectList.map((project) => {
          const percent = Math.round((project.current / project.goal) * 100) // Percentage achieved
          return (
            <div key={project.id}
            className="flex flex-row sm:flex-col sm:items-center border border-gray-200 dark:border-gray-700 rounded p-4">
             <ProjectImage project={project}/>
             <div className="project-details  ">
                <div className="project-title-label flex  items-center gap-2">
                  <span className="font-medium sm:font-sm text-gray-800 dark:text-white">
                    <Label project={project}/>
                    <Title project={project} />
                  </span>
                </div>
                <div className="project-amount text-sm text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 sm:ml-4">
                 <CurrentAmount project={project} /> / <Goal project={project} /> 
                 <Percent percent={percent} />
                </div>
            </div>
          </div>
          )
        })}
      </div>
  );
}

export default ProjectCard;