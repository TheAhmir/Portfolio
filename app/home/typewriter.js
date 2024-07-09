'use client'

import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './intro_components.css';

export default function Typewriter_Component() {
    const [text, setText] = useState('');

    const [typewriterText] = useTypewriter({
        words: [
            "William and Mary, 2024 Graduate",
            "Data Analyst",
            "Website developed using React"
        ],
        loop: 1,
        delaySpeed: 2000,
    });

    useEffect(() => {
        setText(typewriterText);
    }, [typewriterText]);

    return (
        <h3>
            <span className='job-title'>{text}</span>
            <Cursor cursorColor='#313bac' />
        </h3>
    );
}
