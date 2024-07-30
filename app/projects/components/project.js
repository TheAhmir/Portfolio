'use client'

import { useState, useEffect } from 'react';
import { SiGithub } from "react-icons/si";
import { FaRegEye, FaEye } from "react-icons/fa";
import { Divider } from "@mui/material";
import { urlFor, getProjects } from "@/lib/client";
import Loader from '@/app/global_components/loader';
import "./projects.css";

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
            setLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <>
        {loading ? 
        <div className='loader'>
        <Loader />
        </div> :
            <div className="all-projects">
            {projects.map((project) => (
                <div className="projects-card" key={project.title}>
                    <div className='card-top'>
                    <div className="left-side">
                        <div className="card-title">
                            <h1>{project.title}</h1>
                            <p>{project.desc}</p>
                        </div>
                        <div>
                            <i className="skills-title">Skills/Tools</i>
                            <ul>
                                {project.skill.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="right-side">
                        <img
                            className="project-image"
                            src={urlFor(project.image)}
                            width={200}
                            alt={`${project.title}-image`}
                            loading="lazy"
                        />
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
