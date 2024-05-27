import Project from "./components/project";
import "./projects.css";

export default function Page() {

    return (
        <div>
            <div className="projects-intro">
                <h1 className="projects-title">Projects</h1>
            </div>
                <Project />
            
        </div>
    );
}
