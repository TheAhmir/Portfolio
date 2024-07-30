import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../nav/nav.js"
import React from "react";
import Divider from '@mui/material/Divider';
import Media from "./global_components/media";
import { ClerkProvider } from '@clerk/nextjs';
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="canonical"
          href="https://ahmirpostell.com"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <GoogleTagManager gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      <ClerkProvider>
      <body className={inter.className}>
        <div className="nav">
          <Nav />
        </div>
        <div className="children">
          {children}
        </div>
        <div className="divider">
        <Divider variant="middle" sx={{ bgcolor: 'aliceblue' }} /> 
        <Media />
        </div>
      </body>
      </ClerkProvider>
    </html>
  );
}
