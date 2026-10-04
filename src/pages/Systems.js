import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Systems = () => {
  const architecture = [
    'Semantic tokens gave teams a shared way to talk about color, type, spacing, component states, and accessibility.',
    'Figma, KendoReact, ThemeBuilder, and Storybook each held part of the picture. Keeping design and implementation aligned took active work.',
    'React Native Paper gave the mobile system a starting point. We still had to adapt it to our products and accessibility needs.',
    'Component specs covered anatomy, behavior, accessibility, and what engineers needed to know.'
  ];

  const governance = [
    'Set boundaries for where teams could adjust a pattern and where shared behavior mattered.',
    'Wrote contribution and review criteria so changes had a path into the shared system instead of becoming one-off UI.',
    'Worked with teams across the merged companies to document decisions and review patterns.',
    'Governance gave teams useful defaults and a place to take edge cases.'
  ];

  const outcomes = [
    'Built reusable KendoReact patterns, including a data grid, and documented how to use them.',
    'Worked accessibility requirements into design tokens and core component decisions.',
    'Connected the Figma library, ThemeBuilder, Storybook, and Frontify guidance so teams could check the design and implementation together.',
    'Gave product, marketing, and agency teams shared components and a place to check how they should work.'
  ];

  const craft = [
    'Semantic tokens for color, state, elevation, type, and spacing',
    'Component specs for anatomy, states, edge cases, accessibility, and implementation',
    'Contribution guidance for evolving shared patterns without creating one-off UI',
    'Frontify documentation that connected design intent to the implemented theme'
  ];

  return (
    <div className="project-detail systems-page container">
      <p className="eyebrow">Design Systems & Governance</p>
      <h1>Building a shared design system after a merger.</h1>
      <p className="project-detail-subtitle">
        Wheels, Donlen, and LeasePlan USA came together with different UI histories. I worked on the components, guidance, and handoff that helped teams use a shared system without pretending every product had the same needs.
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
          Wheels, Donlen, and LeasePlan USA came together with different components, tools, and ways of working. We needed shared patterns, but the teams still had different product needs. The work was figuring out what belonged in the system and where a product needed room to differ.
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
          The component count wasn't the hard part. The hard part was keeping Figma, ThemeBuilder, and Storybook close enough that a design decision could make it into the build. The system still needed work, but the source and the handoff were clearer.
        </p>
      </section>
    </div>
  );
};

export default Systems;
