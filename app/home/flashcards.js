'use client'

import React from 'react';
import { urlFor, getIntro } from '@/lib/client';
import { PortableText } from "@portabletext/react";
import './intro_components.css'
import Loader from '../global_components/loader';

export default async function Flashcards() {
    const intro = await getIntro();

    if (!intro) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    return (
        <>
        <p className="summary">{intro.intro}</p>
        
        </>
    )
}