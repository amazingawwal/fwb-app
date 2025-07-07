import Greetings from "../cards/greetings";
import { PlusIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"
import ProjectCard from "../cards/projectCard";

export default function DashboardCard({username,projects}) {
  const defaultProjects = [
    {
      id: 1,
      title: "#JP2025 Wedding Planning",
      image: "/painter2.jpg",
      label: "to",
      labelColor: "text-purple-500",
      current: 500,
      goal: 1000,
    },
    {
      id: 2,
      title: "New School Jerseys",
      image: '/painter1.jpg',
      label: "New",
      labelColor: "text-yellow-400",
      current: 800,
      goal: 1200,
    },
  ]
  const placeholder = 'buddy';
  const projectList = projects.length > 0 ? projects : defaultProjects;
  const profileUsername = username.length > 0 ? username : placeholder ;
  return (
    // max-w-xl mx-auto rounded-xl bg-white dark:bg-gray-800 shadow p-6 space-y-6
    <div className="w-full max-w-xl mx-auto rounded-xl bg-white dark:bg-gray-800 shadow p-6 space-y-6">
      {/* Welcome */}
      <Greetings profileUsername={profileUsername} />

      {/* Project List */}  
      <ProjectCard projectList={projectList} />

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/create-project"
          className="text-purple-600 font-medium hover:underline inline-flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Create Project
        </Link>
        <Link
          href="/my-contributions"
          className="text-gray-600 dark:text-gray-300 font-medium hover:underline"
        >
          My Contributions
        </Link>
      </div>
    </div>
  )
}
