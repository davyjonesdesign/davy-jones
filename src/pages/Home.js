import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import aiDesignWorkflowIcon from '../assets/ai-design-workflow.svg';
import designToDevCollabIcon from '../assets/design-to-dev-collab.svg';
import enterpriseDesignSystemsIcon from '../assets/enterprise-design-systems.svg';

const featuredAliases = ['new-driver-experience-menu', 'fleetview-4-0', 'wheels', 'new-driver-experience'];
const featuredProjects = featuredAliases
  .map((alias) => portfolioData.find((project) => project.alias === alias))
  .filter(Boolean);

const focusAreas = [
  {
    label: 'Design-to-development collaboration',
    description: 'Make the path from design to implementation clear.',
    icon: designToDevCollabIcon
  },
  {
    label: 'AI design workflows',
    description: 'Use AI to explore, prototype, and improve decisions faster.',
    icon: aiDesignWorkflowIcon
  },
  {
    label: 'Enterprise design systems',
    description: 'Create accessible patterns that scale across products and teams.',
    icon: enterpriseDesignSystemsIcon
  }
];

const workingSteps = [
  ['Discover & define', 'Understand people, goals, workflow, and constraints.'],
  ['Prototype', 'Test ideas early in Figma, code, or both.'],
  ['Build', 'Work with engineering through handoff + QA.'],
  ['Improve', 'Learn, refine, and share what works.']
];

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <p className="eyebrow">Current role: Senior UI Designer</p>
        <h1>From complex problems to scalable digital products.</h1>
        <p className="landing-intro">
          I design clear, accessible products and the systems that help teams build them. I work with Product, Engineering, Research, and Operations to turn complex problems into usable experiences.
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

      <hr className="section-divider" />

      <section aria-labelledby="core-focus" className="landing-highlights focus-section">
        <h2 id="core-focus" className="section-heading">Core Focus Areas</h2>
        {focusAreas.map((area) => (
          <div className="focus-area" key={area.label}>
            <span
              className="focus-area-icon"
              aria-hidden="true"
              style={{ '--focus-icon': `url(${area.icon})` }}
            />
            <span className="highlight-stat">{area.label}</span>
            <p>{area.description}</p>
          </div>
        ))}
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="how-i-work" className="workflow-section">
        <div className="landing-highlights process-section">
          <h2 id="how-i-work" className="section-heading">How I Work</h2>
          <div className="process-track">
            {workingSteps.map(([title, text], index) => (
              <div className="process-step" key={title}>
                <span className="process-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="highlight-stat">{title}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div aria-labelledby="ai-workflows" className="ai-section highlight-card highlight-card-featured">
          <span className="eyebrow">AI-enabled design practice</span>
          <h3 id="ai-workflows" className="section-heading">AI supports my process. It does not replace it.</h3>
          <p>
            I use Claude, GitHub Copilot, Lovable, VS Code, and Figma MCP to accelerate rapid prototyping, documentation, context engineering, and design-to-development workflows. The value is not simply generating screens; it is improving speed, clarity, collaboration, and the quality of decisions teams can make before production.
          </p>
          <ul className="highlight-tags" aria-label="AI workflow themes">
            {['Claude', 'GitHub Copilot', 'Lovable', 'VS Code', 'Figma MCP', 'AI DesignOps', 'Rapid prototyping', 'Documentation', 'Context engineering'].map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="featured-work" className="featured-work-section">
        <div className="section-header-row">
          <h2 id="featured-work" className="section-heading">Selected Work</h2>
          <Link to="/work" className="nav-link">All work</Link>
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
