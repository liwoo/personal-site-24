import type { Project } from '~/types';

export const projects: Project[] = [
  {
    title: 'Master Health Facility Registry',
    subtitle: "Malawi's implementation of OpenHIEs Facility Registry, as part of the Interoperability Layer; implemented in collaboration with the Ministry of Health.",
    description:
      'At its very core, the MFL is a comprehensive database of all the Health Facilities in the country (Malawi). From Private Hospitals to Village Clinics, the system keeps track of resources, utilities and services available in each one of these facilities just to mention a few.',
    slug: 'zipatala',
    company: {
      name: 'Baobab Health Trust',
      logo: 'bht',
    },
    image: {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707633393/zipatala.jpg',
      alt: 'Zipatala.com',
    },
    projectLink: 'https://zipatala.health.gov.mw/',
    sourceLink: 'https://github.com/BaobabHealthTrust/master-facility-list',
    duration: '2018 - 2020',
    role: 'Software Architect',
    stack: ['React', 'Node.js', 'Javascript', 'FHIR'],
    category: 'webApp',
    methods: [
      {
        title: 'Stakeholder Collaboration',
        description:
          "Engaged with Project Managers, District Health Officers, and Development Partners to gather comprehensive requirements. Facilitated open communication channels, ensuring every stakeholder's voice was heard and integrated into the project vision.",
      },
      {
        title: 'Technical Feasibility and FHIR Standardization',
        description:
          'Collaborated closely with the OpenHIE community to align the Registry with FHIR standards. Conducted thorough research and feasibility studies to ensure technical viability and future scalability.',
      },
      {
        title: 'Agile Design and Implementation',
        description:
          'Implemented Agile methodologies for project management. Organized and led design and implementation sprints, ensuring adherence to deadlines while maintaining flexibility to adapt to changing project needs.',
      },
      {
        title: 'Community Engagement',
        description:
          'Initiated and led community workshops to populate the Registry with accurate data. Worked in close collaboration with Ministry members, facilitating community involvement and ensuring the long-term success and relevance of the Registry.',
      },
    ],
    testimony: {
      name: 'Bessie Nyirenda',
      job: 'Director',
      image: {
        src: 'https://res.cloudinary.com/tiyeni/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707633691/Bessie_Nyirenda_Mrs.jpg',
        alt: 'Bessie Nyirenda',
      },
      company: 'National Bank of Malawi',
      testimony:
        "Jeremiah's leadership and technical expertise were instrumental in the successful implementation of the Master Facility List. He managed to navigate the complex landscape of stakeholders and technical requirements with a unique blend of professionalism and empathy.",
    },
  },
  {
    title: 'Centenary Bank Malawi Website',
    subtitle: 'A modern, sleek and blazingly fast website for Centenary Bank Malawi, redesigned and developed after Centenary Bank acquired MyBucks Bank.',
    description:
      "The website was designed to be a modern, responsive, and user-friendly platform for the bank's customers. It includes a comprehensive set of features, such as a loan calculator, branch locator, and a secure online banking portal. The website was built with a focus on performance, ensuring a seamless user experience across all devices achieving a Lighthouse score of 95+ across all metrics.",
    slug: 'centenary-bank',
    company: {
      name: 'Centenary Bank Malawi',
      logo: 'centenary',
    },
    image: {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707634313/centenary.jpg',
      alt: 'Centenary Bank Malawi',
    },
    projectLink: 'https://www.centenarybank.co.mw/',
    duration: 'Jan 2023 - April 2023',
    role: 'Software Engineer',
    stack: ['React', 'Next.js', 'Typescript', 'Tailwind', 'GraphQL'],
    category: 'website',
    methods: [
      {
        title: 'Stakeholder Collaboration',
        description:
          "Engaged with Project Managers, District Health Officers, and Development Partners to gather comprehensive requirements. Facilitated open communication channels, ensuring every stakeholder's voice was heard and integrated into the project vision.",
      },
      {
        title: 'Technical Feasibility and FHIR Standardization',
        description:
          'Collaborated closely with the OpenHIE community to align the Registry with FHIR standards. Conducted thorough research and feasibility studies to ensure technical viability and future scalability.',
      },
      {
        title: 'Agile Design and Implementation',
        description:
          'Implemented Agile methodologies for project management. Organized and led design and implementation sprints, ensuring adherence to deadlines while maintaining flexibility to adapt to changing project needs.',
      },
      {
        title: 'Community Engagement',
        description:
          'Initiated and led community workshops to populate the Registry with accurate data. Worked in close collaboration with Ministry members, facilitating community involvement and ensuring the long-term success and relevance of the Registry.',
      },
    ],
    testimony: {
      name: 'Lindani Simwaka',
      job: 'Marketing Manager',
      image: {
        src: 'https://res.cloudinary.com/tiyeni/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707633691/Bessie_Nyirenda_Mrs.jpg',
        alt: 'Bessie Nyirenda',
      },
      company: 'Centenary Bank',
      testimony:
        'We have been consistently impressed with the excellence with which Jeremiah delivers his services. His attention to detail is unparalleled, as he displays a profound understanding of our requirements.',
    },
  },
];
