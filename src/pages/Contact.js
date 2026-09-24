import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact container">
      <p className="eyebrow">Contact</p>
      <h1>Have a complex product problem to work through?</h1>
      <p className="contact-intro">
        I am open to Lead UX Designer and Principal Designer roles focused on product clarity, design systems, and better ways for teams to work together. Remote is preferred, and I am open to hybrid opportunities in Chicagoland.
      </p>
      <p className="contact-intro">
        Send me an email, connect on LinkedIn, or download my resume.
      </p>

      <div className="contact-links">
        <a
          href="mailto:dmjones.me@gmail.com"
          className="contact-link"
        >
          <Mail size={24} />
          <div>
            <strong>Email</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text-tertiary)'}}>dmjones.me@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/davyjonesme/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Linkedin size={24} />
          <div>
            <strong>LinkedIn</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text-tertiary)'}}>linkedin.com/in/davyjonesme</p>
          </div>
        </a>

        <a
          href="/files/Davy_Jones_Resume_2026.docx"
          download="Davy_Jones_Resume_2026.docx"
          className="contact-link"
        >
          <Download size={24} />
          <div>
            <strong>Resume</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text-tertiary)'}}>Download DOCX</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
