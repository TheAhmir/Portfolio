'use client'

import { useState, useEffect } from 'react';
import Loader from '@/app/global_components/loader';
import { getProjects } from "@/lib/client";
import "./projects.css";
import ProjectCard from './project_card.js'

export default function Project() {
    const [allProjects, setAllProjects] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [section, setSection] = useState("Data");

    const handleChangeSectionData = () => {
        setSection("Data");
    }

    const handleChangeSectionSoftware = () => {
        setSection("Software");
    }

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setAllProjects(data);
            setLoading(false);
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        setProjects(allProjects.filter((project) => project.tags.includes(section)));
    }, [section, allProjects])

    return (
        <>
        <div className="project-switch">
              <h3 className={`sectionTitle ${section == "Data" ? "active-now" : "inactive"}`} onClick={handleChangeSectionData}>Data</h3>
              <h3 className='divider'>|</h3>
              <h3 className={`sectionTitle ${section == "Software" ? "active-now" : "inactive"}`} onClick={handleChangeSectionSoftware}>Software</h3>
        </div>
        {loading ? 
        <div className='loader'>
        <Loader />
        </div> :
            <div className="all-projects">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project}/>
            ))}
        </div>}
    </>
    );
}
