import React from 'react';
import Link from "next/link";
import "./resume.css"
import Divider from '@mui/material/Divider';
import { Metadata } from 'next';
 
export const metadata = {
    title: "Ahmir Postell - Resume | Data Analyst Portfolio",
    description: "Ahmir Postell's resume: education, technical skills, and achievements. Connect to view resume.",
    keywords: [
      "Ahmir Postell resume",
      "Data Analyst resume",
      "Data Scientist resume",
      "data analysis",
      "business analytics",
      "Python",
      "R",
      "SQL",
      "Tableau",
      "professional experience",
      "academic achievements"
    ]
  };
  
  

export default function Page() {

    const cs_courses = [
        'Algorithms', 
        'Operating Systems', 
        'Software Development', 
        'Computer Organization', 
        'Network Systems and Design', 
        'Competitive Programming'
    ]

    const ds_courses = [
        'Statistical Data Analysis', 
        'Data Visualization', 
        'Natural Language Processing', 
        'Applied Machine Learning', 
        'Databases', 
        'Applied Data Analytics in R']

    const accomplishments = {
        'NCAA Collegiate Division I Gymnast' : "As a former NCAA Division 1 Men\'s Gymnast, I dedicated myself to the rigorous training and competitive spirit of collegiate gymnastics. Representing my university, I honed not only my athletic skills but also developed an invaluable foundation in teamwork that continue to shape my character today. Competing at the highest level of collegiate athletics instilled in me a deep sense of discipline, resilience, and passion for achieving excellence in all endeavors."
    }

    return (
        <div className='resume-page'>
            <div className='intro'>
                <h1 className='resume-page-title '>Resume</h1>
            </div>
            <div className='education'>
                <div className='top-line'>
                <Link href='/Ahmir_Postell_Resume.pdf' target="_blank" style={{ textDecoration: 'none' }} className="download">
                        <h1 className='download-button'>Download Resume</h1>
                    </Link>
                    <Divider variant="middle" sx={{ bgcolor: 'gray', opacity: 0.5 }} />
                    <h1 className='resume-title'>Education</h1>
                </div>
                <div>
                    <div className='major'>
                        <div className='row-1'>
                            <h2 className='time'>2020 - 2024</h2>
                            <div className='setting'>
                                <h4>William and Mary</h4>
                                <h3>Williamsburg, Virginia</h3>
                            </div>
                            <h4 className='degree'>Bachelors of Science in <b>Computer Science</b></h4>
                        </div>
                        <div className='row-2'>
                            <h2 className='coursework'>Relevant Coursework:</h2>
                            <div className='courses'>
                            {cs_courses.map((course, index) => (
                                <h3 className='list-item' key={index}>• {course}</h3>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className='major'>
                        <div className='row-1'>
                            <h2 className='time'>2020 - 2024</h2>
                            <div className='setting'>
                                <h4>William and Mary</h4>
                                <h3>Williamsburg, Virginia</h3>
                            </div>
                            <h4 className='degree'>Bachelors of Science in <b>Data Science</b></h4>
                        </div>
                        <div className='row-2'>
                            <h2 className='coursework'>Relevant Coursework:</h2>
                            <div className='courses'>
                            {ds_courses.map((course, index) => (
                                <h3 className='list-item' key={index}>• {course}</h3>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider variant="middle" sx={{ bgcolor: 'gray', opacity: 0.3 }} />
            <div className='Professional Skills'>
                <h1 className='resume-title'>Professional Skills</h1>
                <div className='major-skills'>
                    <div className='resume-skills'>
                        <li><b>Programming Languages: </b>Python, R, Java, JavaScript, HTML, CSS, SQL, C</li>
                        <li><b>Data Science Packages/Libraries: </b>Python (numpy, Pandas, Matplotlib, Scikit-Learn, Pyvis, NetworkX, Spacy, NLTK), R (dplyr, ggplot2)</li>
                        <li><b>Technologies & Techniques: </b>Microsoft Office, Tableau, Git, Xcode, React, Web Scraping, Data Engineering, Data Cleaning, Database Management, Data Visualization, Statistical Analysis, Regression, Predictive Analytics, Streamlit</li>
                    </div>

                </div>
            </div>
            <Divider variant="middle" sx={{ bgcolor: 'gray', opacity: 0.3 }} />
            <div className='Additional Achievements'>
    <h1 className='resume-title'>Additional Achievements</h1>
    {Object.keys(accomplishments).map((accomplishment, index) => (
        <div key={index} className='accomplishments-major'>
            <div className='resume-accomplishments'>
                <h2 className='time'>{accomplishment}</h2>
                <p className='accomplishment-text'>{accomplishments[accomplishment]}</p>
            </div>
        </div>
    ))}
</div>

        </div>

    );
}
