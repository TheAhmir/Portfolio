import React from "react";
import Contact from "./contact"
import Head from 'next/head';

export const metadata = {
    title: "Ahmir Postell - Contact | Data Analyst Portfolio",
    description: "Contact Ahmir Postell, a skilled Data Analyst. Connect for professional inquiries, collaborations, and more.",
    keywords: [
      "Ahmir Postell contact",
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
        <head>
        <link
          rel="canonical"
          href="https://ahmirpostell.com/contact"
          key="canonical"
        />
        </head>
        <Contact />
        </>
    );
}
