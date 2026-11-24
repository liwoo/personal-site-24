import type { WorkExperience } from '~/types';

export const workExperience: Array<WorkExperience> = [
  {
    title: 'ICO',
    location: 'Manchester, UK',
    position: 'AI Engineer',
    duration: 'Sept 2025 - Present',
    image: 'ico',
    description: ["Building responsible data and AI solutions at the UK's data regulator."],
  },
  {
    title: 'Irembo',
    location: 'Kigali, RW',
    position: 'AI Engineering Lead',
    duration: 'Aug 2023 - Aug 2025',
    image: 'irembo',
    description: [
      "Led AI and mobile engineering for Rwanda's national e-government platform.",
      'Built LLM agents, RAG pipelines and AI features, including IremboAI.',
      "Organised Irembo's first AI hackathon.",
    ],
  },
  {
    title: 'Bestseller',
    location: 'Aarhus, DK',
    position: 'Software Developer',
    duration: 'Dec 2022 - Jul 2023',
    image: 'bestseller',
    description: [
      "Full-stack work on internal tooling and supply chain systems at one of Europe's largest fashion companies.",
    ],
  },
  {
    title: 'One Acre Fund',
    location: 'Kigali, RW',
    position: 'Lead Software Engineer',
    duration: 'Oct 2019 - Nov 2022',
    image: 'oaf',
    description: [
      'Led the team building mobile and web apps for 1M+ smallholder farmers across East Africa.',
      'Data pipelines, automation and agricultural supply chain software.',
    ],
  },
  {
    title: 'Baobab Health Trust',
    location: 'Lilongwe, MW',
    position: 'Software Architect',
    duration: 'Aug 2017 - Aug 2019',
    image: 'bht',
    description: [
      "Architected health information systems for Malawi's Ministry of Health, including the national Master Health Facility Register.",
      'Led technical decisions across several product teams.',
    ],
  },
  {
    title: 'NBS Bank',
    location: 'Blantyre, MW',
    position: 'Systems Developer',
    duration: 'Jun 2013 - Aug 2014',
    image: 'nbs',
    description: ['Full-stack work on core banking systems, internal tools and reporting dashboards.'],
  },
];
