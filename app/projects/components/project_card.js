'use client'

import { useState } from 'react'
import { SiGithub } from "react-icons/si";
import { FaRegEye, FaEye } from "react-icons/fa";
import { urlFor } from "@/lib/client";
import { Divider } from "@mui/material";
import "./projects.css";

export default function ProjectCard({project}) {
  const [hideSkills, setHideSkills] = useState(false);

  function toggleHideSkills() {
    setHideSkills(!hideSkills)
  }
  return (
    <div
      className={`projects-card ${hideSkills ? 'hiding-skills' : ''}`}
      key={project.title}
      onMouseEnter={toggleHideSkills}
      onMouseLeave={toggleHideSkills}>
        <div className='card-top'>
        <div className="">
            <div className="card-title">
                <h2>{project.title}</h2>
                <img
                className="project-image"
                src={urlFor(project.image)}
                width={200}
                height={250}
                alt={`${project.title}-image`}
                loading="lazy"
            />
                <p className='card-desc'>{project.desc}</p>
            </div>
            {true && (
            <div className={`skills-section ${hideSkills ? 'show' : 'hide'}`}>
                <i className="skills-title">Skills/Tools</i>
                <ul className='skills'>
                    {project.skill.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
              
            )}
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
      
);
}
