export const portfolioData = [
  // CENTERPIECE - Wheels Unified Design System
  {
    alias: 'wheels',
    title: 'Wheels Unified Design System',
    subtitle: '0-1 design system governance across Wheels, Donlen, and LeasePlan USA',
    duration: '2023 - Present',

    tag: [
      'Design System',
      'Leadership',
      'React',
      'Mobile',
      'Accessibility'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-de.gif?raw=true',
    mainCap: 'Unified design system powering driver experience across web and mobile platforms',

    // Recruiter-focused structure
    challenge:
      'Following the merger of Wheels, Donlen, and LeasePlan USA, product teams were shipping through three competing UI models with no system governance, no shared contribution rules, and no reliable design-to-code parity. The risk was organizational: inconsistent experiences, slower delivery, accessibility gaps, and repeated implementation decisions across teams. The business needed a system-level operating model that could align product, engineering, marketing, and agency partners while still supporting product-specific needs.',

    myRole: [
      'Design System Governor: Owned system integrity, boundaries, and evolution across design, engineering, marketing, and external agency partners',
      'Governance Model Author: Defined where flexibility was allowed and where it was not, and held that line through principled, documented design rationale',
      'Bridge between design and engineering: Ensured 1:1 parity between Figma, ThemeBuilder, and Storybook across KendoReact and React Native Paper',
      'Documentation Lead: Translated system intent into usage principles, decision frameworks, and contribution guidelines teams could follow independently',
      'Mentor and culture builder: Guided designers through Figma migration and system adoption, raising UX maturity across the organization'
    ],

    approaches: [
      'Migrated all designers to Figma and established contribution models for scalable growth',
      'Created Design System 1.0: Flexible Figma foundation to guide future implementations',
      'Built KendoReact System: 60+ components with feature-rich data grid, ensuring parity across Figma, ThemeBuilder, and Storybook',
      'Adapted React Native Paper System: Mobile-first design aligned with WCAG accessibility standards',
      'Developed centralized asset libraries: Icon and vehicle image libraries for consistency',
      'Documented comprehensive guidelines in Frontify with clear governance models'
    ],

    overviewImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-figcomp.jpg?raw=true',
    overviewCap: 'System architecture showing unified approach across frameworks',

    methodImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/kendo-tb.jpg?raw=true',
    methodCap: 'ThemeBuilder implementation ensuring design-development parity',

    leadershipImpact: [
      'Led and influenced product, engineering, marketing, and external agency partners across three merged companies without relying on direct reporting authority',
      'Changed the operating model from local UI decisions to governed, system-level decision making with documented contribution rules and review criteria',
      'Mentored designers through Figma migration, component adoption, and system rationale so design quality could scale beyond one owner',
      'Made design system contribution explicit in product delivery by connecting every reusable component to Figma, ThemeBuilder, Storybook, and Frontify documentation'
    ],

    impact: [
      'Replaced fragmented legacy UI practices with a single enterprise design system spanning three merged organizations and multiple product surfaces',
      'Reduced implementation time by 50% by standardizing reusable component patterns, documentation, and decision frameworks engineering teams could apply directly',
      'Established system governance (boundaries, contribution workflow, and review criteria) that reduced off-system variance across product, marketing, and external agencies',
      'Embedded accessibility as a system property, reaching WCAG AA standards across core components instead of treating compliance as a late-stage project task',
      'Improved delivery predictability by creating parity across Figma, ThemeBuilder, and Storybook, lowering design-dev churn and post-release UI defects',
      'Raised cross-org UX maturity by giving teams a shared language for component decisions, scaling influence beyond any single squad'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/wass-documentation.jpg?raw=true',
    outcomeCap: 'Frontify documentation serving as single source of truth across teams',

    tools: [
      'Figma',
      'KendoReact',
      'React Native Paper',
      'Kendo ThemeBuilder',
      'Storybook',
      'Frontify'
    ],

    links: [
      {
        link: 'https://callstack.github.io/react-native-paper/',
        linkDescription: 'React Native Paper Framework'
      },
      {
        link: 'https://www.telerik.com/kendo-react-ui',
        linkDescription: 'Kendo React UI Framework'
      },
      {
        link: 'https://www.telerik.com/themebuilder',
        linkDescription: 'Kendo ThemeBuilder'
      }
    ]
  },


  {
    alias: 'new-driver-experience',
    title: 'New Driver Experience',
    subtitle: 'Research-led maintenance redesign for fleet managers and drivers, launching July 20, 2025',
    duration: 'Launch: July 20, 2025',

    tag: [
      'UX Strategy',
      'Product Ownership',
      'Mentorship',
      'Design System',
      'Enterprise'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-figcomp.jpg?raw=true',
    mainCap: 'New Driver Experience patterns grounded in the Wheels design system and enterprise workflow research',

    challenge:
      'Drivers were not staying compliant with preventative maintenance because responsibilities, timing, and next actions were unclear. The redesign reframed maintenance as part of the broader vehicle lifecycle, giving drivers and fleet teams a clearer path from notification to task completion.',

    myRole: [
      'UX lead from discovery through production: served as design authority for research synthesis, interaction design, validation, and implementation alignment',
      'UX strategist: translated onboarding pain points into product principles, journey priorities, and measurable experience outcomes',
      'Cross-functional facilitator: aligned product, engineering, operations, and driver services teams around maintenance responsibility, compliance, and support outcomes',
      'Design mentor: guided peer designers through critique, design rationale, and system-based pattern selection',
      'Design system contributor: identified onboarding components and states that could be reused across driver and fleet management workflows'
    ],

    approaches: [
      'Conducted multiple rounds of research directly with drivers to identify where maintenance expectations, error recovery, and completion requirements broke down',
      'Mapped preventative maintenance task flows, information architecture, status states, error states, and support escalation paths across the DriverView maintenance section',
      'Defined interaction patterns for progressive maintenance guidance, status visibility, document readiness, and support handoff',
      'Used design critiques to pressure-test hierarchy, messaging, and edge cases with product and engineering partners',
      'Used the React rebuild as a performance and scalability constraint, creating patterns that could support future connected-vehicle integrations'
    ],

    leadershipImpact: [
      'Led cross-functional alignment around an end-to-end driver journey instead of isolated screen requests',
      'Influenced product scope by shifting conversations from feature output to onboarding outcomes: clarity, confidence, and reduced avoidable support touchpoints',
      'Mentored designers on how to use critique, research synthesis, and design system rationale to defend decisions with evidence',
      'Turned product-specific onboarding work into reusable system patterns for tasks, statuses, guidance, and exception handling'
    ],

    impact: [
      'Improved maintenance task completion and compliance by making responsibility, due dates, and next steps easier to understand',
      'Reduced support tickets by clarifying maintenance responsibilities, error states, and escalation paths before drivers needed help',
      'Raised design quality through repeatable critique and review practices that made tradeoffs visible to product and engineering partners',
      'Strengthened the design system by contributing reusable patterns for maintenance flows, status communication, error handling, and task completion'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/wass-documentation.jpg?raw=true',
    outcomeCap: 'System documentation and reusable guidance patterns supported consistent onboarding delivery',

    tools: [
      'Figma',
      'Miro',
      'Frontify',
      'KendoReact',
      'Storybook'
    ],

    links: []
  },

  {
    alias: 'fleet-redeployment',
    title: 'Fleet Redeployment Hub',
    subtitle: 'Human-AI collaboration prototype for faster, confidence-aware fleet redeployment',
    duration: '2025',

    tag: [
      'Design System',
      'AI-Assisted',
      'KendoReact',
      'Enterprise',
      'Prototyping'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/veh-red-3.jpg?raw=true',
    mainCap: 'Fleet Redeployment Hub, vehicle inventory management with natural language command bar',

    challenge:
      'An enterprise fleet client needed to validate whether AI-assisted interaction patterns could reduce a multi-hour redeployment workflow into a guided, auditable experience. Existing operations depended on fragmented spreadsheets, email threads, and manual status checks, creating high cognitive load and low confidence in action outcomes. The PoC needed to prove a natural language interface could support high-volume decisions while clearly communicating intent, system state, and action confidence.',

    myRole: [
      'Solo designer on the PoC: owned all UX, UI, and design system decisions from concept through handoff-ready prototype',
      'Design-to-development bridge: translated Figma designs into KendoReact implementation using AI-assisted front-end tooling (Lovable) and VS Code',
      'AI workflow evaluator: assessed AI-generated UI implementations against design intent, establishing ground-truth corrections and quality criteria',
      'Documentation author: wrote copilot-instructions.md and component specifications enabling the engineering architect to build accurately from design output'
    ],

    approaches: [
      'Designed a four-state natural language command bar (idle, processing, results, error) that communicates AI confidence and action scope clearly',
      'Built a semantic status badge system with consistent color semantics (blue/gray/orange/red) that communicates vehicle availability at a glance across a dense inventory grid',
      'Established vehicle grid with filtering, bulk selection, and batch redeployment actions, designed for operators managing hundreds of assets',
      'Designed a side drawer for individual vehicle detail and a batch redeployment modal for multi-vehicle action confirmation',
      'Used AI-assisted tooling (Lovable + Figma REST API) to generate and evaluate front-end implementations, directly informing what AI-generated UI gets right and where it needs human correction'
    ],

    leadershipImpact: [
      'Owned UX direction as the solo designer while aligning an engineering architect and enterprise stakeholders around a compressed proof-of-concept scope',
      'Set design authority under constraints by defining what AI-assisted interaction could safely do, where confidence needed to be communicated, and how operators should recover from uncertainty',
      'Created implementation guidance and component specifications that turned prototype decisions into reusable KendoReact patterns',
      'Used AI-assisted prototyping as a facilitation tool, not a substitute for design judgment, to accelerate iteration while preserving quality'
    ],

    impact: [
      'Delivered a client-ready PoC that validated AI-assisted redeployment workflows in a single operational interface on a compressed timeline',
      'Defined natural language interaction patterns with explicit idle/processing/results/error states so operators could interpret system status and next actions quickly',
      'Designed confidence-aware communication patterns that made AI output actionable by clarifying scope, certainty, and recovery paths when errors occurred',
      'Created reusable KendoReact patterns and implementation guidance that improved engineering handoff quality and reduced interpretation risk',
      'Demonstrated that a natural language + bulk-action model can replace multi-step coordination loops with a faster, lower-friction decision flow'
    ],

    tools: [
      'Figma',
      'KendoReact',
      'Lovable',
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
      'Figma MCP',
      'React'
    ],

    links: [
      {
        link: 'https://fleet-portal-gold.vercel.app/',
        linkDescription: 'Fleet Redeployment Hub Live Prototype'
      },
      //  {
      //   link: 'https://github.com/davyjonesdesign/fleet-portal/tree/main/fleet%20portal/fleet-portal',
      //   linkDescription: 'Fleet Portal Repository'
      // }
      
    ]
  },

  {
    alias: 'budgety',
    title: 'Budgety App',
    subtitle: 'A personal finance experience that helps users build confidence through clear budgeting habits',
    duration: '2026',

    tag: [
      'UX/UI',
      'React',
      'Personal Finance',
      'Product Design',
      'Dashboard'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/budgety/budgety-cover.jpg?raw=true',
    mainCap: 'Budgety dashboard focused on monthly planning, category tracking, and savings progress',

    challenge:
      'Early-career professionals often track spending across disconnected bank apps and spreadsheets, which makes it difficult to maintain a clear monthly plan. Budgety was framed as a lightweight budgeting product that turns scattered transaction data into simple, actionable decisions users can trust.',

    myRole: [
      'Led end-to-end product design from problem framing and information architecture through high-fidelity UI and prototype flows',
      'Defined interaction patterns for recurring budgets, category overages, and bill reminders to reduce decision fatigue',
      'Built reusable UI components and states that could be implemented quickly in a React front-end',
      'Validated layout and copy direction through rapid feedback rounds with target users'
    ],

    approaches: [
      'Mapped core jobs-to-be-done: set monthly budget, monitor category burn, and adjust before overspending',
      'Designed an at-a-glance financial health model using progress bars, status chips, and positive/negative trend indicators',
      'Introduced category cards with quick actions (edit limit, pause category, add note) to keep common tasks one tap away',
      'Created onboarding and empty-state guidance to help first-time users connect accounts and set initial goals',
      'Documented responsive behaviors for mobile and desktop breakpoints to keep the experience consistent across devices'
    ],

    overviewImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/budgety/budgety-overview.jpg?raw=true',
    overviewCap: 'Overview flow from onboarding to first monthly budget setup',

    methodImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/budgety/budgety-method.jpg?raw=true',
    methodCap: 'Component and interaction system for budget categories, alerts, and editable limits',

    impact: [
      'Reduced time-to-first-budget by simplifying onboarding into a guided three-step flow',
      'Improved spending awareness with color-safe status cues and weekly trend summaries',
      'Provided a clear implementation-ready UI spec package for React development',
      'Demonstrated how simple, transparent micro-interactions can increase confidence in personal finance decisions'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/budgety/budgety-outcome.jpg?raw=true',
    outcomeCap: 'Final Budgety experience with monthly snapshot, category controls, and savings goal tracking',

    tools: [
      'Figma',
      'React',
      'Miro',
      'Notion'
    ],

    links: [
      {
        link: 'https://budgety.davyjones.me/',
        linkDescription: 'Budgety Live Demo'
      },
      {
        link: 'https://github.com/davyjonesdesign/budget-app',
        linkDescription: 'Budgety Repository'
      }
    ]
  },

  // SIDE PROJECTS - Demonstrating breadth and passion
  {
    alias: 'wiki-ui',
    title: 'Wikipedia.org UX/UI Redesign',
    subtitle: 'Self-directed mobile interface redesign emphasizing accessibility and user-centered design',
    duration: 'Winter 2023',

    tag: [
      'Self-directed',
      'UX/UI',
      'Accessibility',
      'Mobile',
      'Visual Craft'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/wikiUI/wikiUI-feature.jpg',
    mainCap: 'Mobile redesign with improved accessibility and modern design system',

    objectives: [
      'Significantly improve user experience of wikipedia.org',
      'Restructure content and simplify choices',
      'Enhance contrast and emphasize actionable items',
      'Maintain familiar functionality while modernizing interface'
    ],

    overview: [
      'Self-directed mobile interface redesign of wikipedia.org, addressing longstanding UX debt through a new design system, improved visual hierarchy, and accessibility improvements. Conducted ongoing feedback collection via social media communities to validate direction. The goal was creating a scalable design system foundation for the entire site, not just a visual refresh.'
    ],

    method: [
      'Gathered ongoing feedback from social media communities (LinkedIn, Instagram)',
      'Drew inspiration from UX best practices and modern design patterns',
      'Made search bar accessible at bottom of screen for easier thumb tapping',
      'Organized tertiary content in menu to streamline landing page',
      'Revamped iconography for consistent style',
      'Created color palette for light and dark modes prioritizing readability'
    ],

    outcome: [
      'Redesigned mobile landing screen with new menu and dark mode',
      'Created simple flows including menu interactions and mode toggling',
      'Established foundation for user feedback and iterative improvements',
      'Plan to solicit feedback through social media and implement changes'
    ],

    tools: [
      'Figma',
      'Adobe Illustrator'
    ],

    overviewFrame: 'https://mega.nz/embed/WgxGUYia#QHH4sDRX01Uqjimn9bfLMLI-qQ6_U6ewGkg7aKen_H8',
    overviewCap: 'WikiUI Design System walkthrough',

    methodFrame: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjsPEUc856jJXDK2ZiRyuWX%2FwikiUI%3Ftype%3Ddesign%26node-id%3D29%253A1017%26mode%3Ddesign%26t%3DZyLXBVIa3RZY5iUs-1',
    methodCap: 'Emerging Figma design system - WikiUI',

    outcomeImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/wikiUI/wikiUI-proto-2.gif',
    outcomeCap: 'Interactive prototype showing menu and dark mode',

    links: [
      {
        link: 'https://www.figma.com/file/jsPEUc856jJXDK2ZiRyuWX/wikiUI?type=design&node-id=0%3A1&mode=design&t=ZyLXBVIa3RZY5iUs-1',
        linkDescription: 'WikiUI Design File'
      },
      {
        link: 'https://www.figma.com/proto/jsPEUc856jJXDK2ZiRyuWX/wikiUI?page-id=0%3A1&type=design&node-id=1-43259&viewport=-1744%2C42%2C0.6&t=ee0vq9gx0gIZ5lMF-1&scaling=contain&starting-point-node-id=1%3A43259&mode=design',
        linkDescription: 'WikiUI Prototype'
      }
    ]
  },

  {
    alias: 'streamline-app',
    title: 'Streamline App',
    subtitle: 'Video streaming platform consolidating content from multiple apps, demonstrating end-to-end UX process',
    duration: 'Spring 2023',

    tag: [
      'UX Research',
      'Mobile',
      'MCAD'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/streamline/streamine-cover.jpg',
    mainCap: 'Mobile streaming app solving content fragmentation',

    objectives: [
      'Gain insights into user behavior and preferences on streaming apps',
      'Create user personas, wireframes, and prototypes based on feedback',
      'Develop streamlined user interface for mobile streaming',
      'Iterate and improve design based on user testing'
    ],

    overview: [
      'Fragmented content across streaming platforms creates user difficulty. Through research and feedback, I devised solution aggregating content from various services into one convenient platform.'
    ],

    method: [
      'Conducted survey among 20 participants to understand streaming habits and pain points',
      'Crafted user personas to empathize with needs and guide design decisions',
      'Addressed users\' primary mobile streaming context through interface sketches',
      'Mapped user flows to visualize journey requirements',
      'Iterated design in Figma refining UI and experience'
    ],

    outcome: [
      'Testing revealed preferences for darker backgrounds and simplified search',
      'Final prototype praised for simplicity and cool colors',
      'Identified areas for improvement including more research and refined approach',
      'Streamline demonstrates real-world problem-solving bringing content together'
    ],

    tools: [
      'Figma',
      'Adobe Illustrator'
    ],

    overviewImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/streamline/streamline-survey.jpg',
    overviewCap: 'Survey gathering insights from 20 potential users',

    methodImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/streamline/streamline-userflow.jpg',
    methodCap: 'Final user flow defining requirements',

    outcomeFrame: 'https://mega.nz/embed/m4BxBLBB#ycyOw7cpsrr9f_3b8lqDiKpR_p09dpRyYzbgAXFaYk8',
    outcomeCap: 'Process and outcomes presentation',

    links: [
      {
        link: 'https://www.figma.com/proto/5URMsR0axp6YLlhlDWs1OR/UX23-app-design_04-25?page-id=140%3A2090&type=design&node-id=277-9307&viewport=155%2C326%2C0.03&t=YlRa7sAgYpubjnBo-1&scaling=scale-down&starting-point-node-id=277%3A9307&mode=design',
        linkDescription: 'Project Presentation'
      },
      {
        link: 'https://www.figma.com/proto/5URMsR0axp6YLlhlDWs1OR/UX23-app-design_04-25?page-id=15%3A24&type=design&node-id=127-2287&viewport=488%2C562%2C0.17&t=8wOZSSjIYRiyCtl5-1&scaling=scale-down&starting-point-node-id=127%3A2287&mode=design',
        linkDescription: 'App Prototype'
      }
    ]
  },

  {
    alias: 'written-in-stone',
    title: 'Written in Stone App',
    subtitle: 'Full-stack capstone, interactive web app surfacing biblical geography and historical context through map-based exploration, built in Vue with Leaflet',
    duration: 'Summer 2023',

    tag: [
      'Vue',
      'Full Stack',
      'MCAD',
      'UX Research'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/mac-mockup.png',
    mainCap: 'Web application built with Vue and Leaflet',

    objectives: [
      'Surface comprehensive biblical context',
      'Enable diverse audience to independently discover contexts',
      'Foster experience deepening understanding of scripture'
    ],

    overview: [
      'Many Bible readers miss crucial geographical, cultural, and historical contexts. Written in Stone provides interactive map for easy access to ancient biblical contexts, enabling deeper and more nuanced interpretation.'
    ],

    method: [
      'Conducted thorough research drawing inspiration from platforms like Urban Archive',
      'Progressed from moodboards and brand design to wireframes',
      'Documented evolving design system',
      'Built live web app using VS Code and Vue framework',
      'Created teaser motion graphic video',
      'Gathered feedback from experts and potential users for iterative refinement'
    ],

    outcome: [
      'Teaser video effectively communicates project essence',
      'Brand/design system exudes clean, modern aesthetic',
      'Figma prototype previews functionality and future enhancements',
      'MVP Vue and Leaflet app allows spatial exploration of biblical sites',
      'Future plans include mobile version and partnerships with nonprofits and colleges'
    ],

    tools: [
      'Figma',
      'Adobe Illustrator',
      'HTML',
      'CSS',
      'Vue',
      'Leaflet',
      'GitHub'
    ],

    overviewFrame: 'https://mega.nz/embed/29QVkBDQ#agm36-OO_ddieurb6XMd5N0H6kV0MkT_7eccppDD7mY',
    overviewCap: 'Capstone presentation at MCAD',

    methodFrame: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxLh7aq2HW1eUzrIFbNJlph%2FWIS_final%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D225-2746%26viewport%3D163%252C591%252C0.21%26t%3DzUxShCSIaIMP4QbO-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D225%253A2746%26mode%3Ddesign',
    methodCap: 'Current prototype',

    outcomeFrame: 'https://mega.nz/embed/b4AR2ZgT#8RqquOy9z7PCewdTFkVXwUYJrSwEtCNVSn2KAqNRDCc',
    outcomeCap: 'Marketing teaser video',

    links: [
      {
        link: 'https://capstone.davyjones.me/',
        linkDescription: 'Capstone Project Page'
      },
      {
        link: 'https://github.com/davyjonesdesign/written-in-stone',
        linkDescription: 'GitHub Repository'
      },
      {
        link: 'https://wis.davyjones.me/',
        linkDescription: 'Live App'
      }
    ]
  },

  // {
  //   alias: 'portfolio-redesign',
  //   title: 'Portfolio Redesign',
  //   subtitle: 'Rebuilt portfolio site with Vue.js focusing on performance, readability, and professional presentation',
  //   duration: 'Fall 2021',

  //   tag: [
  //     'Self-directed',
  //     'Vue',
  //     'Development'
  //   ],

  //   mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/portfolio-redesign/portfolio-mockup.jpg',
  //   mainCap: 'Redesigned portfolio work detail page',

  //   objectives: [
  //     'Create portfolio to share with employers, clients, and professional network',
  //     'Invite engaging exploration of showcased work',
  //     'Foster connections and collaboration opportunities'
  //   ],

  //   overview: [
  //     'Initial portfolio faced readability and performance challenges with ornate style mismatched to field. Redesigned and rebuilt drawing inspiration from material design for clean, modern, efficient experience.'
  //   ],

  //   method: [
  //     'Gathered continuous feedback identifying issues',
  //     'Enhanced for improved readability and loading performance',
  //     'Utilized material design principles creating clean design system in Figma',
  //     'Emphasized efficiency and simplicity'
  //   ],

  //   outcome: [
  //     'Launched updated site with professional vibe',
  //     'Ongoing optimization maintaining high-quality user experience',
  //     'Continued refinement leading to current site'
  //   ],

  //   tools: [
  //     'Figma',
  //     'Adobe Illustrator',
  //     'HTML',
  //     'CSS',
  //     'JavaScript',
  //     'Vue.js',
  //     'GitHub'
  //   ],

  //   overviewImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/portfolio-redesign/old-portfolio.jpg',
  //   overviewCap: 'Original portfolio site',

  //   methodImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/portfolio-redesign/home-screenshot.jpg',
  //   methodCap: 'Redesigned home page',

  //   outcomeImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/portfolio-redesign/work-screenshot.jpg',
  //   outcomeCap: 'Redesigned work page',

  //   links: [
  //     {
  //       link: 'https://www.figma.com/file/6gKrCfishGsJQYHD2HxqiR/davyjones.me(portfolio)?type=design&node-id=0%3A1&mode=design&t=2gweuBc77zzPnidg-1',
  //       linkDescription: 'Figma Design File'
  //     },
  //     {
  //       link: 'https://github.com/davyjonesdesign/davyjones-2/',
  //       linkDescription: 'GitHub Repository'
  //     },
  //     {
  //       link: 'https://archive.davyjones.me/',
  //       linkDescription: 'Original Portfolio'
  //     }
  //   ]
  // }
];
