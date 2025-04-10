'use client'

import { useState, useEffect } from 'react';
import Loader from '@/app/global_components/loader';
import { getProjects } from "@/lib/client";
import DefaultView from '../view_structures/default.js';
import LinkedListView from '../view_structures/linked_list.js';
import "./projects.css";

export default function Project() {
    const [allProjects, setAllProjects] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [section, setSection] = useState("Data");
    const [selectedDisplay, setSelectedDisplay] = useState('default');


    const handleDisplayChange = (value) => {
        setSelectedDisplay(value)
    }

    const renderView = () => {
        switch (selectedDisplay) {
            case 'default':
                return <DefaultView projects={projects}/>

            case 'linkedlist':
                return <LinkedListView projects={projects}/>
        }
    }

    const handleChangeSectionData = () => {
        setSection("Data");
    }

    const handleChangeSectionSoftware = () => {
        setSection("Software");
    }

    useEffect(() => {
        
    }, [selectedDisplay])

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
        <div className='structure-buttons'>
            <div>
                <input
                    type='radio'
                    id='default'
                    value='default'
                    checked={selectedDisplay === 'default'}
                    onChange={() => handleDisplayChange('default')}
                />
                <label>Default</label>
            </div>
            <div>
                <input
                    type='radio'
                    id='linkedlist'
                    value='linkedlist'
                    checked={selectedDisplay === 'linkedlist'}
                    onChange={() => handleDisplayChange('linkedlist')}
                />
                <label>LinkedList</label>
            </div>
        </div>
        {loading ? 
        <div className='loader'>
        <Loader />
        </div> :
        <>{renderView()}</>
            }
    </>
    );
}
