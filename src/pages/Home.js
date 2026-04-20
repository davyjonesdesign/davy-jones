import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <h1>Design Systems That Hold the Organization Together</h1>
        <p className="landing-intro">
          Staff-level UX/UI Designer with 8+ years governing enterprise design systems, 
          shipping production interfaces, and setting the quality bar across 
          cross-functional organizations. Based in Valparaiso, IN, open to remote.
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
          <span className="highlight-stat">3 → 1</span>
          <h3>Companies Unified</h3>
          <p>
            Governed a design system merging three organizations, Wheels, 
            Donlen, and LeasePlan USA, under a single visual and interaction 
            language across web and mobile.
          </p>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">60+</span>
          <h3>Production Components</h3>
          <p>
            Built and maintained a KendoReact + Figma component library 
            from scratch, creating a single source of truth that reduced 
            design-dev churn across multiple engineering teams.
          </p>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Staff</span>
          <h3>Level Influence</h3>
          <p>
            Operating without direct authority across product, engineering, 
            marketing, and external agencies, holding design standards through 
            principled rationale, documentation, and credibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
