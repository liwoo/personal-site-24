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
      src: 'https://minio-api.dartsmw.com/chienda.com/zipatala.jpg',
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
        src: 'https://www.escom.mw/wp-content/uploads/2025/03/image-8.jpg',
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
      src: 'https://minio-api.dartsmw.com/chienda.com/centenary-website.jpg',
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
        src: 'https://minio-api.dartsmw.com/chienda.com/lindani.jpg',
        alt: 'Linda Simwaka',
      },
      company: 'Centenary Bank',
      testimony:
        'We have been consistently impressed with the excellence with which Jeremiah delivers his services. His attention to detail is unparalleled, as he displays a profound understanding of our requirements.',
    },
  },
  {
    title: 'IremboAI',
    subtitle:
      'A trilingual AI assistant that gives citizens instant, source-grounded answers about iremboGov services — in Kinyarwanda, English, or French.',
    description:
      "IremboAI reimagines how Rwandans get help with government services. Instead of waiting in a call center queue, citizens can simply ask — in Kinyarwanda, English, or French — and get instant, reliable answers about paying a traffic fine, checking an application status, renewing a visa, transferring land ownership and more. Rather than starting from a blank slate, the agent was built on the lived knowledge of Irembo's call center: every response was engineered and evaluated for both technical accuracy and the helpful, human tone people actually expect.",
    slug: 'irembo-ai',
    company: {
      name: 'Irembo',
      logo: 'irembo',
    },
    image: {
      src: 'https://pub-a0f6f56fff3c42b9bb30bd2143c99754.r2.dev/Gemini_Generated_Image_cgaca7cgaca7cgac.png',
      alt: 'IremboAI',
    },
    projectLink: 'https://irembo.gov.rw/home/citizen/all_services?lang=en',
    duration: 'Jan 2024 - Aug 2025',
    role: 'AI Engineer',
    stack: ['Python', 'React', 'LangChain', 'LangFuse'],
    category: 'webApp',
    methods: [
      {
        title: 'Understanding the Call Center',
        description:
          "Started by studying how Irembo's call center actually answers customers. This meant categorizing the topics citizens ask about most, mapping the questions to iremboGov services, and codifying the template answers agents rely on — turning years of tacit human knowledge into a structured foundation the AI could be built on.",
      },
      {
        title: 'Building a Human Evaluation Dataset',
        description:
          'Curated an evaluation dataset from real human responses to the most common questions coming through the call center. This golden set of question–answer pairs became the behavioural yardstick the agent would be measured against, grounding every later decision in what good, trusted human help looks like.',
      },
      {
        title: 'Building & Evaluating the AI Agent',
        description:
          'Built the AI agent and held it to a dual standard. Technically, it was measured on retrieval quality — document relevance, grounding, and faithfulness to source material. Behaviourally, it was scored against the human evaluation dataset to ensure its answers matched the accuracy and tone citizens expect, across all three languages.',
      },
      {
        title: 'Iterating to Internal Benchmarks',
        description:
          'Ran a tight loop of measurement and refinement — tuning retrieval, prompts, and guardrails while tracking every change with LangFuse — until the product consistently cleared the internal benchmarks set for accuracy, relevance, and trustworthiness before reaching citizens.',
      },
    ],
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
      src: 'https://minio-api.dartsmw.com/chienda.com/doorbell.jpg',
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
        src: 'https://minio-api.dartsmw.com/chienda.com/kajamu.jpg',
        alt: 'Chisomo Kajamu',
      },
      company: 'Doorbell',
      testimony:
        "Jeremiah has been instrumental in the development and growth of Doorbell. His technical expertise and leadership have been invaluable in shaping the app's user experience and functionality. His commitment to excellence and innovation has been a driving force behind Doorbell's success. We are proud to have him as a key member of our team and look forward to achieving even greater milestones together.",
    },
  },
  {
    title: 'Times Presidential Elections Dashboard 2025',
    subtitle:
      'Real-time election results dashboard covering the 2025 Malawian Presidential and Parliamentary Elections with minute-by-minute updates and comprehensive historical analysis.',
    description:
      'A cutting-edge interactive dashboard that provided comprehensive coverage of the 2025 Malawian elections. The platform delivered real-time election results as they were announced, featuring advanced data visualizations, interactive maps, and detailed breakdowns at national, regional, district, and constituency levels. The dashboard became the primary source for election information, handling millions of requests during the election period while maintaining exceptional performance and accuracy.',
    slug: 'times-elections-dashboard',
    company: {
      name: 'Times Group',
      logo: 'times',
    },
    image: {
      src: 'https://minio-api.dartsmw.com/chienda.com/times-tv.jpg',
      alt: 'Times Elections Dashboard',
    },
    projectLink: 'https://www.youtube.com/live/_IQyibJ2UHI?si=lGPJJw3y3Dm67YcI',
    duration: 'Nov 2024 - Sep 2025',
    role: 'Designer & Developer',
    stack: ['React', 'Node.js', 'MapBox', 'Tailwind', 'WebSockets'],
    category: 'webApp',
    methods: [
      {
        title: 'Real-time Data Architecture',
        description:
          'Designed and implemented a robust real-time data pipeline using WebSockets to ensure election results were displayed within seconds of official announcements. Built failover mechanisms and data validation layers to guarantee accuracy and reliability during peak traffic.',
      },
      {
        title: 'Interactive Geospatial Visualization',
        description:
          'Integrated MapBox to create dynamic, interactive maps showing election results at various administrative levels. Users could drill down from national overviews to specific polling stations, with color-coded visualizations indicating party performance and voter turnout.',
      },
      {
        title: 'Historical Analysis Integration',
        description:
          'Developed comprehensive historical comparison features allowing users to analyze voting patterns across multiple election cycles. Implemented sophisticated data models to track demographic trends, swing constituencies, and party performance evolution.',
      },
      {
        title: 'Responsive Design & Performance',
        description:
          'Created a fully responsive interface optimized for devices ranging from mobile phones to large broadcast displays. Implemented aggressive caching strategies and CDN distribution to handle millions of concurrent users while maintaining sub-second load times.',
      },
      {
        title: 'Broadcast Integration',
        description:
          'Designed special views optimized for live television broadcasts, including animated transitions and presenter-friendly layouts. Worked closely with the Times TV production team to ensure seamless integration with their broadcast systems.',
      },
    ],
    testimony: {
      name: 'Bayana Chunga',
      job: 'Station Manager',
      image: {
        src: 'https://raysofhopemalawi.org/wp-content/uploads/2023/11/Wayana-Chunga-768x786-1.jpeg',
        alt: 'Bayana Chunga',
      },
      company: 'Times Group',
      testimony:
        "Jeremiah's exceptional work on our Elections Dashboard transformed how Malawians experienced the 2025 elections. His innovative approach to real-time data visualization and his deep understanding of both technical and editorial requirements resulted in a platform that not only met but exceeded our ambitious goals. The dashboard became the definitive source for election information, with government officials, international observers, and citizens alike relying on it for accurate, timely updates. His ability to work under intense pressure while maintaining exceptional quality standards was remarkable. This project has set a new benchmark for election coverage in Malawi and across the region.",
    },
  },
  {
    title: 'MTL Smart App',
    subtitle:
      'A comprehensive mobile application for MTL customers to manage their mobile services including airtime top-ups, data bundles, balance checks, and advanced account management features.',
    description:
      'The MTL Smart App is a feature-rich mobile application that empowers MTL customers with complete control over their mobile services. Built with security at its core, the app allows users to easily top up airtime, purchase various data bundles, check their balance and data usage, share airtime and bundles with friends and family, and access detailed transaction history. The application features biometric authentication, end-to-end encryption, and fraud detection mechanisms to ensure the highest level of security for financial transactions. With an intuitive interface and real-time updates, the MTL Smart App has become an essential tool for millions of MTL customers across the network.',
    slug: 'mtl-smart-app',
    company: {
      name: 'MTL',
      logo: 'mtl',
    },
    image: {
      src: 'https://minio-api.dartsmw.com/chienda.com/mtl.jpg',
      alt: 'MTL Smart App',
    },
    projectLink: 'https://www.mtlyanga.mtl.mw/',
    duration: 'Mar 2023 - Present',
    role: 'Lead Mobile Engineer',
    stack: ['Flutter', '.NET', 'Kubernetes', 'PostgreSQL'],
    category: 'app',
    methods: [
      {
        title: 'Secure Transaction Architecture',
        description:
          'Implemented multi-layered security architecture featuring biometric authentication, end-to-end encryption, and real-time fraud detection. Integrated secure payment gateways with PCI-DSS compliance, ensuring all financial transactions are protected against unauthorized access and fraudulent activities.',
      },
      {
        title: 'Real-Time Service Management',
        description:
          'Developed a robust real-time system for instant airtime top-ups, bundle purchases, and balance inquiries. Implemented WebSocket connections for live updates, ensuring customers receive immediate confirmation of transactions and accurate account information at all times.',
      },
      {
        title: 'Intuitive User Experience Design',
        description:
          'Crafted a user-centric interface that simplifies complex telecommunications operations into intuitive workflows. Conducted extensive user research and testing to ensure the app is accessible to users of all technical backgrounds, from first-time smartphone users to power users.',
      },
      {
        title: 'Advanced Bundle & Airtime Sharing',
        description:
          'Created innovative features allowing users to share airtime and data bundles with other MTL users seamlessly. Implemented smart recipient management, transaction history, and scheduling capabilities to enhance the sharing experience and promote community connectivity.',
      },
      {
        title: 'Performance Optimization & Scalability',
        description:
          'Optimized the app for performance across various device specifications and network conditions, ensuring smooth operation even on low-end devices or slow networks. Implemented offline capabilities for critical features and built scalable backend infrastructure to handle millions of concurrent users during peak periods.',
      },
    ],
    testimony: {
      name: 'Kondwani Masiye',
      job: 'Chief Technology Officer',
      image: {
        src: 'https://www.dartsmw.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmasiye.61ff1d9c.jpg&w=384&q=75',
        alt: 'Kondwani Masiye',
      },
      company: 'MTL',
      testimony:
        "Jeremiah's work on the MTL Smart App has been transformative for our customer experience and digital transformation strategy. His technical prowess combined with his deep understanding of our customers' needs resulted in an application that is not only secure and reliable but also incredibly user-friendly. The app has significantly reduced the load on our customer service centers while increasing customer satisfaction scores. His implementation of advanced security features has set new standards in the telecommunications industry in Malawi. The scalability of the solution he architected has allowed us to grow our digital services exponentially. Working with Jeremiah has been a pleasure - his professionalism, innovation, and commitment to excellence are truly exceptional.",
    },
  },
];
