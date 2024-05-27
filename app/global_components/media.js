// imports for each item
import { SiTableau, SiLinkedin, SiGithub } from "react-icons/si";
import './media.css'

export default function Media() {
    const data = {
        'LinkedIn': 'https://www.linkedin.com/in/ahmir-postell',
        'Tableau': 'https://public.tableau.com/app/profile/ahmir.postell/vizzes',
        'Github': 'https://github.com/TheAhmir/'
    };
    return (
        <div className="icon-list">
            <a href={data['Github']} target="_blank" rel="noopener noreferrer">
                <SiGithub className="icon github" />
            </a>
            <a href={data['LinkedIn']} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="icon linkedin" />
            </a>
            <a href={data['Tableau']} target="_blank" rel="noopener noreferrer">
                <SiTableau className="icon tableau" />
            </a>

            <div className='creds'>@ 2024 by Ahmir Postell</div>
        </div>
    );
}
