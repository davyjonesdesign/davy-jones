import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const featuredAliases = ['wheels', 'new-driver-experience', 'fleet-redeployment'];
const featuredProjects = featuredAliases
  .map((alias) => portfolioData.find((project) => project.alias === alias))
  .filter(Boolean);

const Home = () => {
  return (
    <div className="landing container">
      <div className="landing-hero">
        <p className="eyebrow">Lead UX Designer · Principal-Scope Product Strategy · Design Systems</p>
        <h1>UX Strategy &amp; Design Leadership</h1>
        <p className="landing-intro">
          Scaling design excellence across complex organizations. I set UX direction, serve as design authority, and turn ambiguous enterprise workflows into clear product experiences that teams can ship and maintain.
        </p>
        <p className="landing-proof">
          My work uses design systems as a strategic asset, mentorship as a multiplier, and accessibility as a foundation for products used by expert teams in high-pressure environments.
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

      <section aria-labelledby="leadership-proof" className="landing-highlights">
        <h2 id="leadership-proof" className="section-heading">Design Leadership</h2>
        <div className="highlight-card">
          <span className="highlight-stat">Strategy</span>
          <h3>Set direction across ambiguity</h3>
          <ul>
            <li>Translate complex operational goals into product experience strategy.</li>
            <li>Define outcomes, principles, and decision criteria before interface execution.</li>
            <li>Use research and workflow evidence to move stakeholders toward shared priorities.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Authority</span>
          <h3>Raise the bar without direct authority</h3>
          <ul>
            <li>Govern design quality across product, engineering, marketing, and agency teams.</li>
            <li>Make standards feel enabling by pairing guardrails with practical implementation paths.</li>
            <li>Use critique, documentation, and facilitation to make better decisions repeatable.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Scale</span>
          <h3>Build systems teams can trust</h3>
          <ul>
            <li>Unified three merged companies under one design language.</li>
            <li>Built and governed 60+ production-ready components with WCAG AA standards.</li>
            <li>Reduced implementation time by 50% through reusable patterns and documentation.</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="featured-work" className="featured-work-section">
        <div className="section-header-row">
          <h2 id="featured-work" className="section-heading">Anchor Case Studies</h2>
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
