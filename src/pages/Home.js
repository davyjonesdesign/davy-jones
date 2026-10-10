import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import aiDesignWorkflowIcon from '../assets/ai-design-workflow.svg';
import designToDevCollabIcon from '../assets/design-to-dev-collab.svg';
import enterpriseDesignSystemsIcon from '../assets/enterprise-design-systems.svg';

const featuredAliases = ['wheels', 'teaching-figma-agent-design-system', 'fleetview-4-0', 'new-driver-experience'];
const featuredProjects = featuredAliases
  .map((alias) => portfolioData.find((project) => project.alias === alias))
  .filter(Boolean);

const focusAreas = [
  {
    label: 'Design to development',
    description: 'Give engineering the component, states, and details needed to build the design.',
    icon: designToDevCollabIcon
  },
  {
    label: 'AI in the design workflow',
    description: 'Use the tools for a first pass, then check what they guessed or missed.',
    icon: aiDesignWorkflowIcon
  },
  {
    label: 'Design systems',
    description: 'Keep Figma components, implemented themes, and usage guidance connected.',
    icon: enterpriseDesignSystemsIcon
  }
];

const workingSteps = [
    ['Start with the problem', 'Look at the task, the people doing it, and what is getting in the way.'],
    ['Try it out', 'Work through the flow in Figma, code, or both.'],
    ['Check the details', 'Compare the design with the system and spell out states and edge cases.'],
    ['See what made it through', 'Review the implementation and update the screen or system where it drifted.']
];

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <p className="eyebrow">Senior UI Designer at Wheels</p>
        <h1>I work across Figma libraries, UI themes, and the code they guide.</h1>
        <p className="landing-intro">
          A lot of my work sits between Figma and the build: finding the right component, writing down how it behaves, and checking what made it through development.
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
          <h3 id="ai-workflows" className="section-heading">AI needs the system details too.</h3>
          <p>
            I use GitHub Copilot, Claude Code, Lovable, and Figma's tools on real design work. They can get a first pass into code, but they also guess when a component or guideline is missing. I check the output, then update the system where the same gap keeps showing up. For Figma Make, that means pointing to the KendoReact packages and theme that are actually installed.
          </p>
          <ul className="highlight-tags" aria-label="AI workflow themes">
            {['Figma Make', 'Figma agents', 'GitHub Copilot', 'Figma MCP', 'KendoReact', 'ThemeBuilder', 'Lovable', 'Design system guidance'].map((tag) => <li key={tag}>{tag}</li>)}
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
