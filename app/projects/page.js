import Project from "./components/project";
import "./projects.css";

export const metadata = {
    title: "Ahmir Postell - Projects | Data Analyst & Data Scientist",
    description: "Explore Ahmir Postell's portfolio of projects demonstrating his expertise in data analysis, data science, and business analytics. Review case studies and projects showcasing skills in Python, R, SQL, and Tableau. Discover innovative data-driven solutions and methodologies.",
    keywords: [
      "Ahmir Postell projects",
      "Data Analyst projects",
      "Data Scientist projects",
      "data analysis projects",
      "business analytics projects",
      "Python projects",
      "R projects",
      "SQL projects",
      "Tableau projects",
      "data-driven solutions",
      "data science case studies"
    ]
  };
  

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
