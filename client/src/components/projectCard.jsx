// components/ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
      <div className="w-full bg-gray-200 rounded mt-2">
        <div
          className="bg-green-500 text-xs text-white p-1 rounded"
          style={{ width: `${(project.currentAmount / project.targetAmount) * 100}%` }}
        >
          ${project.currentAmount} / ${project.targetAmount}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;