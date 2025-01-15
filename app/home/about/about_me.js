'use client'
import { PortableText } from "@portabletext/react";
import { urlFor, getBio } from "@/lib/client";
import Loader from "@/app/global_components/loader";
import "./about_me.css";

export default async function About_Me() {
    const bio = await getBio();
    if (!bio) {
        return <div>
            <Loader/>
        </div>;
    }

    return (
        <div className="page">
            <h1>About Me</h1>
            <div className="content">
                <div className="bio">
                    <PortableText value={bio.bio} />
                </div>
            </div>          
        </div>
    )
}
