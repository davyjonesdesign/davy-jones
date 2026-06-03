import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Systems = () => {
  const architecture = [
    'Semantic tokens defined the shared language for color, typography, spacing, states, and accessibility decisions before teams touched product-specific UI.',
    'Web and mobile parity connected Figma, KendoReact, ThemeBuilder, Storybook, and React Native Paper so teams could make the same decision once and apply it across surfaces.',
    'A bridge approach let product teams use KendoReact and React Native Paper without making framework defaults the source of truth for the user experience.',
    'Component specs documented anatomy, behavior, accessibility requirements, contribution status, and when teams should extend a pattern versus request a new one.'
  ];

  const governance = [
    'Created system boundaries that clarified where teams could flex and where consistency was non-negotiable.',
    'Established contribution and review criteria so product, engineering, marketing, and external partners could participate without fragmenting the system.',
    'Used documentation, critique, and principled design rationale to make governance stick across three merged companies without direct reporting authority.',
    'Treated governance as enablement: clear defaults, reusable examples, and decision frameworks that reduced debate instead of adding bureaucracy.'
  ];

  const outcomes = [
    'Reduced development time by 50% through reusable component patterns, implementation-ready documentation, and better design-development parity.',
    'Scaled a 60+ component KendoReact library with a feature-rich data grid and shared interaction standards.',
    'Embedded WCAG AA accessibility at the system level so compliance became a reusable foundation rather than a late-stage project task.',
    'Drove adoption across product, marketing, and external agency partners by giving teams one source of truth for design and implementation decisions.'
  ];

  const craft = [
    'Token structures for semantic color, state, elevation, typography, and spacing decisions',
    'Component specs covering anatomy, usage rules, states, edge cases, accessibility, and engineering notes',
    'Contribution documentation for proposing, reviewing, and evolving patterns without creating one-off UI',
    'Frontify guidance that connected design intent, Figma usage, and implementation expectations'
  ];

  return (
    <div className="project-detail systems-page container">
      <p className="eyebrow">Design Systems & Governance</p>
      <h1>UI.wheels: Scaling Design Quality Across Three Enterprise Organizations</h1>
      <p className="project-detail-subtitle">
        A design systems deep dive on architecture, governance, and the operating model behind a unified
        enterprise product ecosystem for web and mobile teams.
      </p>

      <div className="landing-cta">
        <Link to="/work/wheels" className="btn btn-primary">Read Wheels Case Study</Link>
        <a
          href="https://ui.wheels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          UI.wheels <ExternalLink size={16} />
        </a>
      </div>

      <hr />

      <section>
        <h2>The Strategic Problem</h2>
        <p>
          After Wheels, Donlen, and LeasePlan USA came together, teams were making product decisions
          through different UI models, implementation assumptions, and accessibility practices. The work
          was not just to build components; it was to create a design operating model that could align
          product, engineering, marketing, and external partners around scalable quality.
        </p>
      </section>

      <hr />

      <section>
        <h2>Architectural Decisions</h2>
        <ul>
          {architecture.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>Governance Model</h2>
        <ul>
          {governance.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>Outcomes</h2>
        <ul>
          {outcomes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>The Craft Behind the System</h2>
        <p>
          The system worked because craft details were tied to governance decisions. Every reusable
          decision needed enough structure for engineering implementation and enough rationale for teams
          to understand why the pattern existed.
        </p>
        <ul>
          {craft.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>Design Leadership Takeaway</h2>
        <p>
          The most important design systems work was not the component count. It was creating the trust,
          language, and decision infrastructure that let multiple teams move faster while raising the bar
          for accessibility, consistency, and enterprise product quality.
        </p>
      </section>
    </div>
  );
};

export default Systems;
