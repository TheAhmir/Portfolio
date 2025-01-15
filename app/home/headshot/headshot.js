'use client'
import { urlFor, getBio } from "@/lib/client";
import Loader from "@/app/global_components/loader";
import "./headshot.css";

export default async function Headshot() {
    const bio = await getBio();
    if (!bio) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        bio.image && (
            <img 
                className="headshot"
                src={urlFor(bio.image)}
                alt="Ahmir Headshot Photo"
            />
        )
    );
}
