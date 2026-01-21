import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'Design Systems & Governance',
    'UI/UX Strategy (Web, Mobile)',
    'Accessibility (WCAG)',
    'React & Vue',
    'Figma & Adobe CC',
    'UX Research & Prototyping',
    'Agile Collaboration',
    'Stakeholder Alignment'
  ];

  const experience = [
    {
      title: 'Senior UI Designer',
      company: 'Wheels, Inc.',
      period: 'Apr 2024 – Present',
      highlights: [
        'Unified three companies under a single design system, delivering 60+ KendoReact components and a feature-rich data grid',
        'Established parity between Figma, ThemeBuilder, and Storybook, reducing design–dev churn and improving consistency',
        'Partnered with engineering to optimize workflows, cutting implementation time by 50%',
        'Applied WCAG AA compliance across 10+ components, significantly improving accessibility',
        'Delivered executive-level presentations influencing product strategy and stakeholder alignment',
        'Mentored designers through Figma onboarding and system adoption, fostering a design-thinking culture'
      ]
    },
    {
      title: 'UI/UX Designer II',
      company: 'Wheels, Inc.',
      period: 'Aug 2020 – Apr 2024',
      highlights: [
        'Spearheaded migration to Figma and trained cross-functional teams, accelerating design adoption',
        'Designed scalable UI components for multi-platform deployment, improving speed and consistency',
        'Directed flagship platform redesign, creating a unified user experience across web and mobile',
        'Embedded accessibility standards into design workflows to meet WCAG compliance'
      ]
    },
    {
      title: 'Design Consultant',
      company: 'Purdue University Northwest',
      period: 'Feb 2023 – Apr 2023',
      highlights: [
        'Led redesign of NLN Center of Excellence application, securing stakeholder buy-in through high-fidelity prototypes'
      ]
    },
    {
      title: 'UX/UI Designer',
      company: 'Central Wire Industries',
      period: 'Apr 2019 – Mar 2020',
      highlights: [
        'Developed design governance documentation and partnered with developers to deliver scalable UI solutions'
      ]
    }
  ];

  return (
    <div className="about container">
      <h1>About Me</h1>
      <p className="about-subtitle">
        Senior UX/UI Designer  |  Design Systems Lead  |  Accessibility Advocate
      </p>

      <p>
        With 8+ years of experience, I create scalable, multi-platform digital experiences 
        that unify design and development. I specialize in building design systems that 
        accelerate development velocity while maintaining accessibility and brand consistency.
      </p>
      <p>
        Currently leading design system initiatives at Wheels, Inc., where I've unified 
        three companies under a single design ecosystem, delivering 60+ components and 
        cutting implementation time by 50%.
      </p>
      
      <a 
        href="/files/resume.pdf" 
        download="JonesDavy_Resume_2026.pdf"
        className="btn btn-primary"
        aria-label="Download resume as PDF"
        style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem'}}
      >
        <Download size={18} />
        <span style={{whiteSpace: 'nowrap'}}>Download Resume</span>
      </a>

      <hr />

      <h2>Core Competencies</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      <hr />

      <h2>Professional Experience</h2>
      {experience.map((job, idx) => (
        <div key={idx} className="experience-item">
          <h3>{job.title}</h3>
          <p className="experience-period">{job.company} • {job.period}</p>
          <ul>
            {job.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}

      <hr />

      <h2>Education</h2>
      <div className="education-item">
        <p>MA Graphic & Web Design</p>
        <p>Minneapolis College of Art & Design, 2023</p>
      </div>
      <div className="education-item">
        <p>BS Communications</p>
        <p>Columbia International University, 2016</p>
      </div>
    </div>
  );
};

export default About;