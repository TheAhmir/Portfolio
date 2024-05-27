'use client'

import React from 'react';
import Typewriter from 'typewriter-effect';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './intro_components.css'

export default function Typewriter_Component() {
    const [text] = useTypewriter({ // Destructure the value returned by useTypewriter
        words: [
            "Data Analyst",
            "William and Mary, 2024 Graduate"
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
