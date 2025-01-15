'use client'

import { useState, useEffect } from 'react';
import { SiGithub } from "react-icons/si";
import { FaRegEye, FaEye } from "react-icons/fa";
import { Divider } from "@mui/material";
import { urlFor, getProjects } from "@/lib/client";
import Loader from '@/app/global_components/loader';
import "./projects.css";

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
                <div className="projects-card" key={project.title}>
                    <div className='card-top'>
                    <div className="">
                        <div className="card-title">
                            <h1>{project.title}</h1>
                            <img
                            className="project-image"
                            src={urlFor(project.image)}
                            width={200}
                            alt={`${project.title}-image`}
                            loading="lazy"
                        />
                            <p className='card-desc'>{project.desc}</p>
                        </div>
                        <div>
                            <i className="skills-title">Skills/Tools</i>
                            <ul className='skills'>
                                {project.skill.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="card-bottom">
                        <Divider variant="middle" sx={{ bgcolor: 'gray', opacity: 0.5 }} />
                        <div className="project-icons">
                            <a className="project-link" href={project.code} target="_blank" rel="noopener noreferrer">
                                <SiGithub alt='View Code'/>
                            </a>
                            <a className="project-link eye-icon" href={project.vis} target="_blank" rel="noopener noreferrer">
                                <FaRegEye className="default-eye" />
                                <FaEye className="hover-eye" alt='View Visual Representation'/>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>}
    </>
    );
}
