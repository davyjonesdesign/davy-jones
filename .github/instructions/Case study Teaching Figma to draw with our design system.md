# Case study: Teaching Figma to draw with our design system

Oct 3, 2026 · @Davy Jones

Lovable made it easy for anyone on the team to spin up a prototype, but those prototypes weren't built from our components. Those live in our Figma library for the Wheels design system. Internally, we call it W-UI. I wanted a faster way to get the prototypes into Figma using those components. This is how I got there with Figma's agent, a custom skill, and a lot of passes, and what it showed me about the design system along the way.

**My role:** design system owner, working solo on this. **Tools:** Figma agents and skills, GitHub Copilot, Lovable, the W-UI Figma library. **Time:** about a day of focused work.

## The problem

Our team had been prototyping in Lovable. It's quick and easy to pick up, which is why so many people were using it. The catch is that a Lovable prototype looks close enough to our product to cause confusion. It isn't built from our components, and the colors and details drift. Fixing all those small details was nickel-and-diming our time.

Before this, I'd been redrawing Lovable prototypes in Figma with help from a GitHub Copilot skill. It worked, but it was slow. After sitting in on a Figma webinar about their new agents, I started wondering whether Figma could just do it directly.

## First attempt

I tried the obvious approach first. I grabbed a published Lovable link (it has to be published, or the agent can't read it), pasted it into the Figma agent, and asked it to create the page.

It came back close. It pulled pieces, but it didn't quite draw it. Cleaning that up would have been more headache than drawing it myself. So I started thinking about how to give the agent more context.

*\[Screenshot: first pass, from the link alone\]*

## The loop

The thing about Figma agents is that they can use skills. A skill is essentially a markdown file of instructions the agent follows. I took the skill I'd been using with Copilot in VS Code, repackaged it as a Figma skill called W-UI Screen Create, and ran the same prompt again.

It did a much better job. It pulled in some of our grid elements. It still wasn't right, though. Some pieces were rearranged, and the header was all kind of wonky.

From there it turned into a loop:

1. Duplicate the agent's screen and clean it up by hand, the way it should be.
2. Tell the agent to update the skill based on what I changed.
3. Run it again and see what's different.

Each pass got some things better and threw others off. There was some drift. Partway through, I asked whether the agent could read Figma comments, since Copilot could read annotations. It can, so I started leaving notes right on the canvas: use the wordmark logo, here's the right header, here's how the grid and inputs should work.

For the latest pass I skipped the link and gave it a screenshot of a concepts page instead. It pulled in our header, filter cards, inputs, grid, and the list/map toggle. It also invented a set of KPI cards that aren't in the design system, though at least they used our icons and colors.

*\[Screenshot: second pass, with the skill\]*

*\[Screenshot: a mid-loop pass, with comments on the canvas\]*

*\[Screenshot: latest pass, from the concepts page screenshot\]*

## What changed in the design system

The most useful part wasn't the screens. It was what the agent kept getting wrong. When it picked the wrong component, that usually pointed to a gap in our system. So partway through, I asked the agent what I should update in the Figma library to make this easier, and used it to help make those updates.

- **Filter tabs:** these were old and we weren't really using them, so I updated the styling.
- **Filter chips:** feedback said they didn't read as filters. The heavier filter cards were a bit too heavy, and the chips were too small and looked like buttons. I was looking for a happy medium.
- **Tabstrip:** it wasn't coming in right, so I reworked it.
- **Grid toolbar:** I updated the layout so it accounts for search on the right.

Every fix in the library made the next run better. It also made the system better for everyone designing by hand.

*\[Screenshot: before/after of the filter chips or tabstrip\]*

## Where it landed

It's not perfect. The latest pass still has spacing issues, inputs that keep adding labels, a search box in the wrong spot, and a header with some funky things going on. But it's a lot closer than where I started, after about a day of work, half of it on an old laptop.

I published the skill to the team so anyone can call it from the Figma agent with a forward slash, and asked people to tell me when it does something they don't like.

The same thinking carried into the Figma Make kit I'm building now. There, the component guidelines do the job the skill did here: they tell the tool which component and configuration to use, so it stops inventing its own.

## What I think now

The agent is good at the busywork: copying a screen, pulling in components, getting you to a starting point fast. It's weaker at solutioning. When it doesn't know what to do, it makes something up, like extra styling or cards that aren't in the system.

So I think most of the real work is on the system side. The better our components and guidelines are, the less the agent has to guess. Fixing the screen helps once. Fixing the system helps every run after that.

## Screenshots to add

- [ ] The Lovable prototype it started from
- [ ] First pass, from the link alone
- [ ] Second pass, with the skill
- [ ] A mid-loop pass, with comments on the canvas
- [ ] Latest pass, from the concepts page screenshot
- [ ] Before/after of a component you fixed (filter chips or tabstrip)
- [ ] The skill in the Figma agent's slash menu (optional)
