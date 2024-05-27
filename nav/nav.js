'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiMenu } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import './nav.css';

export default function Nav() {
    const navigation = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuOffClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
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
                            <Link href='/contact' style={{ textDecoration: 'none' }}>
                                <h2 className={navigation === '/contact' ? 'nav-text active' : 'nav-text'}>Contact</h2>
                            </Link>
                            <Link href='/resume' style={{ textDecoration: 'none' }}>
                                <h2 className={navigation === '/resume' ? 'nav-text active' : 'nav-text'}>Resume</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <button onClick={handleMenuClick} className='menuButton'>
                    <HiMenu />
                </button>
            </div>
                {isMenuOpen && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ duration: 0.3 }}
                            className="sideMenu"
                        >
                            <div className="sideMenu-nav-items">
                                <Link href='/' style={{ textDecoration: 'none' }} onClick={handleMenuOffClick}>
                                    <h2 className={navigation === '/' ? 'nav-text active' : 'nav-text'}>Home</h2>
                                </Link>
                                <Link href='/projects' style={{ textDecoration: 'none' }} onClick={handleMenuOffClick}>
                                    <h2 className={navigation === '/projects' ? 'nav-text active' : 'nav-text'}>Projects</h2>
                                </Link>
                                <Link href='/contact' style={{ textDecoration: 'none' }} onClick={handleMenuOffClick}>
                                    <h2 className={navigation === '/contact' ? 'nav-text active' : 'nav-text'}>Contact</h2>
                                </Link>
                                <Link href='/resume' style={{ textDecoration: 'none' }} onClick={handleMenuOffClick}>
                                    <h2 className={navigation === '/resume' ? 'nav-text active' : 'nav-text'}>Resume</h2>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overlay"
                            onClick={handleMenuOffClick}
                        />
                    </ AnimatePresence>
                )}
        </>
    );
}
