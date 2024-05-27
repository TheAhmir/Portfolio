import Project from "./project";
import { getProjects } from "@/lib/client";

export default async function Client() {
    const projects = await getProjects();

    return (
        <div>
            {projects.map((project) => (
                <Project key={project.title} project={project} />
            ))}
        </div>
    );
}