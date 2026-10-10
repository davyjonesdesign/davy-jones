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
        'CSS/SCSS Theme Work',
        'Scoped npm Packages',
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
        'Figma Make Kit Guidance',
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
        'Worked across Wheels, Donlen, and LeasePlan USA after the merger, connecting shared product patterns across web and mobile',
        'Built KendoReact components, interaction patterns, and a data grid for the shared design system',
        'Maintain the W-UI Figma library and KendoReact theme in ThemeBuilder, checking component behavior and styling against Storybook',
        'Extended the Figma Make theme with token mappings, Kendo overrides, and custom component styles and examples; prepared the scoped, versioned @w-figma/w-kendo-theme package for distribution',
        'Designed complex multi-step transactional flows and data-dense operational surfaces, including FleetView 4.0, New Driver Experience, Mileage Entry, and Book Appointment',
        'Added WCAG AA accessibility requirements to design tokens and core components so teams had a clear starting point',
        'Used GitHub Copilot, Claude Code, Figma MCP, and Lovable to inspect prototypes, document decisions, and test where AI helped or made more work'
      ]
    },
    {
      title: 'UI/UX Designer II',
      company: 'Wheels, Inc.',
      period: 'Aug 2020 - Apr 2024',
      highlights: [
        'Moved the design team to Figma and set up tokens, reusable libraries, and component structures for the design system',
        'Designed interfaces for fleet managers, drivers, and operations teams, working through contrast, typography, and component states',
        'Worked with UI development leads on handoff: UX specs, annotations, and documentation for implementation and QA',
        'Worked with Marketing Cloud email and Tableau reporting teams to adapt shared patterns for those surfaces'
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
      <h1>I work across Figma libraries, UI themes, and the code they guide.</h1>
      <p className="about-subtitle">
        I'm a senior UI designer at Wheels. I maintain the W-UI Figma library and Kendo theme, build shared patterns, and document what engineering and Figma Make can actually use.
      </p>

      <p>
        Figma, ThemeBuilder, Storybook, and the implemented UI don't always tell the same story. I work across those tools and update the system when it falls short. For Figma Make, reviewed theme output goes into a scoped package with the CSS, fonts, and examples the kit uses. The package provides styles and examples, not React components.
      </p>
      <p>
        I've also been writing kit guidance that maps Figma patterns to the KendoReact packages and APIs that are actually installed. I use GitHub Copilot, Claude Code, Figma MCP, and Lovable on real work; they help with a first pass, but I still check the components, behavior, and details. When the same thing goes wrong twice, I update the system or the guidance.
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
