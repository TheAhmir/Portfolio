import About_Me from "./home/about/about_me";
import Skills from "./home/skills/skills";
import Head from 'next/head';
import "./homepage.css"
import Link from "next/link";
import Typewriter_Component from "./home/typewriter";
import Flashcards from "./home/flashcards";

export const metadata = {
  title: "Ahmir Postell - Data Analyst Portfolio",
  description: "Ahmir Postell's portfolio showcasing technical skills and projects. Learn more or contact me.",
  keywords: [
    "ahmir",
    "postell",
    "ahmirpostell",
    "ahmir postell",
    "data analyst",
    "data science",
    "python",
    "r",
    "portfolio",
    "react",
    "machine learning",
    "business analytics",
    "SQL",
    "professional portfolio",
    "personal portfolio",
    "Ahmir Postell portfolio"
  ],
};

export default function Home() {

  return (
    <>
    <Head>
    <link
          rel="canonical"
          href="https://ahmirpostell.com"
          key="canonical"
        />
    </Head>
    <div className="homepage">
      <div className="pages">
      <div className="starter">
        <div className="beginning">
        <h1 className="ahmir">Ahmir Postell</h1>
        <Typewriter_Component />
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
    </>
  );
}
