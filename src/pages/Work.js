import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Work = () => {
  return (
    <div className="work container">
      <h1>Work</h1>

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
                alt={project.title}
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