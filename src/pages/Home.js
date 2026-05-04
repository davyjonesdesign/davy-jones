import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <h1>I Build Enterprise Design Systems That Scale Product Decisions</h1>
        <p className="landing-intro">
          Staff-level Design Systems and UX Engineer with 8+ years leading system governance,
          engineering partnership, and AI-assisted workflow design. I help product organizations
          move faster with shared standards, implementation-ready components, and decision frameworks
          teams can trust.
        </p>
        <div className="landing-cta">
          <Link to="/work" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="landing-highlights">
        <div className="highlight-card">
          <span className="highlight-stat">Proof</span>
          <h3>System Scale</h3>
          <ul>
            <li>Unified 3 merged companies under one design language.</li>
            <li>Established governance used across product, marketing, and agency teams.</li>
            <li>Created one source of truth spanning web and mobile implementation.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Proof</span>
          <h3>Component Depth</h3>
          <ul>
            <li>Built and governed 60+ production-ready components.</li>
            <li>Maintained parity across Figma, ThemeBuilder, and Storybook.</li>
            <li>Reduced implementation ambiguity and design-dev churn.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Proof</span>
          <h3>Cross-Org Influence</h3>
          <ul>
            <li>Partnered with engineering and product without direct authority.</li>
            <li>Set reusable standards that improved delivery consistency.</li>
            <li>Applied AI-assisted workflows to accelerate prototyping and handoff.</li>
          </ul>
        </div>
      </div>

      <div className="landing-highlights">
        <div className="highlight-card">
          <span className="highlight-stat">Featured</span>
          <h3>Wheels Unified Design System</h3>
          <p>
            Owned governance and evolution of a cross-platform enterprise system that unified
            three companies and improved delivery speed through reusable patterns and documentation.
          </p>
          <Link to="/work/wheels" className="btn btn-secondary">
            View Case Study
          </Link>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Featured</span>
          <h3>Fleet Redeployment Hub</h3>
          <p>
            Designed an AI-assisted enterprise workflow with natural language interaction patterns,
            confidence-aware states, and bulk-action flows for high-volume fleet operations.
          </p>
          <Link to="/work/fleet-redeployment" className="btn btn-secondary">
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
