import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const ProjectImage = ({ src, alt, caption, gallery = false }) => (
  <div>
    <ImageWithSkeleton
      src={src}
      alt={alt}
      className={`project-section-image${gallery ? ' project-gallery-image' : ''}`}
    />
    {caption && <p className="image-caption">{caption}</p>}
  </div>
);

const ProcessStep = ({ index, children }) => (
  <li className="project-process-step">
    <span className="project-process-number" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="project-process-content">{children}</div>
  </li>
);

const ProjectDetail = () => {
  const { alias } = useParams();
  const project = portfolioData.find((item) => item.alias === alias);

  if (!project) {
    return (
      <div className="project-detail container">
        <p>Project not found</p>
        <Link to="/work" className="back-link">
          <ArrowLeft size={18} />
          Back to work
        </Link>
      </div>
    );
  }

  const work = project.work || project.myRole || project.discovery || project.method || project.objectives;
  const results = project.results || project.impact || project.outcome;
  const supportingImages = [
    {src: project.overviewImg, caption: project.overviewCap},
    {src: project.methodImg, caption: project.methodCap},
    {src: project.outcomeImg, caption: project.outcomeCap}
  ].filter((image, index, images) => image.src && images.findIndex((item) => item.src === image.src) === index);
  const supportingFrames = [
    {src: project.overviewFrame, caption: project.overviewCap},
    {src: project.methodFrame, caption: project.methodCap},
    {src: project.outcomeFrame, caption: project.outcomeCap}
  ].filter((frame) => frame.src);

  return (
    <div className="project-detail container">
      <Link to="/work" className="back-link">
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <article>
        <header>
          <h1>{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <p className="project-detail-duration">{project.duration}</p>
          <div className="project-tags">
            {project.tag.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < project.tag.length - 1 && ' ·'}
              </span>
            ))}
          </div>
        </header>

        {project.mainImg && (
          <ProjectImage
            src={project.mainImg}
            alt={project.title}
            caption={project.mainCap}
          />
        )}

        {project.challenge && (
          <>
            <hr />
            <section>
              <h2>Problem</h2>
              <p>{project.challenge}</p>
            </section>
          </>
        )}

        {work && (
          <>
            <hr />
            <section>
              <h2>{project.work ? 'What I did' : 'Approach'}</h2>
              {Array.isArray(work) ? (
                <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>{work}</p>
              )}
            </section>
          </>
        )}

        {results && (
          <>
            <hr />
            <section>
              <h2>{project.results ? 'Result' : 'Outcome'}</h2>
              {Array.isArray(results) ? (
                <ul>{results.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>{results}</p>
              )}
            </section>
          </>
        )}

        {!project.gallery && (supportingImages.length > 0 || supportingFrames.length > 0) && (
          <>
            <hr />
            <section>
              <h2>Process</h2>
              <ol className="project-process-timeline">
                {supportingImages.map((image, index) => (
                  <ProcessStep key={`image-${index}-${image.src}`} index={index}>
                    <ProjectImage
                      src={image.src}
                      alt={`${project.title} process visual`}
                      caption={image.caption}
                      gallery
                    />
                  </ProcessStep>
                ))}
                {supportingFrames.map((frame, index) => (
                  <ProcessStep key={`frame-${index}-${frame.src}`} index={supportingImages.length + index}>
                    <iframe
                      className="project-process-frame"
                      src={frame.src}
                      width="100%"
                      height="500"
                      title={`${project.title} process reference`}
                    />
                    {frame.caption && <p className="image-caption">{frame.caption}</p>}
                  </ProcessStep>
                ))}
              </ol>
            </section>
          </>
        )}

        {project.gallery && (
          <>
            <hr />
            <section>
              <h2>Process</h2>
              <ol className="project-process-timeline">
                {project.gallery.map((image, index) => (
                  <ProcessStep key={`gallery-${index}-${image.src}`} index={index}>
                    <ProjectImage
                      src={image.src}
                      alt={image.caption}
                      caption={image.caption}
                      gallery
                    />
                    {image.link && (
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
                        {image.linkDescription || 'Open related prototype'}
                      </a>
                    )}
                  </ProcessStep>
                ))}
              </ol>
            </section>
          </>
        )}

        {project.tools && (
          <>
            <hr />
            <section>
              <h2>Tools</h2>
              <p>{project.tools.join(' · ')}</p>
            </section>
          </>
        )}

        {project.links && project.links.length > 0 && (
          <>
            <hr />
            <section>
              <h2>Links</h2>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.link}
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