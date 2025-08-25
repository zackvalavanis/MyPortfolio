import React, { JSX, useRef } from 'react';
import './ContactMe.css';
// import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export function ContactMe(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Email Sent!')
          window.scroll(0, 0)
          console.log('SUCCESS!');
          form.current?.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:Zval321@gmail.com";
  };

  return (
    <div className='contact-me-container'>

      {/* Left Side */}
      <div className='left-side-contact-container'>
        <h1 className='header-in-container'>Professional Summary</h1>
        <div className='infomation-container'>
          <div className="pro-summary-container">
            <h1>Hello! My name is Zack Valavanis, and I’m passionate about advancing my journey in computer science and software engineering. Originally from the northern suburbs of Chicago, I enjoy playing guitar, going to concerts, traveling, and working on side projects that challenge and inspire me.</h1>
          </div>

          <div className='group-container' onClick={handleEmailClick} style={{ cursor: "pointer" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
              <path d="M22 12l-10 6-10-6V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8z"></path>
            </svg>
            <h1>Email</h1>
            <p>Zval321@gmail.com</p>
          </div>

          <div>
            <a className='group-container' href='https://github.com/zackvalavanis'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.01 8.16 7.13 9.49.52.1.71-.22.71-.49 0-.24-.01-.88-.01-1.73-2.91.63-3.53-1.4-3.53-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.58 1.07 1.58 1.07.93 1.59 2.44 1.13 3.03.86.09-.68.36-1.13.66-1.39-2.33-.26-4.77-1.17-4.77-5.21 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.37.1-2.86 0 0 .89-.28 2.91 1.08 1.68-.47 3.5-.47 5.18 0 2.02-1.36 2.91-1.08 2.91-1.08.57 1.49.21 2.59.1 2.86.67.74 1.08 1.68 1.08 2.83 0 4.04-2.44 4.95-4.77 5.21.38.33.73.98.73 1.97 0 1.42-.01 2.57-.01 2.92 0 .27.19.6.73.49C18.99 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
              <h1>Github</h1>
              <p>github.com/zackvalavanis</p>
            </a>
          </div>

          <div>
            <a className='group-container' href='https://www.linkedin.com/in/zack-valavanis/'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="36" height="36">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.3 110 0 85.7 0 56.3S24.3 2.5 53.84 2.5 107.7 26.8 107.7 56.3 83.38 110 53.84 110zm394.18 338h-92.68V302.4c0-34.7-12.44-58.3-43.52-58.3-23.74 0-37.88 16-44.12 31.4-2.28 5.6-2.84 13.4-2.84 21.2V448h-92.78s1.24-236.2 0-260.1h92.78v36.8c12.3-19 34.4-46 83.68-46 61.12 0 107.04 39.8 107.04 125.3V448z" />
              </svg>
              <h1>LinkedIn</h1>
              <p>linkedin.com/in/zack-valavanis</p>
            </a>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="right-side-contact-container">
        <h1 className="header-in-container">Contact Me</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>

          {/* First & Last Name on same row */}
          <div className="row-fields">
            <div className="name-container">
              <div className="label-container">First Name:</div>
              <div className="email-input-container">
                <input type="text" name="first-name" placeholder='first name' />
              </div>
            </div>

            <div className="name-container">
              <div className="label-container">Last Name:</div>
              <div className="email-input-container">
                <input type="text" name="last-name" placeholder='last name' />
              </div>
            </div>
          </div>

          {/* Email field */}
          <div className="email-container">
            <div className="label-container">Email:</div>
            <div className="email-input-container">
              <input type="text" name="email" placeholder='email' />
            </div>
          </div>

          {/* Message field */}
          <div className="message-container">
            <div className="label-container">Message:</div>
            <div className="message-input-container">
              <textarea name="message" placeholder='your message' />
            </div>
          </div>

          {/* Submit button */}
          <div className="submit-email-button-container">
            <button type="submit" className="submit-button-email">Send Email</button>
          </div>

        </form>
      </div>

    </div>
  );
}


