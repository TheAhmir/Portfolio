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
        <p className="summary">Through collecting, analyzing, and visualizing, I specialize in transforming complex data into valuable insights. With a bachelor&apos;s in Data Science and Computer Science, I possess strong skills utilizing Python, R, relational and non-relational databases, and Tableau.</p>
        <div className='cards'>
            <div className='single_card'>
            {intro.part1_image && (
                <img 
                className='image'
                src={urlFor(intro.part1_image)}
                alt={`${intro.part1_name.replace("'", "&apos;")}-image`}
                />
            )}
            {intro.part1_name && (
                <h2 className='title'>{intro.part1_name}</h2>
            )}
            {intro.part1_desc && (
                <PortableText className='desc' value={intro.part1_desc} />
            )}
            </div>
            <div className='single_card'>
            {intro.part2_image && (
                <img 
                className='image'
                src={urlFor(intro.part2_image)}
                alt={`${intro.part2_name.replace("'", "&apos;")}-image`}
                />
            )}
            {intro.part2_name && (
                <h2 className='title'>{intro.part2_name}</h2>
            )}
            {intro.part2_desc && (
                <PortableText value={intro.part2_desc} />
            )}
            </div>
            <div className='single_card'>
            {intro.part3_image && (
                <img 
                className='image'
                src={urlFor(intro.part3_image)}
                alt={`${intro.part3_name.replace("'", "&apos;")}-image`}
                />
            )}
            {intro.part3_name && (
                <h2 className='title'>{intro.part3_name}</h2>
            )}
            {intro.part3_desc && (
                <PortableText className='desc' value={intro.part3_desc} />
            )}
            </div>
        </div>
        </>
    )
}