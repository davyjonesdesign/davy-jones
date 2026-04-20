import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'Design Systems Governance and Stewardship',
    'System Boundaries, Guardrails and Contribution Frameworks',
    'Organizational Influence Without Direct Authority',
    'Production Interface Design (Web, Mobile, Multi-Platform)',
    'Figma (Expert) and Adobe Creative Suite',
    'Accessibility and Inclusive Design (WCAG AA)',
    'Engineering Collaboration and High-Fidelity Handoff',
    'UX Research, Workflow Documentation and Design Rationale',
    'Prototyping (Low to High Fidelity, Smart Animate)',
    'Stakeholder Presentation and Executive Communication'
  ];

  const experience = [
    {
      title: 'Senior UI Designer',
      company: 'Wheels, Inc.',
      period: 'Apr 2024 – Present',
      highlights: [
        'Unified three companies under a single design system, delivering 60+ KendoReact components and a feature-rich data grid',
        'Operating as staff-level design leader across multi-stream initiatives, connecting system decisions to business outcomes and holding standards under pressure across product, marketing, engineering, and external agency partners',
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
        Staff UX/UI Designer  ·  Design Systems Governance, Organizational Influence & Production Interface Design
      </p>

      <p>
        I specialize in the kind of design work that holds organizations together: 
        building the systems, standards, and governance frameworks that let teams move 
        fast without losing quality or coherence. My career has been defined by 
        operating at the intersection of design craft and organizational influence, 
        making the right design decisions and then making sure they actually stick.
      </p>
      <p>
        At Wheels, Inc., I govern a design system that unifies three merged companies 
        under a single visual and interaction language across web and mobile. That means 
        owning the component library, defining the guardrails, writing the documentation, 
        and stepping in, with principled rationale, when teams diverge from the system. 
        It also means navigating high-stakes conversations with product, engineering, 
        marketing, and external partners on a daily basis.
      </p>
      <p>
        I hold an MA in Graphic and Web Design from the Minneapolis College of Art and 
        Design, which sharpened a craft foundation I had been building since 2016 across 
        financial tools, nonprofit digital products, fleet management platforms, and 
        enterprise SaaS. I am at my best in roles where design quality is non-negotiable 
        and systems thinking is the mechanism for delivering it at scale.
      </p>
      
      <a 
        href="/files/JonesDavy_Resume_2026_st.pdf" 
        download="Resume_Jones-David_2026.pdf"
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
