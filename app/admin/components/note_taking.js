import React, { useRef, useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Loader from '@/app/global_components/loader';
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneFileMarkdown } from 'react-icons/ai';
import './note.css';

export default function NoteTaking({ type, data }) {
    const [title, setTitle] = useState(data.note_title);
    const [input, setInput] = useState(data.note_content);
    const [updated_at, setUpdated_At] = useState(data.updated_at);
    const [failed, setFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const markdownRef = useRef(null);

    const links_regex = /(https?:\/\/[^\s]+)/g;

    

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(date);
    };

    const downloadPdf = async () => {
        const markdownContent = document.querySelector('.markdown-preview');
        if (markdownContent) {
            const canvas = await html2canvas(markdownContent, {
                scale: 2,
                useCORS: true,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            const imgWidth = pdfWidth;
            const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;

            let position = 0;
            let heightLeft = imgHeight;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position -= pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save('note.pdf');
        }
    };

    const handleSave = async () => {
        const new_updated_at = new Date().toISOString();
        try {
            setLoading(true);
            const encodedTitle = encodeURIComponent(title);
            const encodedContent = encodeURIComponent(input);
            const response = await fetch(`/api/updateNote?note_id=${data.note_id}&note_title=${encodedTitle}&note_content=${encodedContent}&updated_at=${new_updated_at}`);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
            }
            setFailed(false);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setFailed(true);
        } finally {
            setUpdated_At(new_updated_at);
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                e.preventDefault();
                handleSave();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [input, title]);

    if (type === 'default') {
        return (
            <>
                <div className='note-header'>
                    <a href={data.parent_folder_id ? `/admin/folder/${data.parent_folder_id}` : '/admin/home'} style={{ textDecoration: 'none' }} className='note-home-button'>
                        <AiTwotoneFileMarkdown className='note-file-icon' />
                    </a>
                    <input
                        type='text'
                        className='note-title-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {loading ? 
                        <p className='note-updated_at'>Saving note...</p> :
                        <p className='note-updated_at'>{failed ? 'Failed to save' : formatDate(updated_at)}</p>}
                    <button onClick={downloadPdf} className='note-download-button'>
                        <AiOutlineDownload className='note-download-icon' />
                    </button>
                </div>
                <div className='notes-page'>
                    <textarea
                        className='textarea-note'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <ReactMarkdown
                        ref={markdownRef}
                        className='markdown'
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={a11yDark}
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
        );
    }
    return null;
}