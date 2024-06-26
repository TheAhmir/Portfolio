import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../nav/nav.js"
import React from "react";
import Divider from '@mui/material/Divider';
import Media from "./global_components/media";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmir Postell",
  description: "Data Science Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
    </html>
  );
}
