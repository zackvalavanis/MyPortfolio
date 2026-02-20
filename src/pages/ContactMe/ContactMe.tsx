import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

// ─── Icons (inline SVGs, no extra dependency) ────────────────────────────────

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function ContactMe() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY }
      )
      .then(
        () => {
          alert("Email Sent!");
          window.scrollTo(0, 0);
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <div className="contact-me-container">

      {/* ── Left: Info Card ── */}
      <div className="left-side-contact-container">
        <h2 className="header-in-container">Get In Touch</h2>

        <div className="infomation-container">
          <div className="pro-summary-container">
            <h1>
              I'm always open to connecting — whether it's about a role, a
              collaboration, or just sharing ideas. Feel free to reach out
              through the form or any of the channels below.
            </h1>
          </div>

          <div
            className="group-container"
            onClick={() => (window.location.href = "mailto:Zval321@gmail.com")}
            role="link"
            tabIndex={0}
          >
            <MailIcon />
            <h1>Email</h1>
            <p>Zval321@gmail.com</p>
          </div>

          <a
            className="group-container"
            href="https://github.com/zackvalavanis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <h1>Github</h1>
            <p>github.com/zackvalavanis</p>
          </a>

          <a
            className="group-container"
            href="https://www.linkedin.com/in/zack-valavanis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <h1>LinkedIn</h1>
            <p>linkedin.com/in/zack-valavanis</p>
          </a>
        </div>
      </div>

      {/* ── Right: Contact Form ── */}
      <div className="right-side-contact-container">
        <h2 className="header-in-container">Send a Message</h2>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="row-fields">
            <div className="name-container">
              <label className="label-container" htmlFor="first-name">
                First Name
              </label>
              <div className="email-input-container">
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  placeholder="Jane"
                  required
                />
              </div>
            </div>

            <div className="name-container">
              <label className="label-container" htmlFor="last-name">
                Last Name
              </label>
              <div className="email-input-container">
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          <div className="email-container">
            <label className="label-container" htmlFor="email">
              Email
            </label>
            <div className="email-input-container">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="message-container">
            <label className="label-container" htmlFor="message">
              Message
            </label>
            <div className="message-input-container">
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                required
              />
            </div>
          </div>

          <div className="submit-email-button-container">
            <button type="submit" className="submit-button-email">
              Send Message
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
