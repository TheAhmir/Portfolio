'use client'

import About_Me from "./home/about/about_me";
import "./homepage.css"
import Link from "next/link";
import Typewriter_Component from "./home/typewriter";
import Flashcards from "./home/flashcards";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Home() {

  const [text] = useTypewriter({ // Destructure the value returned by useTypewriter
    words: [
        "Data Analyst",
        "William and Mary, 2024 Graduate"
    ],
    loop: true,
    delaySpeed: 2000,
});

  return (
    <div className="homepage">
      <div className="pages">
      <div className="starter">
        <div className="beginning">
        <h1 className="ahmir">Ahmir Postell</h1>
        <h3>
            <span className='job-title'>{text}</span>
            <Cursor cursorColor= '#313bac' />
        </h3>
        <Flashcards />
        
        <div className="links">
        <Link href='/contact' style={{ textDecoration: 'none' }} className="resumeButton">
          <h1>Get In Touch</h1>
        </Link>
        <Link href='/resume' style={{ textDecoration: 'none' }} className="resumeButton">
          <h1>My Resume</h1>
        </Link>
        </div>
        </div>
      </div>
      <div className="about-page">
      <About_Me />
      </div>
      {//<div className='skills-page'>
      //<Skills />
      //</div>
    }
      </div>
    </div>
  );
}
