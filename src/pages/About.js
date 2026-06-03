import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const competencies = [
    'UX Strategy',
    'Design Leadership',
    'Human-Centered Design',
    'Design Systems',
    'Cross-Functional Influence',
    'Design Mentorship'
  ];

  const leadershipSkills = [
    'Design critique and review frameworks',
    'Cross-functional alignment and facilitation',
    'Design governance and operating models',
    'Research synthesis and outcome definition',
    'Mentorship and design culture evolution',
    'Strategy and roadmap influence'
  ];

  const technicalSkills = [
    'Figma (Expert)',
    'Enterprise design systems',
    'Component architecture',
    'Semantic tokens',
    'KendoReact and ThemeBuilder',
    'React Native Paper',
    'Storybook and Frontify',
    'WCAG AA accessibility'
  ];

  const cares = [
    'Building high-performing design cultures where critique, standards, and mentorship help teams do better work together',
    'Simplifying complex enterprise workflows so people can make confident decisions in high-volume, high-pressure contexts',
    'Making design governance feel enabling rather than constraining by pairing clear standards with practical contribution paths'
  ];

  const experience = [
    {
      title: 'Senior UI Designer',
      company: 'Wheels, Inc.',
      period: 'Apr 2024 – Present',
      highlights: [
        'Set UX direction and design system governance across the merged Wheels, Donlen, and LeasePlan USA product ecosystem',
        'Unified three companies under a single design language, delivering 60+ KendoReact components and a feature-rich data grid',
        'Operated as design authority across product, marketing, engineering, and external agency partners without direct authority',
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
      <h1>I set UX strategy and serve as design authority for complex, multi-team enterprise products.</h1>
      <p className="about-subtitle">
        Senior/Lead UX Designer with 8+ years of experience moving from individual contributor to
        design leader and design systems owner.
      </p>

      <p>
        I help enterprise product organizations make better design decisions at scale. My work sits
        where strategy, product complexity, and system governance meet: clarifying the experience
        direction, aligning stakeholders around tradeoffs, and giving teams standards they can use
        without slowing down delivery.
      </p>
      <p>
        At Wheels, Inc., I govern a design system that unifies three merged companies under a single
        visual and interaction language across web and mobile. That includes owning system boundaries,
        shaping contribution models, documenting design rationale, and mentoring designers through
        adoption so quality becomes a shared practice rather than a late-stage review.
      </p>
      <p>
        I am targeting Lead UX Designer and Principal Designer roles in enterprise tech where UX
        strategy, cross-functional influence, design systems, and design culture matter. I am open to
        remote or hybrid roles with a Chicagoland preference, targeting $130–155k.
      </p>

      <a
        href="/files/JonesDavy_Resume.doc"
        download="JonesDavy_Resume.doc"
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
        {competencies.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      <h2>Leadership & Strategy</h2>
      <div className="skills-grid">
        {leadershipSkills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      <h2>Technical Craft</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

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
