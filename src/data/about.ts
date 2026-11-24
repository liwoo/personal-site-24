/**
 * Content for /about that isn't a career row (those live in
 * `work-experience.ts`): expertise chips, education, certifications and the
 * press headshots.
 */

export interface ExpertiseGroup {
  title: string;
  items: Array<{ label: string; href?: string }>;
}

export const expertise: ExpertiseGroup[] = [
  {
    title: 'AI agent engineering',
    items: [
      { label: 'Agent systems', href: '/ai-agents-use-cases' },
      { label: 'RAG & search', href: '/rag-is-all-you-need' },
      { label: 'Tool use & MCP', href: '/the-power-platform-awakening' },
      { label: 'Safety & HITL', href: '/the-machine-minder' },
      { label: 'Evals & alignment', href: '/tag/ai' },
      { label: 'Gen-UI', href: '/tag/ai' },
    ],
  },
  {
    title: 'Fullstack & mobile',
    items: [
      { label: 'React', href: 'https://react.dev' },
      { label: 'Next.js', href: 'https://nextjs.org' },
      { label: 'Flutter', href: 'https://flutter.dev' },
      { label: 'TypeScript', href: 'https://typescriptlang.org' },
      { label: '.NET', href: 'https://dotnet.microsoft.com' },
      { label: 'Go', href: 'https://go.dev' },
    ],
  },
  {
    title: 'Data & messaging',
    items: [
      { label: 'Postgres', href: 'https://postgresql.org' },
      { label: 'Couchbase', href: 'https://couchbase.com' },
      { label: 'MS Fabric', href: 'https://microsoft.com/microsoft-fabric' },
      { label: 'Spark', href: 'https://spark.apache.org' },
      { label: 'RabbitMQ', href: 'https://rabbitmq.com' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { label: 'Docker', href: 'https://docker.com' },
      { label: 'Kubernetes', href: 'https://kubernetes.io' },
      { label: 'Azure', href: 'https://azure.microsoft.com' },
      { label: 'LangSmith', href: 'https://smith.langchain.com' },
      { label: 'Foundry', href: 'https://ai.azure.com' },
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  place: string;
  /** Key into `src/assets/images/logos/png/<logo>-symbol.*`. */
  logo: 'doshisha' | 'mubas';
  note?: string;
}

export const education: EducationEntry[] = [
  { degree: 'Master of Engineering', school: 'Doshisha University', place: 'Kyoto, Japan', logo: 'doshisha' },
  {
    degree: 'BSc Information Technology',
    school: 'MUBAS',
    place: 'Blantyre, Malawi',
    logo: 'mubas',
    note: 'with Credit',
  },
];

export const certifications: Array<{ code: string; title: string; href: string; status: string }> = [
  {
    code: 'DP-700',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    href: 'https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/',
    status: 'in progress',
  },
  {
    code: 'AI-102',
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
    status: 'in progress',
  },
];

/** Press headshots, 1024 × 1024. */
export const headshots: Array<{ src: string; alt: string }> = [
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-1.jpg', alt: 'Jeremiah Chienda in a green velvet suit' },
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-2.jpg', alt: 'Jeremiah Chienda in a grey double-breasted suit' },
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-3.jpg', alt: 'Jeremiah Chienda in a black suit' },
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-4.jpg', alt: 'Jeremiah Chienda in a pinstripe jacket and blue tie' },
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-5.jpg', alt: 'Jeremiah Chienda in a charcoal suit and blue tie' },
  { src: 'https://minio-api.dartsmw.com/chienda.com/img-6.jpg', alt: 'Jeremiah Chienda in a grey parka' },
];
