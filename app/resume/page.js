import React from 'react';
import Link from "next/link";
import "./resume.css"
import Divider from '@mui/material/Divider';
import Head from 'next/head';
 
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

    const certificate = [
        'Python',
        'Pandas',
        'Matplotlib',
        'Scikit-Learn',
        'Statsmodels',
        'Regression Analysis',
        'Linear Regression',
        'Logistic Regression',
        'Decision Trees',
        'Random Forest',
        'XGBoost'
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
        <>
        <Head>
        <link
          rel="canonical"
          href="https://ahmirpostell.com/resume"
          key="canonical"
        />
        </Head>
        <div className='resume-page'>
            <div className='intro'>
                <h1 className='resume-page-title '>Resume</h1>
            </div>
            <div className='education'>
                <div className='top-line'>
                <h1 className="download">
                    <Link href='/Ahmir_Postell_Resume.pdf' target="_blank" style={{ textDecoration: 'none' }} className='download-button'>Download Resume</Link>
                    </h1>
                    <Divider variant="middle" sx={{ bgcolor: 'gray', opacity: 0.5 }} />
                    <h1 className='resume-title'>Education</h1>
                </div>
                <div>
                <a className='major-2' href='https://www.coursera.org/account/accomplishments/specialization/P8C3Z8UYOR0U' target="_blank" style={{ textDecoration: 'none' }}>
                        <div className='row-1'>
                            <h2 className='time'>Google Advanced Data Analytics</h2>
                            <div className='setting'>
                                <h4>by Google on Coursera</h4>
                                <h3>Obtained 2024</h3>
                            </div>
                        </div>
                        <div className='row-2'>
                            <h2 className='coursework'>Skills/Techniques:</h2>
                            <div className='courses'>
                            {certificate.map((course, index) => (
                                <h3 className='list-item' key={index}>• {course}</h3>
                            ))}
                            </div>
                        </div>
                    </a>
                    <div className='major'>
                        <div className='row-1'>
                            <h2 className='time'>Expected Feb. 2026</h2>
                            <div className='setting'>
                                <h4>William and Mary</h4>
                                <h3>Williamsburg, Virginia</h3>
                            </div>
                            <h4 className='degree'>Mastors of Science in <b>Business Analytics</b> (MSBA)</h4>
                        </div>
                        <div className='row-2'>
                        <h2 className='coursework'>
                            <a className='in-progress-button' href='https://online.mason.wm.edu/msba/' target="_blank" style={{ textDecoration: 'none' }}>
                            Learn More About My MSBA
                            </a>
                        </h2>
                            {/*
                            <div className='courses'>
                            {cs_courses.map((course, index) => (
                                <h3 className='list-item' key={index}>• {course}</h3>
                            ))}
                            </div> */}
                        </div>
                    </div>
                    
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
                <div className='major-skills-2'>
                    <div className='resume-skills'>
                        <li><b>Programming Languages: </b>Python, R, Java, JavaScript, HTML, CSS, SQL, C</li>
                        <li><b>Data Science Packages/Libraries: </b>
    <ul className='skills-list'>
        <li className='skill-section'><u>Python:</u>
            <ul className='sublist'>
                <li>numpy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Scikit-Learn</li>
                <li>Pyvis</li>
                <li>NetworkX</li>
                <li>Spacy</li>
                <li>NLTK</li>
            </ul>
        </li>
        <li className='skill-section'><u>R:</u>
            <ul className='sublist'>
                <li>dplyr</li>
                <li>ggplot2</li>
            </ul>
        </li>
    </ul>
</li>

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
        </>

    );
}
