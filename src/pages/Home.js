import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <h1>Building Design Systems That Scale</h1>
        <p className="landing-intro">
          Senior UX/UI Designer with 8+ years bridging design and development. 
          I create accessible, scalable design systems that accelerate teams and 
          unify digital experiences across platforms.
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
          <span className="highlight-stat">50%</span>
          <h3>Faster Implementation</h3>
          <p>
            Cut developer implementation time in half through systematic 
            component documentation and reusable design patterns.
          </p>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">60+</span>
          <h3>Components Delivered</h3>
          <p>
            Built comprehensive KendoReact design system unifying three 
            merged companies under a single design language.
          </p>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">WCAG AA</span>
          <h3>Accessibility First</h3>
          <p>
            Achieved WCAG AA compliance across all core components, 
            embedding accessibility into every design decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;