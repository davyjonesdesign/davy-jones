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
        <p className="eyebrow">Lead UX Designer · Principled Systems · Practical Product Clarity</p>
        <h1>Principled UX for Messy Enterprise Work</h1>
        <p className="landing-intro">
          I help teams make durable product decisions when the work is complex, political, and easy to overcomplicate. My strength is turning ambiguity into honest, usable systems people can actually ship.
        </p>
        <p className="landing-proof">
          The thread through my work is simple: define the principles, respect the constraints, build the clearest path forward, and keep the experience accountable to the people who rely on it.
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
        <h2 id="leadership-proof" className="section-heading">How I Work</h2>
        <div className="highlight-card">
          <span className="highlight-stat">Clarity</span>
          <h3>Name the real problem</h3>
          <ul>
            <li>Separate symptoms from systems so teams solve the right thing.</li>
            <li>Use principles and decision criteria before jumping into screens.</li>
            <li>Ground debates in workflow evidence, not taste or hierarchy.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Conviction</span>
          <h3>Hold the line without posturing</h3>
          <ul>
            <li>Protect quality across product, engineering, marketing, and agency teams.</li>
            <li>Pair firm standards with practical paths so governance feels useful.</li>
            <li>Use critique, documentation, and facilitation to make good decisions repeatable.</li>
          </ul>
        </div>

        <div className="highlight-card">
          <span className="highlight-stat">Stewardship</span>
          <h3>Build systems that earn trust</h3>
          <ul>
            <li>Unified three merged companies under one design language without pretending the constraints were simple.</li>
            <li>Built and governed 60+ production-ready components with WCAG AA expectations baked in.</li>
            <li>Reduced implementation time by 50% through reusable patterns, documentation, and fewer repeated decisions.</li>
          </ul>
        </div>
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
