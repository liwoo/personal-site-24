export type TalkStatus = 'upcoming' | 'past';

export interface Talk {
  title: string;
  event: string;
  type: 'talk' | 'panel' | 'webinar' | 'workshop';
  date: string | null;
  eventDates?: string;
  location: string;
  status: TalkStatus;
  role: string;
  affiliation: string | null;
  description: string;
  topics: string[];
  eventUrl: string | null;
  recordingUrl: string | null;
  slidesUrl: string | null;
  featured: boolean;
}

export interface CommunityEntry {
  role: string;
  title: string;
  type: 'community' | 'organising' | 'hackathon';
  location: string;
  status: string;
  description: string;
  topics: string[];
  eventUrl: string | null;
}

export const talks: Talk[] = [
  {
    title: 'You Are the Governance Layer: Six Practices for Agent Builders',
    event: 'Data Decoded MCR',
    type: 'talk',
    date: '2026-10-14',
    eventDates: '2026-10-13 to 2026-10-14',
    location: 'Manchester Central, Manchester, UK',
    status: 'upcoming',
    role: 'Speaker (confirmed)',
    affiliation: "AI Data Engineer, Information Commissioner's Office",
    description:
      "The practical, unglamorous work of making AI agents behave in production: six practices for the layer between the model and the user that decides what's actually allowed to happen.",
    topics: ['AI governance', 'agentic AI', 'responsible AI', 'LLM agents', 'evals'],
    eventUrl: 'https://datadecoded.com/mcr/speakers/',
    recordingUrl: null,
    slidesUrl: null,
    featured: true,
  },
  {
    title: 'AI at IndabaX Rwanda',
    event: 'IndabaX Rwanda',
    type: 'talk',
    date: null,
    location: 'Kigali, Rwanda',
    status: 'past',
    role: 'Speaker',
    affiliation: 'Mobile & AI Engineering Lead, Irembo',
    description:
      "Featured speaker at Rwanda's national AI & Machine Learning gathering, alongside academics and industry ML leads (Yale/EPFL, University of Rwanda, IBM, Tech Hive Advisory).",
    topics: ['AI', 'machine learning', 'GovTech', 'community'],
    eventUrl: 'https://indabaxrwanda.github.io/',
    recordingUrl: null,
    slidesUrl: null,
    featured: true,
  },
  {
    title: 'Leveraging AI in GovTech',
    event: 'Irembo Tech Talk (EP10)',
    type: 'panel',
    date: '2024',
    location: 'Kigali, Rwanda',
    status: 'past',
    role: 'Speaker / showcase',
    affiliation: 'Senior Software Engineer, Irembo',
    description:
      'Showcased the AI applications Irembo was exploring for 120+ government services, on a panel with the CTO of Digital Umuganda and the CEO of Pindo. Publicly recorded.',
    topics: ['GovTech', 'AI in government', 'RAG', 'voice AI', 'public services'],
    eventUrl: 'https://www.youtube.com/watch?v=nyUMMOHQIsc',
    recordingUrl: 'https://www.youtube.com/watch?v=nyUMMOHQIsc',
    slidesUrl: null,
    featured: true,
  },
  {
    title: 'Breaking Boundaries in AI: Binary Quantization on LLMs',
    event: 'AI Career Webinar (guest speaker)',
    type: 'webinar',
    date: '2024-11-09',
    location: 'Online (Google Meet)',
    status: 'past',
    role: 'Guest speaker',
    affiliation: 'Mobile & AI Engineering Lead, Irembo',
    description:
      'A deep dive into binary quantization on large language models and its impact, plus practical advice on building a career in AI.',
    topics: ['LLMs', 'binary quantization', 'AI careers', 'model efficiency'],
    eventUrl: null,
    recordingUrl: null,
    slidesUrl: null,
    featured: true,
  },
  {
    title: 'AI, Binary Quantization & RAG for Low-Resource Environments',
    event: 'Rwanda Informatics Olympiad',
    type: 'talk',
    date: null,
    location: 'Rwanda',
    status: 'past',
    role: 'Guest speaker',
    affiliation: 'Mobile & AI Engineering Lead, Irembo',
    description:
      "Introduced Irembo's AI-powered tools serving 120+ government services and explained how binary quantization makes RAG efficient and scalable for low-resource environments; advised prioritising functionality before optimization.",
    topics: ['AI', 'RAG', 'binary quantization', 'low-resource ML', 'GovTech'],
    eventUrl: null,
    recordingUrl: null,
    slidesUrl: null,
    featured: true,
  },
  {
    title: 'Web 3.0 and How Africa Can Benefit',
    event: 'Google DevFest Kigali (GDG Kigali)',
    type: 'talk',
    date: null,
    location: 'Norrsken House, Kigali, Rwanda',
    status: 'past',
    role: 'Speaker',
    affiliation: 'Irembo',
    description:
      'Talk on the new era of the internet and practical Web3 applications across Education, Agriculture, Finance and Health in an African context.',
    topics: ['Web3', 'blockchain', 'fintech', 'Africa', 'startups'],
    eventUrl: null,
    recordingUrl: null,
    slidesUrl: null,
    featured: false,
  },
  {
    title: 'Blockchain & The Future of Digital Transformation',
    event: 'Emerging Tech Talk (February Edition) — MUBAS Innovation Hub',
    type: 'talk',
    date: null,
    location: 'Malawi University of Business and Applied Sciences (MUBAS), Blantyre, Malawi',
    status: 'past',
    role: 'Speaker ("Blockchain Enthusiast")',
    affiliation: null,
    description:
      'A session on how blockchain technology is reshaping industries and creating new opportunities in decentralised technology.',
    topics: ['blockchain', 'digital transformation', 'decentralisation'],
    eventUrl: null,
    recordingUrl: null,
    slidesUrl: null,
    featured: false,
  },
  {
    title: 'Building API Services for the Modern Web',
    event: 'DivTag Web Developers meetup',
    type: 'workshop',
    date: null,
    location: 'Mhub, Blantyre, Malawi',
    status: 'past',
    role: 'Founder & presenter',
    affiliation: 'DivTag Web Developers',
    description:
      "Community workshop on building modern web API services, part of DivTag's recurring last-Saturday-of-the-month developer sessions.",
    topics: ['APIs', 'web development', 'backend'],
    eventUrl: null,
    recordingUrl: null,
    slidesUrl: null,
    featured: false,
  },
];

export const communityAndHosting: CommunityEntry[] = [
  {
    role: 'Founder & host',
    title: 'DivTag Web Developers community',
    type: 'community',
    location: 'Blantyre, Malawi (Mhub)',
    status: 'past/ongoing',
    description:
      'Founded and ran a developer community (100+ engineers) with monthly last-Saturday meetups and workshops.',
    topics: ['developer community', 'mentoring', 'web development'],
    eventUrl: null,
  },
  {
    role: 'Speaker & co-organiser',
    title: 'Rwanda Informatics Olympiad',
    type: 'organising',
    location: 'Rwanda',
    status: 'past',
    description:
      "Helped host and organise the national informatics olympiad's industry knowledge-exchange session, and spoke on AI at Irembo.",
    topics: ['STEM', 'AI', 'community', 'education'],
    eventUrl: null,
  },
  {
    role: 'Mentor',
    title: 'CodeXtreme Hackathon',
    type: 'hackathon',
    location: 'African Leadership University, Kigali, Rwanda',
    status: 'past',
    description:
      'Mentored teams at the CodeXtreme hackathon on the ALU campus, supporting student builders through the build.',
    topics: ['hackathon', 'mentoring', 'community'],
    eventUrl: null,
  },
];
