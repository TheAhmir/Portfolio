import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneFileMarkdown } from 'react-icons/ai';
import './note.css';

export default function NoteTaking({ type, data }) {
    const [title, setTitle] = useState(data.note_title); // Manage title state
    const [input, setInput] = useState(data.note_content);
    const markdownRef = useRef(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(date);
    };

    const downloadPdf = async () => {
        if (markdownRef.current) {
            // Capture the content as a canvas
            const canvas = await html2canvas(markdownRef.current, {
                scale: 2, // Higher scale for better quality
                useCORS: true // Enable Cross-Origin Resource Sharing
            });
    
            // Convert the canvas to image data
            const imgData = canvas.toDataURL('image/png');
    
            // Create a new PDF document
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
    
            // PDF page dimensions
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
    
            // Canvas dimensions
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
    
            // Calculate image dimensions and position
            const imgWidth = pdfWidth;
            const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;
    
            // Initial position and height left for the PDF
            let position = 0;
            let heightLeft = imgHeight;
    
            // Add the first page with the image
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
    
            // Add more pages if needed
            while (heightLeft > 0) {
                position -= pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }
    
            // Save the PDF document
            pdf.save('note.pdf');
        }
    };
    

    if (type === 'default') {
        return (
            <>
                <div className='note-header'>
                    <a href='/admin/home' style={{ textDecoration: 'none' }} className='note-home-button'>
                        <AiTwotoneFileMarkdown className='note-file-icon' />
                    </a>
                    <input
                        type='text'
                        className='note-title-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className='note-updated_at'>{formatDate(data.updated_at)}</p>
                    <button onClick={downloadPdf} className='note-download-button'>
                        <AiOutlineDownload className='note-download-icon'/>
                    </button>
                </div>
                <div className='notes-page'>
                    <textarea
                        className='textarea'
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
