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

          <div className='group-container' onClick={handleEmailClick} style={{ cursor: "pointer" }}>
            <h1>Email</h1>
            <p>Zval321@gmail.com</p>
          </div>

          <div>
            <a className='group-container' href='https://github.com/zackvalavanis'>
              <h1>Github</h1>
              <p>github.com/zackvalavanis</p>
            </a>
          </div>

          <div>
            <a className='group-container' href='https://www.linkedin.com/in/zack-valavanis/'>
              <h1>LinkedIn</h1>
              <p>linkedin.com/in/zack-valavanis</p>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side-contact-container">
        <h1 className="header-in-container">Contact Me:</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>

          {/* First & Last Name on same row */}
          <div className="row-fields">
            <div className="name-container">
              <div className="label-container">First Name:</div>
              <div className="email-input-container">
                <input type="text" name="first-name" />
              </div>
            </div>

            <div className="name-container">
              <div className="label-container">Last Name:</div>
              <div className="email-input-container">
                <input type="text" name="last-name" />
              </div>
            </div>
          </div>

          {/* Email field */}
          <div className="email-container">
            <div className="label-container">Email:</div>
            <div className="email-input-container">
              <input type="text" name="email" />
            </div>
          </div>

          {/* Message field */}
          <div className="message-container">
            <div className="label-container">Message:</div>
            <div className="message-input-container">
              <textarea name="message" />
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
