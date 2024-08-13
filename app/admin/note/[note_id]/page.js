'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from '@/app/global_components/loader';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { usePathname } from 'next/navigation';
import NoteTaking from '../../components/note_taking';

import '../../components/note.css';

export default function Page() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    const getLastSegment = (path) => {
        const segments = path.split('/');
        return segments.pop() || '';
    };

    const note_id = getLastSegment(pathname);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/getNote?note_id=${note_id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result[0]);
            } catch (error) {
                console.error('Failed to fetch data', error);
            } finally {
                setLoading(false);
            }
        };

        if (note_id) {
            fetchData();
        }
    }, [note_id]);

    return (
        <>
            {loading ? (
                <div className='full-page'>
                    <Loader />
                </div>
            ) : (
                <NoteTaking type='default' data={data}/>
            )}
        </>
    );
}
