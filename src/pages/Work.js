import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Work = () => {
  return (
    <div className="work container">
      <p className="eyebrow">Case Studies</p>
      <h1>Enterprise UX, Design Systems & Honest Product Decisions</h1>
      <p className="work-intro">
        A mix of enterprise systems work, product strategy, and self-directed projects. The common thread is principled decision-making: clarifying the work, naming the tradeoffs, and making useful things that can survive real constraints.
      </p>

      <div className="project-list">
        {portfolioData.map((project, idx) => (
          <Link
            key={idx}
            to={`/work/${project.alias}`}
            className="project-item"
          >
            <div className="project-thumbnail">
              <img
                src={project.mainImg}
                alt={`${project.title} - ${project.subtitle || 'project screenshot'}`}
              />
            </div>
            <article className="project-content">
              <h2>{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-duration">{project.duration}</p>

              <div className="project-tags">
                {project.tag.map((tag, i) => (
                  <span key={i}>
                    {tag}
                    {i < project.tag.length - 1 && ' ·'}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
