// default view of projects
import ProjectCard from '../components/project_card.js'
import "./structures.css";

export default function DefaultView({projects}) {
  return (
    <div className="all-projects-default">
        {projects.map((project) => (
            <ProjectCard key={project.title} project={project}/>
        ))}
    </div>
  )
}
