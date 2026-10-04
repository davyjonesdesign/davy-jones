export const portfolioData = [
  {
    alias: 'fleetview-4-0',
    title: 'FleetView 4.0 User/Assets',
    subtitle: 'Checking a Lovable prototype against KendoReact and Figma before handoff',
    duration: 'Summer 2026',

    tag: [
      'Design-to-Development',
      'Design System',
      'Prototype to Handoff',
      'Figma',
      'Enterprise'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-user-assets.png?raw=true',
    mainCap: 'FleetView 4.0 User/Assets side panel',

    challenge:
      'In FleetView 4.0, QA kept finding differences between what was in development and what people expected. The Lovable prototype was not the styling reference; KendoReact and the Figma design system were. I wanted a faster way to compare them and prepare screens engineering and QA could review. It was still a proof of concept, not a tested production workflow.',

    work: [
      'Pulled the Lovable prototype into VS Code and used GitHub Copilot to inspect it',
      'Compared the prototype with existing KendoReact patterns and the Figma design system',
      'Used Figma MCP to generate screens and find places where the prototype did not match an existing component',
      'Annotated the Figma screens and updated the system where a component or pattern was missing'
    ],

    results: [
      'Created annotated Figma screens for engineering and QA to review',
      'Used KendoReact and Figma as the references for component behavior and styling',
      'Kept the work as a proof of concept; it still needs testing before production decisions'
    ],

    discovery: [
      'Reviewed the Lovable prototype in a local VS Code repository to identify visual, component, and interaction gaps against the FleetView 4.0 design direction',
      'Compared prototype behavior and styling with the KendoReact implementation patterns and existing Figma design system',
      'Used GitHub Copilot and the Figma MCP to generate high-fidelity screens, surface component blockers, and keep implementation decisions connected to the source system'
    ],

    myRole: [
      'Led the transition from prototype to dev-ready design, owning visual fidelity, system alignment, and handoff quality',
      'Audited generated screens against KendoReact and Figma to identify where prototype output diverged from reusable product patterns',
      'Resolved component blockers and updated screens and system guidance together so design decisions remained actionable for development',
      'Created visually refined and annotated Figma screens that gave QA and engineering a shared source of truth'
    ],

    approaches: [
      'Pulled the Lovable prototype into VS Code and used GitHub Copilot to inspect, iterate, and prepare the implementation for design review',
      'Used the Figma MCP to generate high-fidelity screens from the existing design system rather than treating the prototype styling as authoritative',
      'Identified component blockers where the prototype, KendoReact behavior, and Figma system did not yet agree',
      'Refined and annotated the resulting Figma screens for direct development handoff, updating the system alongside the screens when needed',
      'Established a repeatable flow from prototype to code context to system-aligned Figma handoff'
    ],

    overviewImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-vscode-copilot-mcp.png?raw=true',
    overviewCap: 'Lovable prototype open in VS Code for review with GitHub Copilot and Figma MCP',

    methodImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-generated-figma.png?raw=true',
    methodCap: 'FleetView screens generated in Figma and checked against the existing design system',

    leadershipImpact: [
      'Turned prototype review into a shared design and engineering workflow by connecting Lovable, VS Code, GitHub Copilot, Figma MCP, and the Figma design system',
      'Protected design-system authority under delivery pressure by making KendoReact and Figma the reference points for styling and component behavior',
      'Reduced ambiguity for future QA and engineering review by converting generated screens into visually refined, annotated handoff artifacts',
      'Used AI-assisted tools to accelerate the POC while keeping design decisions human-led'
    ],

    impact: [
      'Turned prototype work into dev-ready designs in a fraction of the usual time',
      'Resolved visual and component differences before a future build phase',
      'Created a clearer reference for design, product, and engineering discussion',
      'Kept the work appropriately scoped as an untested proof of concept'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-annotated-handoff.png?raw=true',
    outcomeCap: 'Annotated Figma screen for engineering and QA review',

    gallery: [
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-vscode-copilot-mcp.png?raw=true',
        caption: 'Lovable prototype open in VS Code with GitHub Copilot and Figma MCP'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-generated-figma.png?raw=true',
        caption: 'Figma screen generated from the Lovable prototype'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-annotated-handoff.png?raw=true',
        caption: 'Annotated Figma screen for engineering and QA review'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/fleetview-4-0/fleetview-workflow.png?raw=true',
        caption: 'From Lovable prototype through VS Code, GitHub Copilot, and Figma MCP to annotated Figma screens'
      }
    ],

    tools: [
      'Lovable',
      'VS Code',
      'GitHub Copilot',
      'Figma MCP',
      'Figma',
      'KendoReact'
    ],

    links: []
  },

  {
    alias: 'teaching-figma-agent-design-system',
    title: "Teaching Figma's agent to use our design system",
    subtitle: 'A custom skill got Figma closer to our component library. What it missed showed me where the library needed work.',

    tag: [
      'Design System',
      'Figma Agent',
      'AI Workflow',
      'Component Library',
      'Prototyping'
    ],

    challenge:
      "Lovable made it easy for people on the team to spin up a prototype. The problem was that those prototypes weren't built from our components. Those live in our Figma library for the Wheels design system. Internally, we call it W-UI. The prototypes looked close enough to the product that the differences mattered: colors drifted, details were off, and correcting them one by one took time. I had been redrawing those screens in Figma with a GitHub Copilot skill. It worked, but it was slow. After a Figma webinar about the new agents, I wanted to see whether Figma could do more of that work directly.",

    work: [
      "Tried giving Figma's agent a published Lovable link and asking it to create the page. It pulled in pieces, but didn't quite draw the screen. Cleaning it up would have been more headache than drawing it myself.",
      'Repackaged the GitHub Copilot skill I had been using in VS Code as a Figma skill called W-UI Screen Create. It brought in some grid elements, but rearranged other pieces and the header was wonky.',
      "Started a loop: clean up the screen by hand, ask the agent to update the skill based on those changes, then run it again. When I found out it could read Figma comments, I added notes about the wordmark, header, grid, and inputs.",
      "Used a screenshot of a concepts page for the latest pass instead of the Lovable link. It brought in the header, filter cards, inputs, grid, and list/map toggle. It also invented KPI cards that aren't in the system.",
      'Used the misses to find gaps in the library. I updated the filter-tab styling, reworked the tabstrip, adjusted the grid toolbar for search on the right, and looked for a happy medium between filter cards that felt too heavy and chips that looked too much like buttons.'
    ],

    results: [
      'The latest pass was closer, but it was not finished. Spacing was still off, inputs kept adding labels, search was in the wrong spot, and the header still had some funky things going on.',
      "Published W-UI Screen Create for the team to use with Figma's agent and asked people to tell me when it did something they didn't like.",
      'The library updates helped later runs and made the system better for people designing by hand. I carried the same approach into the Figma Make kit, where component guidelines tell the tool what to use instead of letting it invent its own.'
    ],

    tools: [
      'Figma agent',
      'Figma skills',
      'GitHub Copilot',
      'Lovable',
      'Figma',
      'Figma component library'
    ],

    links: []
  },

  {
    alias: 'new-driver-experience-menu',
    title: 'New Driver Experience App Menu Redesign',
    subtitle: 'Using navigation data to make the most-used part of the menu easier to find',
    duration: 'Summer 2026',

    tag: [
      'Product Discovery',
      'Accessibility',
      'Design System',
      'Figma Make',
      'Mobile'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-final.png?raw=true',
    mainCap: 'New Driver Experience menu with Services at the top of the navigation',

    challenge:
      'Drivers and internal teams had trouble finding items in the long menu. Search was confusing, and the most-used destinations did not stand out. I used navigation data to rethink the order and make the menu easier to scan.',

    work: [
      'Put Services first because it was the most-used section',
      'Replaced the long text list with cards and recognizable icons',
      'Added search that highlights matching characters',
      'Built a Quick guide overlay and made a working prototype in Figma Make'
    ],

    results: [
      'Gave Services a stronger place in the menu based on usage data',
      'Let people try the search and Quick guide interactions in a working prototype',
      'Reviewed the prototype with developers, product owners, leaders, and the UX team',
      'The redesign was earmarked for a future development round'
    ],

    discovery: [
      'Reviewed the existing menu to identify where long text lists, weak recognition cues, and unclear search behavior slowed navigation',
      'Used usage data to establish Services as the most-used section and made it the starting point instead of a general All topics list',
      'Translated navigation needs into a scannable hierarchy that could support both drivers and internal teams'
    ],

    myRole: [
      'Led the information architecture and interaction redesign from problem framing through accessible prototype',
      'Turned usage data into a navigation strategy that prioritized Services and reduced reliance on a flat topic list',
      'Created iconography, card hierarchy, search behavior, and Quick guide interactions using the design system UI kit',
      'Built the live Figma Make prototype so stakeholders and drivers could test the real experience rather than review static screens'
    ],

    approaches: [
      'Replaced the text-list pattern with a card-based hierarchy that supports scanning and recognition',
      'Led with Services based on usage data, giving the most-used section stronger presence in the menu',
      'Added recognizable iconography to help users identify destinations more quickly',
      'Built search with character highlighting on results to make matching and next steps easier to understand',
      'Added a Quick guide overlay to support orientation without permanently adding more content to the menu'
    ],

    overviewImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-concept.png?raw=true',
    overviewCap: 'Early menu concept exploring a card-based navigation layout',

    methodImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-final.png?raw=true',
    methodCap: 'Menu design with Services first, recognizable icons, and search',

    leadershipImpact: [
      'Shifted the navigation conversation from preserving a complete list to helping people find the right destination quickly',
      'Connected usage data, accessibility, and design-system constraints into a clear product direction for product, engineering, leadership, and UX',
      'Made prototype behavior visible through a working Figma Make experience that teams could test',
      'Created a reusable approach for combining search, guidance, and card-based navigation in driver-facing workflows'
    ],

    impact: [
      'Made Services the primary entry point because it reflected the highest-use navigation need',
      'Improved recognition and scanability by moving from a long text list to icon-supported cards',
      'Clarified search results with character highlighting and added contextual help through the Quick guide overlay',
      'Validated the interaction model with developers, product owners, leaders, and the UX team',
      'Earmarked the redesign for the next round of development'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-final.png?raw=true',
    outcomeCap: 'Final menu design prepared for stakeholder and driver testing',

    gallery: [
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-existing.png?raw=true',
        caption: 'Existing menu with destinations in a long text list'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-concept.png?raw=true',
        caption: 'Early concept exploring a card-based menu'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-final.png?raw=true',
        caption: 'Services-led navigation with recognizable icons'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-prototype.gif?raw=true',
        caption: 'Figma Make prototype with search highlighting and a Quick guide',
        link: 'https://idea-modal-63070790.figma.site/',
        linkDescription: 'Open password-protected Figma Make prototype'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/new-driver-experience/menu-workflow.png?raw=true',
        caption: 'From the Figma design system to a Figma Make prototype'
      }
    ],

    tools: [
      'Figma',
      'Figma Make',
      'Figma UI Kit',
      'Accessibility',
      'User Research'
    ],

    links: []
  },

  // CENTERPIECE - Wheels Unified Design System
  {
    alias: 'wheels',
    title: 'Wheels Unified Design System',
    subtitle: 'Shared components and guidance after Wheels, Donlen, and LeasePlan USA came together',
    duration: '2023 - Present',

    tag: [
      'Design System',
      'Product Discovery',
      'Design-to-Development',
      'Mobile',
      'Accessibility'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-de.gif?raw=true',
    mainCap: 'Shared design system patterns for Wheels products across web and mobile',

    // Recruiter-focused structure
    challenge:
      'When Wheels, Donlen, and LeasePlan USA came together, they brought different UI histories and ways of working. Teams were making the same component decisions more than once, and Figma, ThemeBuilder, and Storybook did not always line up. I worked on shared patterns and contribution guidance, while leaving room for product-specific needs.',

    work: [
      'Moved the design team to Figma and wrote down how shared components could change',
      'Built KendoReact patterns and worked to keep them aligned with Figma, ThemeBuilder, and Storybook',
      'Adapted React Native Paper patterns for our mobile products and accessibility needs',
      'Documented the system in Frontify and worked with teams as they started using it'
    ],

    results: [
      'Gave teams shared components and contribution guidance after the merger',
      'Connected design decisions in Figma to the implemented theme and Storybook',
      'Worked accessibility needs into tokens and core component patterns'
    ],

    discovery: [
      'Audited overlapping UI histories across Wheels, Donlen, and LeasePlan USA to understand where inconsistency slowed product delivery',
      'Gathered input from product, engineering, marketing, and external agency partners to identify system gaps and governance needs',
      'Mapped design-to-code workflows across Figma, ThemeBuilder, Storybook, and Frontify to expose parity issues and repeated decisions'
    ],

    myRole: [
      'Design System Steward: Owned system integrity, boundaries, and evolution across design, engineering, marketing, and external agency partners',
      'Governance Model Author: Defined where flexibility was healthy and where consistency needed to be protected, then held that line through documented rationale',
      'Bridge between design and engineering: Ensured 1:1 parity between Figma, ThemeBuilder, and Storybook across KendoReact and React Native Paper',
      'Documentation Lead: Translated system intent into usage principles, decision frameworks, and contribution guidelines teams could follow independently',
      'Mentor and culture builder: Guided designers through Figma migration and system adoption, raising UX maturity across the organization'
    ],

    approaches: [
      'Moved the design team to Figma and wrote contribution guidance for the shared library',
      'Set up the Figma library as a starting point for future implementation work',
      'Built KendoReact components, including a data grid, and checked them against Figma, ThemeBuilder, and Storybook',
      'Adapted React Native Paper patterns for our mobile products and accessibility needs',
      'Collected shared icons and vehicle images in reusable libraries',
      'Documented component use and contribution guidance in Frontify'
    ],

    overviewImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-figcomp.jpg?raw=true',
    overviewCap: 'Shared component system across the frameworks used by the teams',

    methodImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/kendo-tb.jpg?raw=true',
    methodCap: 'ThemeBuilder patterns checked against the Figma library',

    leadershipImpact: [
      'Worked with product, engineering, marketing, and agency partners across the three companies',
      'Moved repeated component decisions into shared guidance and review criteria',
      'Helped designers move to Figma and understand how to use and update the library',
      'Connected Figma components with ThemeBuilder, Storybook, and Frontify guidance'
    ],

    impact: [
      'Replaced separate UI approaches with shared components and guidance across Wheels, Donlen, and LeasePlan USA',
      'Standardized component patterns and documentation that engineering teams could use directly',
      'Set boundaries and review criteria for changes to the shared system',
      'Worked WCAG AA requirements into core component decisions',
      'Kept Figma, ThemeBuilder, and Storybook aligned through ongoing review',
      'Gave teams a shared way to discuss component decisions'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/wass-documentation.jpg?raw=true',
    outcomeCap: 'Frontify guidance for teams using the shared system',

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
    alias: 'loading-ui-guidelines',
    title: 'Web Skeleton and Loading UI Guidelines',
    subtitle: 'Choosing what to show while a page waits, instead of defaulting to a spinner',
    duration: 'Summer 2025',

    tag: [
      'Design System',
      'UX Strategy',
      'KendoReact',
      'Accessibility',
      'Development Guidance'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/web-loading-ui/happy-unhappy-loading-u.gif?raw=true',
    mainCap: 'Loading guidance for short, medium, and long waits',

    challenge:
      'Developers needed to know what to show while different parts of a page were loading. A single spinner did not explain which section was waiting or how long the wait might be. I mapped loading behavior to the wait, the page, and the KendoReact components we already had.',

    work: [
      'Defined loading patterns for short, medium, and long waits',
      'Mapped KendoReact loading components to the page sections and states where they fit',
      'Added feedback in stages as the wait continued',
      'Documented section-by-section loading so people could use faster parts of a page while others were still waiting'
    ],

    results: [
      'Gave developers a reference for component choice, placement, and timing',
      'Documented how the loading state changes as a wait continues',
      'Set a reusable pattern for later web loading guidance'
    ],

    discovery: [
      'Reviewed existing developer and product constraints around loading behavior, page structure, and component availability',
      'Mapped how users experience uncertainty across short, medium, and long waits',
      'Used screen-specific loading behavior and implementation constraints to define a more intentional system'
    ],

    myRole: [
      'Led the loading-state design system work from research through prototyping',
      'Defined the loading progression and sectioned behaviors to fit real product constraints',
      'Turned a vague loading requirement into a clear, dev-ready reference for implementation'
    ],

    approaches: [
      'Created three time-based scenarios: Happy (<5 sec), Unhappy A (5–10 sec), and Unhappy B (>10 sec)',
      'Used progressive disclosure so skeletons, progress bars, and inline spinners appeared in increasing layers of feedback as wait time grew',
      'Introduced sectioned loading to keep users interacting with faster areas while slower sections loaded',
      'Prototyped the guidance to give engineering a concrete pattern to implement and review'
    ],

    leadershipImpact: [
      'Turned an ambiguous loading requirement into a teachable system teams could implement consistently',
      'Balanced development constraints with user experience quality by matching feedback to actual delay',
      'Created a framework that reduces uncertainty without overloading the interface'
    ],

    impact: [
      'Improved the user experience by offering feedback that scaled with wait time instead of a single generic spinner',
      'Made component choice, timing, and sequencing clear for engineering',
      'Set a reusable pattern for future Web loading states and later UI guidance'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/web-loading-ui/happy-unhappy-loading-u.gif?raw=true',
    outcomeCap: 'Loading guidance showing which feedback to use as a wait continues',

    gallery: [
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/web-loading-ui/happy-unhappy-loading-u.gif?raw=true',
        caption: 'Loading UI prototype showing feedback by wait time',
        link: 'https://www.figma.com/proto/VT946pea19XE0FtXTPYVaJ/NDE-%E2%80%94-Loading-Widgets?node-id=4-1465&t=ci6voE3RSnYnijrY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2351&show-proto-sidebar=1',
        linkDescription: 'Open Figma prototype'
      },
      {
        src: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/web-loading-ui/loading-workflow.png?raw=true',
        caption: 'Loading workflow from the initial wait through later feedback'
      }
    ],

    tools: [
      'Figma',
      'KendoReact',
      'Design System',
      'UX Strategy'
    ],

    links: [
      {
        link: 'https://www.figma.com/proto/VT946pea19XE0FtXTPYVaJ/NDE-%E2%80%94-Loading-Widgets?node-id=4-1465&t=ci6voE3RSnYnijrY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2351&show-proto-sidebar=1',
        linkDescription: 'Open Figma prototype'
      }
    ]
  },

  {
    alias: 'new-driver-experience',
    title: 'New Driver Experience: Maintenance',
    subtitle: 'Making maintenance responsibility and next steps clearer for drivers',
    duration: 'Launch: July 20, 2025',

    tag: [
      'UX Strategy',
      'Product Discovery',
      'Mentorship',
      'Design System',
      'Enterprise'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/paper-figcomp.jpg?raw=true',
    mainCap: 'Driver maintenance patterns in the New Driver Experience',

    challenge:
      'Drivers were missing preventative maintenance tasks. In the product, it was easy to miss who was responsible, when the work was due, and what to do next. I worked through the maintenance flow so drivers and fleet teams had a clearer path from a notification to the task.',

    work: [
      'Talked with drivers about where maintenance tasks were missed or unclear',
      'Mapped task steps, statuses, errors, and support handoffs',
      'Worked with Product, Engineering, Operations, and Driver Services on who owned each step',
      'Added reusable patterns for task guidance, status, and completion'
    ],

    results: [
      'Made the task owner, due date, and next step easier to find in the flow',
      'Added reusable patterns for maintenance tasks and status to the driver experience system'
    ],

    discovery: [
      'Conducted driver research to understand why preventative maintenance tasks were missed or misunderstood',
      'Mapped maintenance workflows, status states, error recovery, and support escalation paths across the driver journey',
      'Aligned Product, Engineering, Operations, and Driver Services around responsibility, compliance, and measurable support outcomes'
    ],

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
      'Worked within the React rebuild and documented patterns for future connected-vehicle work'
    ],

    leadershipImpact: [
      'Worked with product, engineering, operations, and driver services on the full maintenance journey instead of isolated screens',
      'Kept the conversation on whether drivers could tell what was due and what to do next',
      'Mentored designers on how to use critique, research synthesis, and design system rationale to defend decisions with evidence',
      'Turned product-specific onboarding work into reusable system patterns for tasks, statuses, guidance, and exception handling'
    ],

    impact: [
      'Improved maintenance task completion and compliance by making responsibility, due dates, and next steps easier to understand',
      'Made maintenance responsibilities, error states, and escalation paths clearer before drivers needed help',
      'Raised design quality through repeatable critique and review practices that made tradeoffs visible to product and engineering partners',
      'Strengthened the design system by contributing reusable patterns for maintenance flows, status communication, error handling, and task completion'
    ],

    outcomeImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/wass-documentation.jpg?raw=true',
    outcomeCap: 'Reusable guidance patterns for driver tasks and statuses',

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
    subtitle: 'A proof of concept for reviewing AI-assisted fleet redeployment actions',
    duration: '2025',

    tag: [
      'Design System',
      'AI-Assisted',
      'KendoReact',
      'Enterprise',
      'Prototyping'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/veh-red-3.jpg?raw=true',
    mainCap: 'Fleet Redeployment Hub with a vehicle grid and natural-language command bar',

    challenge:
      'An enterprise fleet client wanted to test whether AI could help with redeployment, a multi-hour process spread across spreadsheets, email, and manual status checks. The prototype needed to show what the AI was trying to do, what state it was in, and how an operator could review or recover from an action.',

    work: [
      'Mapped the redeployment workflow across spreadsheets, email, and vehicle status checks',
      'Designed the command bar, vehicle grid, filters, bulk actions, side drawer, and confirmation flow',
      'Defined processing, results, error, confidence, and recovery states',
      'Used Lovable, Figma, and VS Code to try the flow in code'
    ],

    results: [
      'Built a proof of concept for client review',
      'Made the AI action, its status, and the recovery path visible in the interface',
      'Documented KendoReact patterns for engineering to review'
    ],

    discovery: [
      'Analyzed how operators coordinated redeployment across spreadsheets, email threads, and manual vehicle status checks',
      'Worked with enterprise stakeholders and an engineering architect to define what an AI-assisted PoC needed to prove',
      'Identified trust requirements for AI interaction, including intent, system state, confidence, scope, and recovery paths'
    ],

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
      'Used AI-assisted prototyping as a facilitation tool, not a substitute for judgment, to accelerate iteration while preserving quality'
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
    subtitle: 'A budgeting concept for early-career professionals who want a clear monthly plan',
    duration: '2026',
    hidden: true,

    tag: [
      'Product Discovery',
      'Rapid Prototyping',
      'Personal Finance',
      'Product Design',
      'Dashboard'
    ],

    mainImg: 'https://github.com/davyjonesdesign/data-for-axios/blob/main/assets/budgety/budgety-cover.jpg?raw=true',
    mainCap: 'Budgety dashboard with a monthly plan, category tracking, and savings goals',

    challenge:
      'Budgeting tools can feel like another thing to keep up with. I framed Budgety as a concept for early-career professionals who want a clear monthly plan without living in spreadsheets.',

    work: [
      'Mapped setup, category tracking, bill reminders, and savings goals',
      'Designed a dashboard for the monthly plan and spending trends',
      'Added quick actions for category limits, notes, and adjustments',
      'Documented how the layout changes on mobile and desktop'
    ],

    results: [
      'Worked through a first-budget setup and category tracking flow',
      'Made category limits and changes visible from the dashboard',
      'Prepared a React UI specification for implementation'
    ],

    discovery: [
      'Framed the product around early-career professionals who need a clear monthly plan without spreadsheet-level complexity',
      'Mapped budgeting jobs-to-be-done around setup, category monitoring, bill reminders, and savings progress',
      'Used rapid feedback rounds to validate layout, tone, and interaction patterns before refining the prototype'
    ],

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
    subtitle: 'A self-directed mobile redesign focused on navigation, readability, and accessibility',
    duration: 'Winter 2023',
    hidden: true,

    tag: [
      'Self-directed',
      'UX/UI',
      'Accessibility',
      'Mobile',
      'Visual Craft'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/wikiUI/wikiUI-feature.jpg',
    mainCap: 'Mobile Wikipedia redesign with a bottom search bar, menu, and dark mode',

    challenge:
      'I wanted to make the Wikipedia mobile landing page easier to scan and use with one hand, without removing the parts people already knew.',

    objectives: [
      'Significantly improve user experience of wikipedia.org',
      'Restructure content and simplify choices',
      'Enhance contrast and emphasize actionable items',
      'Maintain familiar functionality while modernizing interface'
    ],

    overview: [
      'I redesigned the Wikipedia mobile landing page, moving search within thumb reach, placing secondary links in a menu, and working through light and dark color palettes. I asked people in social media communities for feedback as the design developed.'
    ],

    method: [
      'Asked people in social media communities for feedback as the design developed',
      'Moved search to the bottom of the screen so it was easier to reach with a thumb',
      'Moved secondary links into the menu to make the landing page easier to scan',
      'Redrew icons to use a more consistent style',
      'Worked out light and dark color palettes with readability in mind'
    ],

    outcome: [
      'Made a mobile landing-page prototype with a menu and dark mode',
      'Added flows for menu interactions and switching modes',
      'Kept the design open for more feedback and another round of changes'
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
    subtitle: 'A student project about finding something to watch across too many streaming apps',
    duration: 'Spring 2023',
    hidden: true,

    tag: [
      'UX Research',
      'Mobile',
      'MCAD'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/streamline/streamine-cover.jpg',
    mainCap: 'Streamline mobile concept for browsing shows across streaming services',

    challenge:
      'Finding a show meant checking more than one streaming app. For this student project, I looked at how people searched and what a shared browsing experience could look like.',

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
      'Surveyed people about how they used streaming apps and where the search process got frustrating',
      'Made user personas from the research to keep the different needs in view',
      'Sketched a mobile interface around the way people browse on their phones',
      'Mapped the main flows before refining the screens in Figma'
    ],

    outcome: [
      'Feedback pointed toward a darker interface and a simpler search flow',
      'The prototype gave me a direction to keep testing, along with questions that needed more research'
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
    subtitle: 'A capstone project for exploring biblical places and historical context on a map',
    duration: 'Summer 2023',
    hidden: true,

    tag: [
      'Vue',
      'Full Stack',
      'MCAD',
      'UX Research'
    ],

    mainImg: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/mac-mockup.png',
    mainCap: 'Written in Stone map app built with Vue and Leaflet',

    challenge:
      'Many Bible readers do not have the geography and historical context alongside the text. For my capstone, I wanted to make those places easier to explore on a map.',

    objectives: [
      'Surface comprehensive biblical context',
      'Enable diverse audience to independently discover contexts',
      'Foster experience deepening understanding of scripture'
    ],

    overview: [
      'Many Bible readers miss crucial geographical, cultural, and historical contexts. Written in Stone provides interactive map for easy access to ancient biblical contexts, enabling deeper and more nuanced interpretation.'
    ],

    method: [
      'Looked at map-based references, including Urban Archive',
      'Worked from moodboards and brand design into wireframes and a prototype',
      'Documented the design system as it changed',
      'Built the web app in Vue with Leaflet',
      'Made a short motion-graphics teaser',
      'Asked experts and potential users for feedback'
    ],

    outcome: [
      'Built a Vue and Leaflet app for exploring biblical sites on a map',
      'Made a Figma prototype for the planned interactions',
      'The mobile version and possible education partnerships were still future ideas'
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
