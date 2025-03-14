import Project from "./components/project";
import Head from 'next/head';
import "./projects.css";

export const metadata = {
    title: "Ahmir Postell - Projects | Portfolio",
    description: "Explore Ahmir Postell's projects in data analysis and software development.",
    keywords: [
      "Ahmir Postell projects",
      "Data Analyst projects",
      "Data Scientist projects",
      "data analysis projects",
      "computer science projects",
      "software engineer projects",
      "software development projects",
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
        <>
        <Head>
        <link
          rel="canonical"
          href="https://ahmirpostell.com/projects"
          key="canonical"
        />
        </Head>
        <div>
            <div className="projects-intro">
                <h1 className="projects-title">Projects</h1>
            </div>
                <Project />
            
        </div>
        </>
    );
}
