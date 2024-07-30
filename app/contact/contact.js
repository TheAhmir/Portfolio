'use client'

import React from "react";
import './contact.css';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const api_key = process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        // Manually append the access key
        formData.append("access_key", api_key);

        // Convert formData to a JSON object
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            });

            const data = await response.json();

            if (data.success) {
                setResult("Your message has been sent successfully. I will be in touch as soon as possible.");
                event.target.reset();  // Reset the form fields
            } else {
                console.log("Error", data);
                setResult("An error has occurred. Try sending me an email directly.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    return (
        <div>
            <div className='contact-intro'>
                <h1 className='contact-title'>Get In Touch</h1>
                <p className="contact-caption">Interested in working together? I’d love to hear from you.</p>
            </div>
            <div className='contacts'>
                <div className="contacts-item">
                    <a href="tel:7577496382" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="contacts-bg">
                        <img src='/mobile.png' width={45} alt="Phone Icon" />
                        <p className='link-text'>+757-749-6382</p>
                    </a>
                </div>
                <div className="contacts-item">
                    <a href="mailto:postell.ahmir@gmail.com" style={{ textDecoration: 'none' }} className="contacts-bg">
                        <img src='/email.png' width={45} alt="Email Icon" />
                        <p className='link-text'>Postell.Ahmir@gmail.com</p>
                    </a>
                </div>
            </div>
            {!result ? (
                <form className="contact-form" onSubmit={onSubmit}>
                    <label htmlFor="full_name" label/>
                    <input
                        className="input"
                        type="text"
                        id="full_name"
                        name="full_name"
                        placeholder="Full Name"
                        required
                    />
                    <label htmlFor="email" label/>
                    <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="subject"/>
                    <input
                        className="input"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <label htmlFor="message"/>
                    <textarea
                        className="input textarea"
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                    ></textarea>
                    <div className="submit-button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            ) : (
                <span className="result">{result}</span>
            )}
        </div>
    );
}
