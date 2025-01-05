"use client"

import { SiTableau, SiLinkedin, SiGithub } from "react-icons/si";
import { usePathname } from 'next/navigation';
import Divider from '@mui/material/Divider';
import './media.css'

export default function Media() {
    const navigation = usePathname();
    const hideComponents = navigation === '/admin/home' || navigation.startsWith('/admin/home');

    const data = {
        'LinkedIn': 'https://www.linkedin.com/in/ahmir-postell',
        'Tableau': 'https://public.tableau.com/app/profile/ahmir.postell/vizzes',
        'Github': 'https://github.com/TheAhmir/'
    };

    if (hideComponents) return <></>

    return (
        <>
        <Divider variant="middle" sx={{ bgcolor: 'aliceblue' }} /> 
        <div className="icon-list">
            <a href={data['Github']} target="_blank" rel="noopener noreferrer">
                <SiGithub className="icon github"/>
            </a>
            <a href={data['LinkedIn']} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="icon linkedin" />
            </a>
            <a href={data['Tableau']} target="_blank" rel="noopener noreferrer">
                <SiTableau className="icon tableau" />
            </a>

            {
            navigation === '/admin/sign-in' ?
            <div className='creds'>
                @ 2024 by Ahmir Postell
            </div>
            :
            <a href={/*`/admin/sign-in`8*/""} rel="noopener noreferrer" className='creds'>
                @ 2024 by Ahmir Postell
            </a>
            }
        </div>
        </>
    );
}
