export interface SkillStep {
  title: string;
  detail: string;
}

export interface AgentSkill {
  slug: string;
  name: string;
  /** The `name` in the skill's SKILL.md frontmatter. */
  skillName: string;
  tagline: string;
  description: string;
  repo: string;
  /** Shell commands to install the skill. */
  install: string;
  /** What to type to your coding agent once it's installed. */
  ask: string;
  steps: SkillStep[];
  /** One concrete result worth pointing at. */
  proof: string;
  /** A `~/assets/...` path, resolved with findImage(). */
  image: { src: string; alt: string };
}

export const skills: AgentSkill[] = [
  {
    slug: 'agent-governance-scorecard',
    name: 'Agent Governance Scorecard',
    skillName: 'agent-governance-scorecard',
    tagline: 'Find out what your AI agent can get wrong today, and which lines to change.',
    description:
      "It reads your agent's code along the path between \"the model suggested an action\" and \"the system actually did it\". You get 48 checks across the 6 safeguards from my Governance House talk, every gap traced to a file and line, and a fix list ranked by what can hurt you.",
    repo: 'https://github.com/liwoo/agentic-governance-skills',
    install: 'npx skills add liwoo/agentic-governance-skills',
    ask: 'Run a governance scorecard on this repo.',
    steps: [
      {
        title: 'Index',
        detail:
          'A tiny zero-dependency script maps the repo: frameworks, tools, anything that moves money or data, tests and CI. Secrets get masked.',
      },
      {
        title: 'Map',
        detail: 'Your agent reads the code and writes down what it can actually do, from model output to side effect.',
      },
      {
        title: 'Scope',
        detail:
          '5 yes/no questions decide which checks apply. A Q&A bot only gets checked on Reliability; an agent that issues refunds gets the lot.',
      },
      {
        title: 'Assess',
        detail:
          'Room by room, each check comes back present, partial, missing or unknown, with evidence. A system prompt saying "be careful" earns nothing.',
      },
      {
        title: 'Render',
        detail:
          'The script validates coverage and builds an HTML report plus a scorecard.json you can diff between releases or fail CI on.',
      },
    ],
    proof:
      'The sample refunds agent asks a human before refunding, but the approval edge is unconditional, so a "no" still pays out. The scorecard catches it in 1 pass and scores the agent 8/100.',
    image: {
      src: '~/assets/images/skills/governance-scorecard.png',
      alt: 'The governance scorecard for Northstar, a sample refunds agent',
    },
  },
  {
    slug: 'truescreen',
    name: 'truescreen',
    skillName: 'software-reveal-video',
    tagline: 'Product launch videos made from your real UI, with zero mockups or screen recordings.',
    description:
      'A Remotion toolkit plus a skill that turns your coding agent into a video editor. It compiles your actual React components into the film, feeds them demo data frame by frame, and poses them in 3D with headlines, taps and camera push-ins. When the UI changes, you re-render.',
    repo: 'https://github.com/liwoo/truescreen',
    install: 'git clone https://github.com/liwoo/truescreen\ncp -r truescreen/skill .claude/skills/software-reveal-video',
    ask: 'Make a 30-second reveal of my dashboard and settings pages.',
    steps: [
      {
        title: 'Script',
        detail:
          'One idea per beat, about 4 beats for 30 seconds. Every claim on screen gets checked against the code before it ships.',
      },
      {
        title: 'Shoot',
        detail:
          'Headline on the left, your app in a tilted window on the right, then the camera pushes in on the one detail that matters.',
      },
      {
        title: 'Wire',
        detail:
          'It finds the real components behind each screen and compiles them into the Remotion bundle, with the framework runtime stubbed out.',
      },
      {
        title: 'Review',
        detail:
          'It renders a contact sheet of 1 frame per second and reads it for half-loaded screens and taps off target before the final render.',
      },
    ],
    proof:
      'The repo ships Orbit, a tiny Next.js app, and an 18-second reveal built from its components. Every pixel of UI in the film is the app itself.',
    image: {
      src: '~/assets/images/skills/truescreen.jpg',
      alt: "A frame from truescreen's example reveal: the real customers list, a fingertip about to tap a row",
    },
  },
];
