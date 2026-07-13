import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skillGroups = [
    {
      title: 'Product',
      skills: [
        'Product Discovery',
        'Requirements Gathering',
        'UX Research',
        'Workflow Analysis',
        'Information Architecture'
      ]
    },
    {
      title: 'UX & Design',
      skills: [
        'Interaction Design',
        'Prototyping',
        'Accessibility',
        'Design Systems',
        'Visual Design'
      ]
    },
    {
      title: 'Engineering Collaboration',
      skills: [
        'Figma',
        'KendoReact',
        'ThemeBuilder',
        'Design Tokens',
        'Component Architecture',
        'Documentation',
        'GitHub',
        'VS Code'
      ]
    },
    {
      title: 'AI',
      skills: [
        'Claude',
        'GitHub Copilot',
        'Lovable',
        'Figma MCP',
        'Prompt Engineering',
        'AI DesignOps'
      ]
    }
  ];

  const cares = [
    'Building design cultures where critique is honest, standards are useful, and mentorship helps people grow without theater',
    'Simplifying complex enterprise workflows so people can make confident decisions in high-volume, high-pressure contexts',
    'Making design governance feel like stewardship rather than bureaucracy by pairing clear standards with practical contribution paths'
  ];

  const experience = [
    {
      title: 'Senior UI Designer',
      company: 'Wheels, Inc.',
      period: 'Apr 2024 – Present',
      highlights: [
        'Set UX direction and design system governance across the merged Wheels, Donlen, and LeasePlan USA product ecosystem',
        'Unified three companies under a single design language, delivering 60+ KendoReact components and a feature-rich data grid',
        'Operated as a principled design authority across product, marketing, engineering, and external agency partners without direct reporting authority',
        'Established parity between Figma, ThemeBuilder, and Storybook, reducing design-dev churn and improving consistency',
        'Partnered with engineering to optimize workflows, cutting implementation time by 50%',
        'Applied WCAG AA compliance across core components and mentored designers through Figma onboarding and system adoption'
      ]
    },
    {
      title: 'UI/UX Designer II',
      company: 'Wheels, Inc.',
      period: 'Aug 2020 – Apr 2024',
      highlights: [
        'Owned end-to-end product design for complex enterprise workflows across web and mobile surfaces',
        'Led migration to Figma and trained cross-functional teams, accelerating design adoption and shared workflow maturity',
        'Directed flagship platform redesign work that created a unified user experience across web and mobile',
        'Embedded accessibility standards into product design workflows to improve delivery quality before development handoff'
      ]
    },
    {
      title: 'Design Consultant',
      company: 'Purdue University Northwest',
      period: 'Feb 2023 – Apr 2023',
      highlights: [
        'Led redesign of the NLN Center of Excellence application and secured stakeholder buy-in through high-fidelity prototypes'
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
      <p className="eyebrow">About</p>
      <h1>I work at the intersection of Product, UX, Design Systems, Engineering, and AI.</h1>
      <p className="about-subtitle">
        Senior UI Designer with 8+ years of experience helping teams turn complex operational problems into scalable product experiences, reusable systems, and production-ready solutions.
      </p>

      <p>
        Over the past several years my role has naturally evolved beyond UI design into product discovery, design systems, and improving how Product, Engineering, and UX work together. I enjoy taking complex operational problems, understanding user needs, rapidly exploring solutions, and helping teams move efficiently from ideas to production.
      </p>
      <p>
        My work is grounded in systems thinking: clarifying requirements, mapping workflows, identifying constraints, and translating ambiguity into reusable patterns, accessible experiences, and implementation guidance. I care about the space between design intent and production reality, where documentation, design tokens, component architecture, and engineering collaboration determine whether good ideas scale.
      </p>
      <p>
        I also use AI-assisted workflows thoughtfully to improve speed and clarity across prototyping, documentation, context engineering, and DesignOps. The goal is not to replace design judgment, but to help cross-functional teams learn faster, communicate better, and reduce handoff friction.
      </p>

      <a
        href="/files/Davy_Jones_Resume_2026.doc"
        download="JonesDavy_Resume.doc"
        className="btn btn-primary"
        aria-label="Download resume as PDF"
        style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem'}}
      >
        <Download size={18} />
        <span style={{whiteSpace: 'nowrap'}}>Download Resume</span>
      </a>

      <hr />

      <h2>Skills</h2>
      {skillGroups.map((group) => (
        <section key={group.title} className="skill-group" aria-labelledby={`${group.title}-heading`}>
          <h3 id={`${group.title}-heading`}>{group.title}</h3>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </section>
      ))}

      <hr />

      <h2>What I Care About</h2>
      <ul>
        {cares.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>Professional Experience</h2>
      {experience.map((job) => (
        <div key={`${job.company}-${job.title}`} className="experience-item">
          <h3>{job.title}</h3>
          <p className="experience-period">{job.company} • {job.period}</p>
          <ul>
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
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
