import React from "react";
import Contact from "./contact"
import Head from 'next/head';

export const metadata = {
    title: "Ahmir Postell - Contact | Portfolio",
    description: "Contact Ahmir Postell. Connect for professional inquiries, collaborations, and more.",
    keywords: [
      "Ahmir Postell contact",
      "computer science",
      "software engineer",
      "software development",
      "contact Data Analyst",
      "contact Data Scientist",
      "data analysis contact",
      "business analytics contact",
      "Python expert contact",
      "R expert contact",
      "SQL expert contact",
      "Tableau expert contact",
      "professional inquiries",
      "data-driven solutions contact"
    ]
  };

export default function Page() {

    return (
        <>
        <Head>
        <link
          rel="canonical"
          href="https://ahmirpostell.com/contact"
          key="canonical"
        />
        </Head>
        <Contact />
        </>
    );
}
