import type { WorkExperience } from '~/types';

export const workExperience: Array<WorkExperience> = [
  {
    title: 'Irembo',
    location: 'Kigali, RW',
    position: 'AI Engineer',
    duration: 'Aug 2023 - Present',
    image: 'irembo',
    description: [
      'Leading AI and mobile engineering. Building LLM-powered agent systems, RAG pipelines, and AI-driven features for Rwanda\'s national e-government platform',
      'Organized Irembo\'s first AI hackathon',
    ],
  },
  {
    title: 'Bestseller',
    location: 'Aarhus, DK',
    position: 'Software Developer',
    duration: 'Dec 2022 - Jul 2023',
    image: 'bestseller',
    description: [
      'Built software for one of Europe\'s largest fashion companies. Full-stack development across internal tooling and supply chain systems',
    ],
  },
  {
    title: 'One Acre Fund',
    location: 'Kigali, RW',
    position: 'Lead Software Engineer',
    duration: 'Oct 2019 - Nov 2022',
    image: 'oaf',
    description: [
      'Led engineering team building mobile and web applications serving 1M+ smallholder farmers across East Africa',
      'Data pipelines, automation systems, and agricultural supply chain software',
    ],
  },
  {
    title: 'Baobab Health Trust',
    location: 'Lilongwe, MW',
    position: 'Software Architect',
    duration: 'Aug 2017 - Aug 2019',
    image: 'bht',
    description: [
      'Architected health information systems for the Malawi Ministry of Health, including the national Master Health Facility Register',
      'Led technical decisions across multiple product teams',
    ],
  },
  {
    title: 'NBS Bank',
    location: 'Blantyre, MW',
    position: 'Systems Developer',
    duration: 'Jun 2013 - Aug 2014',
    image: 'nbs',
    description: [
      'Full-stack development on core banking systems. Built internal tools and reporting dashboards',
    ],
  },
];
