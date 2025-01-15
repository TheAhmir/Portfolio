'use client'

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './intro_components.css'

export default function Typewriter_Component() {
    
    const [text] = useTypewriter({ // Destructure the value returned by useTypewriter
        words: [
            "MSBA Candidate",
            "Computer Science and Data Science Background",
            "Problem Solver"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <h3>
            <span className='job-title'>{text}</span>
            <Cursor cursorColor= '#313bac' />
        </h3>
    );
}
