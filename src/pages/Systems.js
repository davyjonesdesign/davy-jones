import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Systems = () => {
  const architecture = [
    'Semantic tokens gave teams a shared language for color, type, spacing, states, and accessibility.',
    'Figma, KendoReact, ThemeBuilder, Storybook, and React Native Paper stayed aligned across web and mobile.',
    'Frameworks supported the system without becoming the source of truth for the experience.',
    'Component specs made anatomy, behavior, accessibility, and contribution rules clear.'
  ];

  const governance = [
    'Set clear boundaries for where teams could flex and where consistency mattered.',
    'Created contribution and review criteria that let teams participate without fragmenting the system.',
    'Used documentation and critique to build alignment across three merged companies.',
    'Treated governance as stewardship: useful defaults, examples, and clear decisions.'
  ];

  const outcomes = [
    'Cut development time by up to 50% through reusable patterns and clearer handoff.',
    'Built a 60+ component KendoReact library with shared interaction standards.',
    'Made WCAG AA accessibility part of the system foundation.',
    'Gave product, marketing, and agency teams one source of truth.'
  ];

  const craft = [
    'Semantic tokens for color, state, elevation, type, and spacing',
    'Component specs for anatomy, states, edge cases, accessibility, and engineering',
    'Contribution guidance for evolving patterns without creating one-off UI',
    'Frontify documentation connecting design intent to implementation'
  ];

  return (
    <div className="project-detail systems-page container">
      <p className="eyebrow">Design Systems & Governance</p>
      <h1>Design systems that help teams move together.</h1>
      <p className="project-detail-subtitle">
        How I helped bring three enterprise organizations together through shared patterns, clear governance, and better design-to-development workflows.
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
        <h2>The problem</h2>
        <p>
          Wheels, Donlen, and LeasePlan USA came together with different UI histories and ways of working. The challenge was to create shared direction without pretending every team had the same needs.
        </p>
      </section>

      <hr />

      <section>
        <h2>How it worked</h2>
        <ul>
          {architecture.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>Governance</h2>
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
        <h2>The details mattered</h2>
        <p>
          The system worked because the details were connected to real decisions. Each pattern had enough structure for engineering and enough context for teams to know when to use it.
        </p>
        <ul>
          {craft.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <hr />

      <section>
        <h2>What I learned</h2>
        <p>
          The work was never just about the component count. It was about giving teams a shared language and enough trust to move faster without lowering the bar.
        </p>
      </section>
    </div>
  );
};

export default Systems;
