'use client'

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './intro_components.css'

export default function Typewriter_Component() {
    const [text] = useTypewriter({ // Destructure the value returned by useTypewriter
        words: [
            "William and Mary, 2024 Graduate",
            "Data Analyst",
            "Website developed using React"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <h3>
            <span className='job-title'>{text ? text : 'Data Analyst'}</span>
            {text ? <Cursor cursorColor= '#313bac' /> : <></>}
        </h3>
    );
}
