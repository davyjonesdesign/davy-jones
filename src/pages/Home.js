import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const featuredAliases = ['wheels', 'new-driver-experience', 'fleet-redeployment'];
const featuredProjects = featuredAliases
  .map((alias) => portfolioData.find((project) => project.alias === alias))
  .filter(Boolean);

const focusAreas = [
  {
    label: 'Product Discovery',
    title: 'Understand the real problem',
    items: [
      'Work with stakeholders to understand business goals, users, and operational constraints.',
      'Validate assumptions before teams commit to heavy delivery paths.',
      'Turn messy inputs into practical, testable product direction.'
    ]
  },
  {
    label: 'Enterprise Design Systems',
    title: 'Scale decisions across teams',
    items: [
      'Create reusable patterns that improve consistency, accessibility, and engineering efficiency.',
      'Connect Figma, tokens, ThemeBuilder, Storybook, and documentation into shared ways of working.',
      'Protect system quality while leaving room for legitimate product needs.'
    ]
  },
  {
    label: 'AI-Assisted Product Development',
    title: 'Prototype and clarify faster',
    items: [
      'Use Claude, GitHub Copilot, Lovable, VS Code, and Figma MCP to accelerate exploration.',
      'Improve documentation, context engineering, and design-to-development workflows.',
      'Treat AI as a collaborative accelerator, not a replacement for product judgment.'
    ]
  },
  {
    label: 'Design-to-Development Collaboration',
    title: 'Reduce ambiguity before build',
    items: [
      'Document interaction models, edge cases, implementation guidance, and reusable patterns.',
      'Partner closely with engineers through reviews, QA, and system-level decisions.',
      'Help teams move from ideas to production with fewer interpretation gaps.'
    ]
  }
];

const workingSteps = [
  ['Discover', 'Understand users, stakeholders, business goals, and operational workflows.'],
  ['Define', 'Clarify requirements, identify constraints, simplify complexity, and establish success criteria.'],
  ['Prototype', 'Use Figma, Lovable, AI tools, and rapid iteration to validate ideas early.'],
  ['Build', 'Partner with engineering through documentation, design systems, implementation reviews, and ongoing collaboration.'],
  ['Improve', 'Measure, refine, document, and scale successful solutions across products.']
];

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <p className="eyebrow">Senior UI Designer</p>
        <h1>Senior UI Designer</h1>
        <p className="landing-intro">
          Specializing in product discovery, enterprise design systems, AI-assisted prototyping, and design-to-development collaboration.
        </p>
        <p className="landing-proof">
          I partner with Product, Engineering, Research, and Operations to turn complex business problems into scalable digital products. My work spans UX strategy, rapid prototyping, enterprise design systems, accessibility, and AI-assisted product development—helping teams reduce ambiguity and move from ideas to implementation faster.
        </p>
        <p className="brand-statement">
          I help reduce ambiguity between Product, Design, and Engineering by turning complex problems into scalable systems, clear experiences, and production-ready solutions.
        </p>
        <div className="landing-cta">
          <Link to="/work" className="btn btn-primary">
            View Case Studies
          </Link>
          <Link to="/systems" className="btn btn-secondary">
            Design Systems Deep Dive
          </Link>
        </div>
      </div>

      <section aria-labelledby="core-focus" className="landing-highlights">
        <h2 id="core-focus" className="section-heading">Core Focus Areas</h2>
        {focusAreas.map((area) => (
          <div className="highlight-card" key={area.label}>
            <span className="highlight-stat">{area.label}</span>
            <h3>{area.title}</h3>
            <ul>
              {area.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="how-i-work" className="landing-highlights process-section">
        <h2 id="how-i-work" className="section-heading">How I Work</h2>
        {workingSteps.map(([title, text]) => (
          <div className="highlight-card" key={title}>
            <span className="highlight-stat">{title}</span>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="ai-workflows" className="ai-section highlight-card highlight-card-featured">
        <span className="highlight-stat">AI-enabled design practice</span>
        <h2 id="ai-workflows" className="section-heading">AI supports my process—it does not replace it.</h2>
        <p>
          I use Claude, GitHub Copilot, Lovable, VS Code, and Figma MCP to accelerate rapid prototyping, documentation, context engineering, and design-to-development workflows. The value is not simply generating screens; it is improving speed, clarity, collaboration, and the quality of decisions teams can make before production.
        </p>
        <ul className="highlight-tags" aria-label="AI workflow themes">
          {['Claude', 'GitHub Copilot', 'Lovable', 'VS Code', 'Figma MCP', 'AI DesignOps', 'Rapid prototyping', 'Documentation', 'Context engineering'].map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </section>

      <section aria-labelledby="featured-work" className="featured-work-section">
        <div className="section-header-row">
          <h2 id="featured-work" className="section-heading">Selected Work</h2>
          <Link to="/work" className="text-link">All work</Link>
        </div>
        <div className="featured-project-grid">
          {featuredProjects.map((project) => (
            <Link key={project.alias} to={`/work/${project.alias}`} className="featured-project-card">
              <div className="featured-project-image">
                <img src={project.mainImg} alt={`${project.title} thumbnail`} />
              </div>
              <div className="featured-project-body">
                <span className="highlight-stat">Featured</span>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <ul className="highlight-tags" aria-label={`${project.title} themes`}>
                  {project.tag.slice(0, 3).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
