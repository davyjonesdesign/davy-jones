import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skillGroups = [
    {
      title: 'UI & UX Design',
      skills: [
        'Complex Operational Workflows',
        'Dashboard & Data-Dense UI',
        'Visual Hierarchy & Typography',
        'Interaction Design',
        'User Journey Mapping',
        'Rapid Prototyping'
      ]
    },
    {
      title: 'Design Systems',
      skills: [
        'Enterprise Design Systems',
        'Component Architecture',
        'Design Tokens',
        'Design-to-Development Workflows',
        'Web Accessibility (WCAG AA)',
        'KendoReact',
        'Storybook'
      ]
    },
    {
      title: 'AI & Emerging Workflows',
      skills: [
        'Claude Code',
        'GitHub Copilot',
        'Figma MCP',
        'Lovable',
        'AI-Assisted Prototyping',
        'Context Engineering',
        'DesignOps'
      ]
    },
    {
      title: 'Cross-Functional Leadership',
      skills: [
        'Engineering Partnership',
        'UX Governance & Stewardship',
        'Design Reviews',
        'Agile Delivery',
        'Technical Communication'
      ]
    }
  ];

  const experience = [
    {
      title: 'Senior UI Designer',
      company: 'Wheels, Inc.',
      period: 'Apr 2024 - Present',
      highlights: [
        'Set UX direction, component architecture, and design system governance across the merged Wheels, Donlen, and LeasePlan USA product ecosystems spanning desktop, web, and mobile surfaces',
        'Unified three legacy organizations under a single enterprise design language, delivering 60+ production KendoReact components, accessible interaction patterns, and a feature-rich data grid',
        'Established parity between Figma, ThemeBuilder, and Storybook, eliminating implementation ambiguity and cutting developer turnaround time by up to 50%',
        'Designed complex multi-step transactional flows and data-dense operational surfaces, including FleetView 4.0, New Driver Experience, Mileage Entry, and Book Appointment',
        'Embedded WCAG AA accessibility into foundational design tokens and core UI components, ensuring new feature releases remain inclusive by default',
        'Explored and integrated AI-assisted workflows using GitHub Copilot, Claude Code, Figma MCP, and Lovable for rapid prototyping, documentation generation, and context engineering'
      ]
    },
    {
      title: 'UI/UX Designer II',
      company: 'Wheels, Inc.',
      period: 'Aug 2020 - Apr 2024',
      highlights: [
        'Spearheaded the organization-wide migration to Figma as the primary design tool, establishing token strategies, reusable libraries, and component structures that formed the baseline for the enterprise design system',
        'Designed end-to-end enterprise interfaces for fleet managers, drivers, and internal operations teams, standardizing contrast, typography, and state behaviors',
        'Co-designed handoff workflows with UI development principals, producing comprehensive UX specs and QA-aligned documentation that reduced rework and improved release consistency',
        'Partnered across Marketing Cloud and reporting teams, including Tableau, to extend core system patterns into adjacent digital touchpoints'
      ]
    },
    {
      title: 'Design Consultant',
      company: 'Purdue University Northwest',
      period: 'Feb 2023 - Apr 2023',
      highlights: [
        'Led redesign of the NLN Center of Excellence application and secured stakeholder buy-in through high-fidelity prototypes'
      ]
    },
    {
      title: 'UX/UI Designer',
      company: 'Central Wire Industries',
      period: 'Apr 2019 - Mar 2020',
      highlights: [
        'Established design governance documentation and collaborated with web developers to standardize typography, color usage, and reusable UI components across digital channels'
      ]
    }
  ];

  return (
    <div className="about container">
      <p className="eyebrow">About</p>
      <h1>I design products, systems, and the way teams work together.</h1>
      <p className="about-subtitle">
        I am a systems-oriented Senior UI Designer with over six years of enterprise experience making complex workflows easier to understand and build.
      </p>

      <p>
        I work across product design, design systems, and engineering collaboration. I care about the details that help a good idea survive contact with production.
      </p>
      <p>
        I use tools like GitHub Copilot, Claude Code, Figma MCP, and Lovable to prototype faster, document decisions, and make handoffs clearer. The judgment stays with the team.
      </p>

      <a
        href="/files/Davy_Jones_Resume_2026.docx"
        download="Davy_Jones_Resume_2026.docx"
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
        <p>M.A., Graphic & Web Design</p>
        <p>Minneapolis College of Art & Design, 2023</p>
      </div>
      <div className="education-item">
        <p>B.S., Communication</p>
        <p>Columbia International University, 2016</p>
      </div>
    </div>
  );
};

export default About;
