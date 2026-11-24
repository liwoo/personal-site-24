import type { Project } from '~/types';

export const projects: Project[] = [
  {
    title: 'IremboAI',
    subtitle:
      "A trilingual AI assistant that answers citizens' questions about iremboGov services.",
    description:
      "Citizens used to queue on the call center for help with government services. With IremboAI they ask in Kinyarwanda, English or French and get an answer straight away: paying a traffic fine, checking an application, renewing a visa, transferring land. We built it on the call center's own knowledge, and scored every answer for accuracy and tone.",
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
    role: 'AI Engineering Lead',
    stack: ['Python', 'React', 'LangChain', 'Langfuse'],
    category: 'webApp',
    methods: [
      {
        title: 'Mapping the call center',
        description:
          'Sorted the questions citizens ask most, mapped them to iremboGov services and wrote down the template answers agents rely on.',
      },
      {
        title: 'A human evaluation set',
        description:
          'Built a golden set of real call center answers to the most common questions. It became the yardstick for every decision after.',
      },
      {
        title: 'Building and scoring the agent',
        description:
          'Scored retrieval for relevance, grounding and faithfulness, and scored answers against the golden set for accuracy and tone, in all 3 languages.',
      },
      {
        title: 'Iterating to the benchmark',
        description:
          'Tuned retrieval, prompts and guardrails, tracked every change in Langfuse, and shipped once it cleared the internal benchmarks.',
      },
    ],
  },
  {
    title: 'Master Health Facility Registry',
    subtitle:
      "Malawi's register of every health facility, built with the Ministry of Health on OpenHIE.",
    description:
      "The MFL is a database of every health facility in Malawi, from private hospitals to village clinics, with the resources, utilities and services each one has. It's the facility registry in Malawi's OpenHIE interoperability layer.",
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
    stack: ['React', 'Node.js', 'JavaScript', 'FHIR'],
    category: 'webApp',
    methods: [
      {
        title: 'Stakeholder collaboration',
        description:
          'Gathered requirements with project managers, District Health Officers and development partners.',
      },
      {
        title: 'FHIR, with OpenHIE',
        description:
          'Worked with the OpenHIE community to align the registry with FHIR, and checked feasibility before building.',
      },
      {
        title: 'Agile delivery',
        description:
          'Ran the design and build sprints, holding deadlines while the requirements moved.',
      },
      {
        title: 'Community engagement',
        description:
          'Led workshops with the Ministry and communities to fill the registry with accurate data.',
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
      "Centenary Bank Malawi's new website after it acquired MyBucks Bank. 95+ on Lighthouse.",
    description:
      "A responsive site for the bank's customers, with a loan calculator, a branch locator and a secure online banking portal. Built for speed: 95+ on every Lighthouse metric.",
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
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GraphQL'],
    category: 'website',
    methods: [
      {
        title: 'Requirements',
        description:
          "Worked through feature priorities with the bank's stakeholders, using customer feedback to decide what made the cut.",
      },
      {
        title: 'Design',
        description:
          "Took the design from rough mockups to high-fidelity Figma files in the bank's branding, iterating on feedback.",
      },
      {
        title: 'Build',
        description:
          'Ran the build on a fixed schedule with regular check-ins, so issues surfaced early.',
      },
      {
        title: 'Training',
        description:
          "Trained the bank's team on the CMS so they can run the site themselves.",
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
    title: 'GeniYanga',
    subtitle:
      'A till on your phone that turns a small business\'s sales history into stock credit for its next order.',
    description:
      "GeniYanga turns 3 months of sales rung up on a phone into a trading history a lender can approve against. The till is live today; stock credit is in pilot with lenders and suppliers. It matters because Malawi's 1.6 million small businesses carry about 40% of the economy, yet about 1 in 10 can get a loan.",
    slug: 'geniyanga',
    company: {
      name: 'GeniYanga',
      logo: 'geniyanga',
    },
    image: {
      src: 'https://geniyanga.mw/mobile/og.jpg',
      alt: 'A market trader taking a payment on GeniYanga',
    },
    projectLink: 'https://geniyanga.mw',
    duration: '2024 - Present',
    role: 'Founder & Engineer',
    stack: ['Next.js', 'Golang', 'SQL'],
    category: 'webApp',
    methods: [
      {
        title: 'Sale: a till that fits the counter',
        description:
          'Tap or scan, take cash, Airtel Money or Mpamba, and issue MRA EIS receipts. Works offline, syncs across stores, and covers lay-bye, storefronts, bookings and event tickets.',
      },
      {
        title: 'Approve: sales history as credit score',
        description:
          '3 months of till data plus a TPIN give a lender a trader they can actually see. A partners portal opens that view to banks, MFIs, SACCOs and digital lenders.',
      },
      {
        title: 'Restock: credit paid as stock',
        description:
          'Approved credit goes to partner suppliers as stock, so it lands where it grows the business.',
      },
      {
        title: 'Grow: repay from every sale',
        description:
          'Repayment is a small share of each sale on the till, so it moves with the trader\'s cash flow.',
      },
    ],
    testimony: {
      name: 'Chisomo Gondwe',
      job: 'Operations Director',
      image: {
        src: 'https://images.unsplash.com/photo-1771771425345-ea40b23e8220?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Chisomo Gondwe',
      },
      company: 'Gojet Investments',
      testimony:
        'Reaching our farmers in the rural areas used to mean paperwork, guesswork and a lot of trips back and forth. With GeniYanga our agents now record sales, track stock and take payments straight from their phones, even when the network drops out. We are serving farmers in places we used to struggle to reach, and for the first time the numbers actually add up at the end of the day.',
    },
  },
  {
    title: 'Eh Khristu',
    subtitle:
      'Church giving in 9 African countries: mobile money, card or bank app, every gift in one place.',
    description:
      'Most churches still count offerings by hand and reconcile mobile money from screenshots. Eh Khristu gives each church one giving link or QR code. Members give without an account, and treasurers see every gift land in a live dashboard, split by fund and campaign. It takes no cut of offerings on any plan.',
    slug: 'eh-khristu',
    company: {
      name: 'Eh Khristu',
      logo: 'ehkhristu',
    },
    image: {
      src: 'https://pub-aae4f72dd7e642ba8de3e090625bee40.r2.dev/eh-khristu-main.jpg',
      alt: 'Eh Khristu: church giving across Africa',
    },
    projectLink: 'https://ehkhristu.org',
    duration: '2026 - Present',
    role: 'Founder & Engineer',
    stack: ['Golang', 'Goravel', 'React', 'Inertia'],
    category: 'webApp',
    methods: [
      {
        title: 'One link, no account',
        description:
          'A giving link or QR code per church. Members pay with whatever works in their country, without signing up.',
      },
      {
        title: 'Every gift in one ledger',
        description:
          'Online gifts post when the provider confirms; cash is recorded against a member, fund and method, so the books close on one screen.',
      },
      {
        title: 'Funds, campaigns and statements',
        description:
          'Tithe, building, missions and more, with goals and dates, plus giving statements and CSV, Excel and PDF exports.',
      },
      {
        title: 'Multi-country payments',
        description:
          'Each church connects its own provider account: OneKhusa in Malawi, DPO Pay across the other 8 markets.',
      },
    ],
  },
  {
    title: 'Roomcast',
    subtitle:
      'Walk a 3D "after" of your room before you build it, with a priced shopping list down to the hinges.',
    description:
      "Homeowners pick finishes from flat pictures and find out at the till what the room really costs. Roomcast starts from photos and a few measurements, builds a 3D model you can walk through in a browser, and counts every item in it into a BuildSheet priced at UK and US stores. It's in early access.",
    slug: 'roomcast',
    company: {
      name: 'Roomcast',
      logo: 'roomcast',
    },
    image: {
      src: 'https://roomcast.ai/assets/og.jpg',
      alt: 'Roomcast: a walkable 3D preview of a renovated kitchen',
    },
    projectLink: 'https://roomcast.ai',
    duration: '2026 - Present',
    role: 'Founder & Engineer',
    stack: ['Three.js', 'Blender', 'Python'],
    category: 'webApp',
    methods: [
      {
        title: 'Snap the room',
        description:
          'A phone scan or a few photos plus tape-measure numbers. LiDAR helps but isn\'t required.',
      },
      {
        title: 'Walk the "after"',
        description:
          'Eye-height free roam in any browser, a Today/After toggle, doors that open and a dusk mode for the lighting plan.',
      },
      {
        title: 'The model writes the list',
        description:
          'Quantities are counted from the 3D model: 16 doors means 32 hinges. Paint, tile and flooring carry a waste allowance, and lines that need a qualified trade are flagged.',
      },
    ],
  },
  {
    title: 'Signal',
    subtitle:
      'A narrative coding game: write real Go to break Dr. Maya Chen out of a locked-down facility.',
    description:
      'You play the person on the outside helping Maya Chen, a cryptographer trapped in a compromised facility. Every door you open and every system you bypass is a real Go program, run on the official Go Playground. 4 acts take you from variables and slices to goroutines, channels, HTTP, JSON, databases and CLI tools.',
    slug: 'signal',
    company: {
      name: 'Signal',
      logo: 'signal',
    },
    image: {
      src: 'https://www.playsignal.xyz/og.jpg',
      alt: 'Signal: learn Go by saving Dr. Maya Chen',
    },
    projectLink: 'https://www.playsignal.xyz/',
    duration: '2025 - Present',
    role: 'Creator & Engineer',
    stack: ['Next.js', 'React'],
    category: 'webApp',
    methods: [
      {
        title: 'Story-first curriculum',
        description:
          'Each Go concept arrives because the story needs it, so goroutines and channels show up as tools for the next door.',
      },
      {
        title: 'A real compiler',
        description:
          'Every line compiles and runs on the official Go Playground, so learners build muscle memory on the real toolchain, mistakes and all.',
      },
      {
        title: 'An AI tutor that nudges',
        description:
          'The tutor reads the failing code and points toward the fix without handing it over.',
      },
      {
        title: 'Boss fights and Zen',
        description:
          'Timed, multi-file debugging boss fights test what stuck, and the Zen system gives bonus points for idiomatic Go.',
      },
    ],
    testimony: {
      name: 'Gergio Tarkowksy',
      job: 'Software Engineer',
      image: {
        src: 'https://i.pravatar.cc/300?img=12',
        alt: 'Gergio Tarkowksy',
      },
      company: 'Lilongwe, Malawi',
      testimony:
        "I'd avoided backend roles for years because my Go was basically zero, and almost every job I wanted listed it as a requirement. Signal is the first time learning a language felt like playing something I actually wanted to finish. Saving Dr. Chen pulled me through the exact concepts I'd bounced off before, goroutines and channels and all of it. I just sat my first interview for a Go role without flinching.",
    },
  },
  {
    title: 'Doorbell Mobile App',
    subtitle:
      "Food and grocery delivery from Malawi's stores and restaurants, to your door.",
    description:
      "Doorbell is Malawi's leading on-demand delivery service. Customers order from restaurants and stores in a few taps, pay how they like and track the order in real time.",
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
        title: 'Ordering in a few taps',
        description:
          'A short path from browsing to checkout.',
      },
      {
        title: 'Real-time tracking',
        description:
          'Live order tracking from pickup to the door.',
      },
      {
        title: 'Payments',
        description:
          'Cards, mobile money and other digital payments.',
      },
      {
        title: 'Talking to the rider',
        description:
          'In-app messaging between customers and delivery agents for questions and special instructions.',
      },
      {
        title: 'Speed and scale',
        description:
          'Tuned for fast loads and built to hold up at peak demand.',
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
    title: 'Presidential Elections Dashboard',
    subtitle:
      "Live results for Malawi's 2025 presidential and parliamentary elections, with historical context.",
    description:
      'An interactive dashboard for the 2025 Malawian elections. Results landed as they were announced, with maps and breakdowns at national, regional, district and constituency level. It handled millions of requests over the election period.',
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
        title: 'Real-time pipeline',
        description:
          'A WebSocket pipeline put results on screen within seconds of the official announcement, with failover and validation for accuracy under peak load.',
      },
      {
        title: 'Maps',
        description:
          'MapBox maps coloured by party and turnout, drilling down from the national view to individual polling stations.',
      },
      {
        title: 'History',
        description:
          'Voting patterns across election cycles, including swing constituencies and party trends.',
      },
      {
        title: 'Phones to broadcast screens',
        description:
          'Responsive from mobile up to TV displays, with caching and a CDN for sub-second loads.',
      },
      {
        title: 'Broadcast views',
        description:
          'Presenter-friendly layouts and animated transitions, built with the Times TV production team.',
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
      "MTL's self-service app for airtime, data bundles, balances and sharing.",
    description:
      'The MTL Smart App lets customers top up airtime, buy data bundles, check balance and usage, share airtime and bundles, and see their transaction history. Biometric login, end-to-end encryption and fraud detection protect every transaction.',
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
        title: 'Secure transactions',
        description:
          'Biometric auth, end-to-end encryption, real-time fraud detection and PCI-DSS compliant payment gateways.',
      },
      {
        title: 'Real-time services',
        description:
          'Instant top-ups, bundle purchases and balance checks, confirmed live over WebSockets.',
      },
      {
        title: 'Built for every user',
        description:
          'User research and testing so first-time smartphone users and power users both get through quickly.',
      },
      {
        title: 'Sharing',
        description:
          'Send airtime and bundles to other MTL users, with saved recipients, history and scheduling.',
      },
      {
        title: 'Low-end devices, slow networks',
        description:
          'Runs on low-end phones and weak connections, with offline support for key features and a backend that scales through peaks.',
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
