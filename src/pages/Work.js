import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Work = () => {
  return (
    <div className="work container">
      <p className="eyebrow">Case Studies</p>
      <h1>Product Thinking, Systems Thinking & Design-to-Development Collaboration</h1>
      <p className="work-intro">
        Case studies focused on the product story behind the interface: the business problem, discovery work, cross-functional approach, and outcomes that improved usability, consistency, scalability, accessibility, and delivery speed.
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
