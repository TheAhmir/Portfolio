'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from '@/app/global_components/loader';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { usePathname } from 'next/navigation';
import { AiTwotoneFileMarkdown } from "react-icons/ai";

import '../../components/note.css';

export default function Page() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    const getLastSegment = (path) => {
        const segments = path.split('/');
        return segments.pop() || '';
    };

    const note_id = getLastSegment(pathname);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(date);
    };

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
                setInput(data.note_content || '');
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
                <Loader />
            ) : (
                <>
                <div className='note-header'>
                    <a href='/admin/home' style={{ textDecoration: 'none' }}>
                        <AiTwotoneFileMarkdown className='file-icon' />
                    </a>
                    <h3>{data.note_title}</h3>
                    <p>{formatDate(data.updated_at)}</p>
                </div>
                <div className='notes-page'>
                    <textarea
                        className='textarea'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <ReactMarkdown
                        className='markdown'
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={atomOneDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {input}
                    </ReactMarkdown>
                </div>
                </>
            )}
        </>
    );
}
