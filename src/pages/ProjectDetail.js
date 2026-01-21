import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProjectDetail = () => {
  const { alias } = useParams();
  const project = portfolioData.find(p => p.alias === alias);

  if (!project) {
    return (
      <div className="project-detail container">
        <p>Project not found</p>
        <Link to="/work" className="back-link">
          ← Back to work
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail container">
      <Link to="/work" className="back-link">
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <article>
        {/* Header */}
        <header>
          <h1>{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <p className="project-detail-duration">{project.duration}</p>
          
          <div className="project-tags">
            {project.tag.map((tag, i) => (
              <span key={i}>
                {tag}
                {i < project.tag.length - 1 && ' ·'}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        {project.mainImg && (
          <div>
            <img 
              src={project.mainImg} 
              alt={project.title}
              className="project-hero-image"
            />
            {project.mainCap && (
              <p className="image-caption">{project.mainCap}</p>
            )}
          </div>
        )}

        <hr />

        {/* Challenge */}
        {project.challenge && (
          <>
            <section>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </section>
            <hr />
          </>
        )}

        {/* Objectives (for side projects) */}
        {project.objectives && (
          <>
            <section>
              <h2>Objectives</h2>
              <ul>
                {project.objectives.map((obj, idx) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ul>
            </section>
            <hr />
          </>
        )}

        {/* Overview (for side projects) */}
        {project.overview && (
          <>
            <section>
              <h2>Overview</h2>
              {project.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              
              {/* Overview Image/Frame */}
              {project.overviewImg && (
                <div>
                  <img 
                    src={project.overviewImg} 
                    alt="Overview"
                    className="project-section-image"
                  />
                  {project.overviewCap && (
                    <p className="image-caption">{project.overviewCap}</p>
                  )}
                </div>
              )}
              {project.overviewFrame && (
                <div>
                  <iframe
                    src={project.overviewFrame}
                    width="100%"
                    height="500"
                    style={{border: 'none', borderRadius: '8px'}}
                    title="Overview"
                  />
                  {project.overviewCap && (
                    <p className="image-caption">{project.overviewCap}</p>
                  )}
                </div>
              )}
            </section>
            <hr />
          </>
        )}

        {/* My Role */}
        {project.myRole && (
          <>
            <section>
              <h2>My Role</h2>
              <ul>
                {project.myRole.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </section>
            <hr />
          </>
        )}

        {/* Approach */}
        {project.approaches && (
          <>
            <section>
              <h2>Approach</h2>
              <ul>
                {project.approaches.map((approach, idx) => (
                  <li key={idx}>{approach}</li>
                ))}
              </ul>
              
              {/* Overview Image (for Wheels project) */}
              {project.overviewImg && (
                <div>
                  <img 
                    src={project.overviewImg} 
                    alt="Overview"
                    className="project-section-image"
                  />
                  {project.overviewCap && (
                    <p className="image-caption">{project.overviewCap}</p>
                  )}
                </div>
              )}
            </section>
            <hr />
          </>
        )}

        {/* Method (for side projects) */}
        {project.method && (
          <>
            <section>
              <h2>Method</h2>
              <ul>
                {project.method.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              {/* Method Image/Frame */}
              {project.methodImg && (
                <div>
                  <img 
                    src={project.methodImg} 
                    alt="Method"
                    className="project-section-image"
                  />
                  {project.methodCap && (
                    <p className="image-caption">{project.methodCap}</p>
                  )}
                </div>
              )}
              {project.methodFrame && (
                <div>
                  <iframe
                    src={project.methodFrame}
                    width="100%"
                    height="500"
                    style={{border: 'none', borderRadius: '8px'}}
                    title="Method"
                  />
                  {project.methodCap && (
                    <p className="image-caption">{project.methodCap}</p>
                  )}
                </div>
              )}
            </section>
            <hr />
          </>
        )}

        {/* Impact */}
        {project.impact && (
          <>
            <section>
              <h2>Impact</h2>
              <ul>
                {project.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              {/* Method Image (for Wheels showing implementation) */}
              {project.methodImg && (
                <div>
                  <img 
                    src={project.methodImg} 
                    alt="Implementation"
                    className="project-section-image"
                  />
                  {project.methodCap && (
                    <p className="image-caption">{project.methodCap}</p>
                  )}
                </div>
              )}
              
              {/* Outcome Image */}
              {project.outcomeImg && (
                <div>
                  <img 
                    src={project.outcomeImg} 
                    alt="Impact"
                    className="project-section-image"
                  />
                  {project.outcomeCap && (
                    <p className="image-caption">{project.outcomeCap}</p>
                  )}
                </div>
              )}
            </section>
            <hr />
          </>
        )}

        {/* Outcome (for side projects) */}
        {project.outcome && (
          <>
            <section>
              <h2>Outcome</h2>
              <ul>
                {project.outcome.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              {/* Outcome Image/Frame */}
              {project.outcomeImg && (
                <div>
                  <img 
                    src={project.outcomeImg} 
                    alt="Outcome"
                    className="project-section-image"
                  />
                  {project.outcomeCap && (
                    <p className="image-caption">{project.outcomeCap}</p>
                  )}
                </div>
              )}
              {project.outcomeFrame && (
                <div>
                  <iframe
                    src={project.outcomeFrame}
                    width="100%"
                    height="500"
                    style={{border: 'none', borderRadius: '8px'}}
                    title="Outcome"
                  />
                  {project.outcomeCap && (
                    <p className="image-caption">{project.outcomeCap}</p>
                  )}
                </div>
              )}
            </section>
            <hr />
          </>
        )}

        {/* Tools */}
        {project.tools && (
          <>
            <section>
              <h2>Tools & Technologies</h2>
              <p>{project.tools.join(' · ')}</p>
            </section>
          </>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <>
            <hr />
            <section>
              <h2>Links</h2>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
                    {link.linkDescription}
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </article>
    </div>
  );
};

export default ProjectDetail;