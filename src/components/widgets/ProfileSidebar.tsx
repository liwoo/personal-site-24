import { useState, type ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Briefcase, Brain, GraduationCap, Download, Bot, Code, Database, Cloud, Award, Container, Ship, Rabbit, Sparkles, HardDrive, Columns3, Search, Wrench, ShieldCheck, SlidersHorizontal, LayoutDashboard, ChevronDown, FlaskConical, Anvil } from 'lucide-react';
import { workExperience } from '~/data/work-experience';

import iremboLogo from '~/assets/images/logos/png/irembo-symbol.png';
import bestsellerLogo from '~/assets/images/logos/png/bestseller-symbol.png';
import oafLogo from '~/assets/images/logos/png/oaf-symbol.png';
import bhtLogo from '~/assets/images/logos/png/bht-symbol.png';
import nbsLogo from '~/assets/images/logos/png/nbs-symbol.png';

import reactLight from '~/assets/images/logos/png/react-light.png';
import reactDark from '~/assets/images/logos/png/react-dark.png';
import flutterLight from '~/assets/images/logos/png/flutter-light.png';
import flutterDark from '~/assets/images/logos/png/flutter-dark.png';
import nextLight from '~/assets/images/logos/png/next-light.png';
import nextDark from '~/assets/images/logos/png/next-dark.png';
import dotnetLight from '~/assets/images/logos/png/dotnet-light.png';
import dotnetDark from '~/assets/images/logos/png/dotnet-dark.png';
import tsLight from '~/assets/images/logos/png/ts-light.png';
import tsDark from '~/assets/images/logos/png/ts-dark.png';
import golangLight from '~/assets/images/logos/png/golang-light.png';
import golangDark from '~/assets/images/logos/png/golang-dark.png';

import mubasLogo from '~/assets/images/logos/png/mubas-symbol.png';
import doshishaLogo from '~/assets/images/logos/png/doshisha-symbol.gif';

const logoMap: Record<string, string> = {
  irembo: iremboLogo.src,
  bestseller: bestsellerLogo.src,
  oaf: oafLogo.src,
  bht: bhtLogo.src,
  nbs: nbsLogo.src,
};

type SmallBadge =
  | { label: string; href?: string; light: string; dark: string; icon?: never }
  | { label: string; href?: string; icon: ReactNode; light?: never; dark?: never };

const aiBadges: SmallBadge[] = [
  { label: 'Agent Systems', icon: <Brain className="w-3.5 h-3.5" />, href: '/ai-agents-use-cases' },
  { label: 'RAG & Search', icon: <Search className="w-3.5 h-3.5" />, href: '/rag-is-all-you-need' },
  { label: 'Tool Use & MCP', icon: <Wrench className="w-3.5 h-3.5" />, href: '/the-power-platform-awakening' },
  { label: 'Safety & HITL', icon: <ShieldCheck className="w-3.5 h-3.5" />, href: '/the-machine-minder' },
  { label: 'Eval + Alignment', icon: <SlidersHorizontal className="w-3.5 h-3.5" />, href: '/tag/ai' },
  { label: 'Gen-UI', icon: <LayoutDashboard className="w-3.5 h-3.5" />, href: '/tag/ai' },
];

const fullstackBadges: SmallBadge[] = [
  { label: 'React', light: reactLight.src, dark: reactDark.src, href: 'https://react.dev' },
  { label: 'Next.js', light: nextLight.src, dark: nextDark.src, href: 'https://nextjs.org' },
  { label: 'Flutter', light: flutterLight.src, dark: flutterDark.src, href: 'https://flutter.dev' },
  { label: 'TypeScript', light: tsLight.src, dark: tsDark.src, href: 'https://typescriptlang.org' },
  { label: '.NET', light: dotnetLight.src, dark: dotnetDark.src, href: 'https://dotnet.microsoft.com' },
  { label: 'Go', light: golangLight.src, dark: golangDark.src, href: 'https://go.dev' },
];

const dataBadges: SmallBadge[] = [
  { label: 'Postgres', icon: <Database className="w-3.5 h-3.5" />, href: 'https://postgresql.org' },
  { label: 'Couchbase', icon: <HardDrive className="w-3.5 h-3.5" />, href: 'https://couchbase.com' },
  { label: 'MS Fabric', icon: <Columns3 className="w-3.5 h-3.5" />, href: 'https://microsoft.com/microsoft-fabric' },
  { label: 'Spark', icon: <Sparkles className="w-3.5 h-3.5" />, href: 'https://spark.apache.org' },
  { label: 'RabbitMQ', icon: <Rabbit className="w-3.5 h-3.5" />, href: 'https://rabbitmq.com' },
];

const infraBadges: SmallBadge[] = [
  { label: 'Docker', icon: <Container className="w-3.5 h-3.5" />, href: 'https://docker.com' },
  { label: 'Kubernetes', icon: <Ship className="w-3.5 h-3.5" />, href: 'https://kubernetes.io' },
  { label: 'Azure', icon: <Cloud className="w-3.5 h-3.5" />, href: 'https://azure.microsoft.com' },
  { label: 'LangSmith', icon: <FlaskConical className="w-3.5 h-3.5" />, href: 'https://smith.langchain.com' },
  { label: 'Foundry', icon: <Anvil className="w-3.5 h-3.5" />, href: 'https://ai.azure.com' },
];

function Badge({ badge }: { badge: SmallBadge }) {
  const content = (
    <>
      {badge.light ? (
        <>
          <img src={badge.dark} alt={badge.label} className="w-4 h-4 object-contain block dark:hidden" />
          <img src={badge.light} alt={badge.label} className="w-4 h-4 object-contain hidden dark:block" />
        </>
      ) : (
        <span className="text-muted-foreground">{badge.icon}</span>
      )}
      <span className="text-[10px] font-medium text-muted">{badge.label}</span>
    </>
  );

  const cls = "flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-page px-2 py-1 hover:border-primary transition-colors shrink-0 whitespace-nowrap";

  if (badge.href) {
    return (
      <a href={badge.href} className={cls} target={badge.href.startsWith('http') ? '_blank' : undefined} rel={badge.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return <div className={cls}>{content}</div>;
}

function IconAvatar({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center bg-page shrink-0">
      {children}
    </div>
  );
}

function LogoAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-700"
    />
  );
}

function BadgeSection({ icon, title, badges }: { icon: ReactNode; title: string; badges: SmallBadge[] }) {
  return (
    <div>
      <div className="flex text-muted gap-x-3 mb-3">
        <div className="shrink-0 pt-0.5">
          <IconAvatar>{icon}</IconAvatar>
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <h4 className="font-semibold text-default text-lg m-0 leading-tight">{title}</h4>
        </div>
      </div>
      <div className="flex gap-2 ml-[60px] overflow-x-auto scrollbar-hide pb-1">
        {badges.map((badge) => (
          <Badge key={badge.label} badge={badge} />
        ))}
      </div>
    </div>
  );
}

function EntryRow({
  avatar,
  title,
  subtitle,
  meta,
  items,
}: {
  avatar: ReactNode;
  title: string;
  subtitle?: string;
  meta?: string;
  items?: string[];
}) {
  return (
    <div className="flex text-muted gap-x-3">
      <div className="shrink-0 pt-0.5">{avatar}</div>
      <div className="flex w-full gap-x-2 justify-between min-w-0">
        <div className="flex flex-col min-w-0">
          <h4 className="font-semibold text-default text-lg m-0 leading-tight">{title}</h4>
          {subtitle && <p className="text-sm mt-0.5">{subtitle}</p>}
          {items && items.length > 0 && (
            <ul className="text-xs text-muted mt-1.5 list-disc list-inside space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {meta && (
          <div className="shrink-0 text-right">
            <span className="text-xs font-semibold">{meta}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const linkedIn = 'https://linkedin.com/in/jchienda';
const VISIBLE_COUNT = 3;

function HistoryList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? workExperience : workExperience.slice(0, VISIBLE_COUNT);
  const hiddenCount = workExperience.length - VISIBLE_COUNT;

  return (
    <>
      <div className="flex flex-col gap-y-6 mt-4">
        {visible.map((exp) => (
          <EntryRow
            key={exp.title}
            avatar={<LogoAvatar src={logoMap[exp.image]} alt={exp.title} />}
            title={exp.title}
            subtitle={`${exp.position} · ${exp.location}`}
            meta={exp.duration}
            items={exp.description}
          />
        ))}
      </div>
      {hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 mx-auto mt-4 text-xs font-medium text-muted hover:text-primary transition-colors cursor-pointer"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          {expanded ? 'Show less' : `Show ${hiddenCount} more`}
        </button>
      )}
      <div className="mx-auto my-8">
        <a href={linkedIn} className="btn-primary">
          View LinkedIn Profile
        </a>
      </div>
    </>
  );
}

export function ProfileSidebar() {
  return (
    <div className="w-full flex flex-col rounded-xl bg-card py-4 px-4 lg:px-8 min-w-0 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Profile</h3>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-black hover:bg-secondary hover:text-white transition-colors duration-200"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>
      </div>

      <Tabs defaultValue="history">
        <TabsList className="grid w-full bg-card rounded-xl text-muted grid-cols-3">
          <TabsTrigger value="history" className="gap-x-1.5 text-xs">
            <Briefcase className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">History</span>
          </TabsTrigger>
          <TabsTrigger value="expertise" className="gap-x-1.5 text-xs">
            <Brain className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Expertise</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="gap-x-1.5 text-xs">
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Education</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <HistoryList />
        </TabsContent>

        <TabsContent value="expertise">
          <div className="flex flex-col gap-y-6 mt-4">
            <BadgeSection
              icon={<Bot className="w-5 h-5 text-muted-foreground" />}
              title="AI Agent Engineering"
              badges={aiBadges}
            />
            <BadgeSection
              icon={<Code className="w-5 h-5 text-muted-foreground" />}
              title="Fullstack & Mobile"
              badges={fullstackBadges}
            />
            <BadgeSection
              icon={<Database className="w-5 h-5 text-muted-foreground" />}
              title="Data & Messaging"
              badges={dataBadges}
            />
            <BadgeSection
              icon={<Cloud className="w-5 h-5 text-muted-foreground" />}
              title="Infrastructure"
              badges={infraBadges}
            />
          </div>
        </TabsContent>

        <TabsContent value="education">
          <div className="flex flex-col gap-y-6 mt-4">
            <EntryRow
              avatar={<LogoAvatar src={doshishaLogo.src} alt="Doshisha University" />}
              title="Master of Engineering"
              subtitle="Doshisha University, Kyoto, Japan"
            />
            <EntryRow
              avatar={<LogoAvatar src={mubasLogo.src} alt="MUBAS" />}
              title="BSc Information Technology"
              subtitle="MUBAS, Blantyre, Malawi (with Credit)"
            />
            <div className="flex text-muted gap-x-3">
              <div className="shrink-0 pt-0.5">
                <IconAvatar><Award className="w-5 h-5 text-muted-foreground" /></IconAvatar>
              </div>
              <div className="flex w-full gap-x-2 justify-between min-w-0">
                <div className="flex flex-col min-w-0">
                  <h4 className="font-semibold text-default text-lg m-0 leading-tight">Certifications</h4>
                  <ul className="text-xs text-muted mt-1.5 space-y-1.5">
                    <li>
                      <a href="https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Microsoft Certified: Fabric Data Engineer Associate (DP-700)
                      </a>
                    </li>
                    <li>
                      <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Microsoft Certified: Azure AI Engineer Associate (AI-102)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs font-semibold">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
