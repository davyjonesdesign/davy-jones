import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact container">
      <p className="eyebrow">Contact</p>
      <h1>Let's talk if you need principled UX leadership that still ships.</h1>
      <p className="contact-intro">
        I'm open to Lead UX Designer and Principal Designer roles where the work needs both conviction and humility: strategy, design systems, product clarity, and healthier ways for teams to make decisions. Remote is preferred, and I am open to hybrid opportunities in Chicagoland.
      </p>
      <p className="contact-intro">
        If that sounds like the kind of leadership you need, reach out by email, connect on LinkedIn, or download my resume.
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
          href="https://linkedin.com/in/dmjonesme"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Linkedin size={24} />
          <div>
            <strong>LinkedIn</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text-tertiary)'}}>linkedin.com/in/dmjonesme</p>
          </div>
        </a>

        <a
          href="/files/JonesDavy_Resume_2026_st.pdf"
          download="Resume_Jones-David_2026.pdf"
          className="contact-link"
        >
          <Download size={24} />
          <div>
            <strong>Resume</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--color-text-tertiary)'}}>Download PDF</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
