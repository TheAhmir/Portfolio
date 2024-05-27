'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import "./nav.css"
import { HiMenu } from "react-icons/hi";

export default function Nav() {
    const navigation = usePathname();
    return (
        <div className='top'>
        <div className="bg">
            <div className="nav-list">
                <div className="nav-items">
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <h2 className={navigation === '/' ? 'nav-text active' : 'nav-text'}>Home</h2>
                    </Link>
                    <Link href='/projects' style={{ textDecoration: 'none' }}>
                        <h2 className={navigation === '/projects' ? 'nav-text active' : 'nav-text'}>Projects</h2>
                    </Link>
                    {/*<Link href='/blog' style={{ textDecoration: 'none' }}>
                        <h2 className={navigation === '/blog' ? 'active' : ''}>Blog</h2>
    </Link>*/}
                    <Link href='/contact' style={{ textDecoration: 'none' }}>
                        <h2 className={navigation === '/contact' ? 'nav-text active' : 'nav-text'}>Contact</h2>
                    </Link>
                    <Link href='/resume' style={{ textDecoration: 'none' }}>
                        <h2 className={navigation === '/resume' ? 'nav-text active' : 'nav-text'}>Resume</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div className='menuButton'>
            <HiMenu />
        </div>
        </div>
    );
}