import type { Project } from '~/types';

export const projects: Project[] = [
  {
    title: 'Master Health Facility Registry',
    subtitle:
      "Malawi's implementation of OpenHIEs Facility Registry, as part of the Interoperability Layer; implemented in collaboration with the Ministry of Health.",
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
    subtitle:
      'A modern, sleek and blazingly fast website for Centenary Bank Malawi, redesigned and developed after Centenary Bank acquired MyBucks Bank.',
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
        title: 'Requirements Gathering',
        description:
          "Conducted in-depth discussions with Centenary Bank stakeholders to identify and prioritize key website features. This process involved analyzing the bank's needs and customer feedback to ensure the final product would meet their expectations and enhance user experience.",
      },
      {
        title: 'Website Design',
        description:
          "Developed the website design from initial mockups to high-fidelity FIGMA files. This phase focused on creating a user-friendly interface that aligns with the bank's branding and ethos. The design process was iterative, allowing for feedback and refinements to ensure the highest quality outcome.",
      },
      {
        title: 'Implementation',
        description:
          'Managed the website implementation process, including creating a detailed schedule and conducting regular check-ins. This method ensured that the project stayed on track and any issues were promptly addressed. Emphasis was placed on efficient development practices to meet the project timeline.',
      },
      {
        title: 'Training',
        description:
          "Provided comprehensive training to the Centenary Bank staff on how to use the new content management system (CMS). This training ensured that the bank's team was fully equipped to manage and update the website independently, maintaining its relevance and effectiveness over time.",
      },
    ],
    testimony: {
      name: 'Lindani Simwaka',
      job: 'Marketing Manager',
      image: {
        src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707735947/lindani.jpg',
        alt: 'Linda Simwaka',
      },
      company: 'Centenary Bank',
      testimony:
        'We have been consistently impressed with the excellence with which Jeremiah delivers his services. His attention to detail is unparalleled, as he displays a profound understanding of our requirements.',
    },
  },
  {
    title: 'Get Alinafe Album Website',
    subtitle:
      'Official Album website of my debut album Alinafe, featuring celebrated Malawian Artists including David Kalilani, Suffix, Kim of Diamons, Kelvin Sings and more',
    description:
      "A digital space as dynamic and soulful as the music itself. Crafted with love in Svelte, this website is optimized for an immersive auditory experience, allowing fans to listen to, download, and engage with each track. Every element of the site reflects the album's unique branding, from the visual aesthetics to the interactive features. It's more than a website; it's an extension of the 'Alinafe' universe. Dive in for a seamless blend of technology and artistry, where every click brings you closer to the heart of the music.",
    slug: 'get-alinafe',
    company: {
      name: 'Liwu',
      logo: 'liwu',
    },
    image: {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707737952/get-alinafe.jpg',
      alt: 'Get Aliafe',
    },
    projectLink: 'https://getalinafe.com/',
    sourceLink: 'https://github.com/liwoo/getalinafe',
    duration: 'Jun 2020 - August 2020',
    role: 'Creative Technologist',
    stack: ['Svelte', 'Tailwind', 'Typescript'],
    category: 'website',
    methods: [
      {
        title: 'Interactive Listening Experience',
        description:
          'Designed an intuitive user interface that allows fans to seamlessly stream and engage with the album. Integrated audio players with high-quality streaming capabilities to ensure a smooth and immersive listening experience.',
      },
      {
        title: 'Efficient Download Management',
        description:
          'Implemented a robust download management system enabling fans to easily download tracks and the entire album. Focused on a hassle-free process, ensuring quick and secure downloads while maintaining the integrity of the music files.',
      },
      {
        title: 'User Engagement and Participation Features',
        description:
          'Incorporated interactive elements such as comment sections, social media integrations, and fan forums. These features were designed to foster a community of listeners, encouraging discussions and interactions around the album.',
      },
      {
        title: 'Brand-centric Design',
        description:
          "Employed a design philosophy that deeply resonated with the album's branding. The website's aesthetic, from color schemes to typography, was carefully chosen to reflect the soul and story of 'Alinafe', creating a visual harmony with the music.",
      },
      {
        title: 'Technical Implementation in Svelte',
        description:
          'Developed the website using Svelte, focusing on performance optimization and responsive design. This approach ensured a fast, efficient, and mobile-friendly user experience, catering to a diverse audience.',
      },
    ],
    testimony: {
      name: 'Timothy Mizaya',
      job: 'Senior Pastor',
      image: {
        src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707738634/1643962222674.jpg',
        alt: 'Timothy Mizaya',
      },
      company: 'Flood Church',
      testimony:
        "Liwu's work on the GetAlinafe.com website was a game changer. As a manager, I've seen how crucial online presence is for artists. Liwu [Jeremiah] not only created a stunning website but also captured the essence of the 'Alinafe' album. The smooth streaming and downloading options significantly boosted our digital engagement. This website has not just been a platform, but a key player in elevating Liwu's music career. The impact on our audience reach and interaction has been phenomenal.",
    },
  },
  {
    title: 'Doorbell Mobile App',
    subtitle:
      'A mobile app that allows users to order food and groceries from their favorite stores and restaurants and have them delivered to their doorstep.',
    description:
      "Doorbell is Malawi's leading on-demand delivery service, connecting customers with their favorite restaurants and stores. The app was designed to be user-friendly, intuitive, and efficient, allowing customers to place orders with just a few taps. The app also includes a comprehensive set of features, such as real-time order tracking, secure payment options, and a seamless communication channel with delivery agents.",
    slug: 'doorbell',
    company: {
      name: 'Doorbell',
      logo: 'doorbell',
    },
    image: {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1707861291/doorbell.jpg',
      alt: 'Doorbell',
    },
    projectLink: 'https://doorbell.mw/',
    duration: 'Oct 2020 - Present',
    role: 'Technology Director',
    stack: ['Flutter', 'Node.js', 'GraphQL', 'Golang'],
    category: 'app',
    methods: [
      {
        title: 'Intuitive User Interface Design',
        description:
          'Crafted a user-friendly interface for the Doorbell app, enabling customers to effortlessly place orders. The design focused on simplicity and ease of navigation, ensuring a seamless experience from browsing to order placement.',
      },
      {
        title: 'Real-Time Order Tracking System',
        description:
          'Integrated a real-time tracking feature, allowing customers to monitor their orders from pickup to delivery. This feature provided transparency and peace of mind, enhancing the overall customer experience.',
      },
      {
        title: 'Secure Payment Integration',
        description:
          'Implemented a variety of secure payment options to cater to different customer preferences. This included credit/debit cards, mobile money, and other digital payment methods, ensuring convenience and security in transactions.',
      },
      {
        title: 'Seamless Communication with Delivery Agents',
        description:
          'Established a direct and efficient communication channel within the app between customers and delivery agents. This feature enabled quick resolution of queries and special instructions, improving service efficiency.',
      },
      {
        title: 'Performance Optimization and Scalability',
        description:
          "Focused on optimizing the app's performance for a fast, responsive, and reliable user experience. Ensured scalability to handle increasing user loads and maintain smooth operation during peak demand times.",
      },
    ],
    testimony: {
      name: 'Chisomo Kajamu',
      job: 'CEO & Co-Founder',
      image: {
        src: 'https://res.cloudinary.com/tiyeni/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707863190/kajamu.jpg',
        alt: 'Chisomo Kajamu',
      },
      company: 'Doorbell',
      testimony:
        "Jeremiah has been instrumental in the development and growth of Doorbell. His technical expertise and leadership have been invaluable in shaping the app's user experience and functionality. His commitment to excellence and innovation has been a driving force behind Doorbell's success. We are proud to have him as a key member of our team and look forward to achieving even greater milestones together.",
    },
  },
];
