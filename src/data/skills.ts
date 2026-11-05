export interface AgentSkill {
  slug: string;
  name: string;
  /** The `name` in the skill's SKILL.md frontmatter. */
  skillName: string;
  /** One line on what it does. */
  tagline: string;
  /** One concrete result worth pointing at. */
  proof: string;
  repo: string;
  /** Shell commands to install the skill. */
  install: string;
  /** What to type to your coding agent once it's installed. */
  ask: string;
  /** A `~/assets/...` path, resolved with findImage(). */
  image: { src: string; alt: string };
}

export const skills: AgentSkill[] = [
  {
    slug: 'agent-governance-scorecard',
    name: 'Agent Governance Scorecard',
    skillName: 'agent-governance-scorecard',
    tagline: 'Finds what your AI agent can get wrong, down to the file and line.',
    proof: 'The sample refunds agent scores 8/100. A human can say "no" and it still pays out.',
    repo: 'https://github.com/liwoo/agentic-governance-skills',
    install: 'npx skills add liwoo/agentic-governance-skills',
    ask: 'Run a governance scorecard on this repo.',
    image: {
      src: '~/assets/images/skills/governance-scorecard.png',
      alt: 'The governance scorecard for Northstar, a sample refunds agent',
    },
  },
  {
    slug: 'truescreen',
    name: 'truescreen',
    skillName: 'software-reveal-video',
    tagline: 'Launch videos rendered from your real React components.',
    proof: 'Every pixel of UI in the film is your app, so a redesign is just a re-render.',
    repo: 'https://github.com/liwoo/truescreen',
    install: 'git clone https://github.com/liwoo/truescreen\ncp -r truescreen/skill .claude/skills/software-reveal-video',
    ask: 'Make a 30-second reveal of my dashboard.',
    image: {
      src: '~/assets/images/skills/truescreen.jpg',
      alt: "A frame from truescreen's example reveal: the real customers list, a fingertip about to tap a row",
    },
  },
];
