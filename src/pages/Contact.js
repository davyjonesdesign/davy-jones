import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact container">
      <h1>Let's Connect</h1>
      <p className="contact-intro">
        I'm always interested in hearing about new opportunities, collaborative 
        projects, and conversations about design systems and accessibility. 
        Feel free to reach out!
      </p>

      <div className="contact-links">
        <a 
          href="mailto:dmjones.me@gmail.com" 
          className="contact-link"
        >
          <Mail size={24} />
          <div>
            <strong>Email</strong>
            <p style={{margin: 0, fontSize: '0.875rem', color: '#6b7280'}}>dmjones.me@gmail.com</p>
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
            <p style={{margin: 0, fontSize: '0.875rem', color: '#6b7280'}}>linkedin.com/in/dmjonesme</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;