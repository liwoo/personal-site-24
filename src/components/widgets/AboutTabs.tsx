import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ImageModal } from './ImageModal';
import setup from '~/assets/images/setup.png';
import vertical from '~/assets/images/vertical.png';

export function AboutTabs() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; index: number } | null>(null);

  const images = Array.from({ length: 6 }, (_, i) => ({
    src: `https://minio-api.dartsmw.com/chienda.com/img-${i + 1}.jpg`,
    alt: `Picture ${i + 1}`,
  }));

  return (
    <Tabs defaultValue="pitch">
      <TabsList className="flex w-full lg:w-2/3 bg-card border border-gray-500/20 text-muted overflow-x-auto scrollbar-hide">
        <TabsTrigger value="pitch" className="flex-1 min-w-0">
          Pitch
        </TabsTrigger>
        <TabsTrigger value="brief" className="flex-1 min-w-0">
          Brief
        </TabsTrigger>
        <TabsTrigger value="full" className="flex-1 min-w-0">
          Full Bio
        </TabsTrigger>
        <TabsTrigger value="pictures" className="flex-1 min-w-0">
          Pics
        </TabsTrigger>
      </TabsList>
      <TabsContent value="full" className="leading-7 text-lg text-default py-4">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img src={vertical.src} alt="Jeremiah Chienda — AI Engineer" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-y-4 ">
            <p>
              Jeremiah Chienda builds trustworthy AI for high-stakes, regulated environments — the places where being
              wrong has consequences, and often the places tech forgets. A Malawian software and AI engineer based in
              the UK, he builds Data and AI solutions at the{' '}
              <a href="https://ico.org.uk/" className="underline">
                Information Commissioner's Office
              </a>{' '}
              (ICO), the UK's data regulator, where governance, PII and audit are the daily default rather than an
              afterthought.
            </p>
            <p>
              Over ten-plus years across five countries, he has shipped production software at national scale — and can
              point to what he built, precisely. He built the first version of{' '}
              <a href="/projects/irembo-ai" className="underline">
                IremboAI
              </a>
              , the trilingual assistant on Rwanda's national e-government platform, engineered and evaluated to a 95%
              internal benchmark for accuracy and tone. He built the real-time{' '}
              <a href="/projects/times-elections-dashboard" className="underline">
                Presidential Elections Dashboard
              </a>{' '}
              that became a primary results source on national television during Malawi's 2025 elections. He built the{' '}
              <a href="/projects/doorbell" className="underline">
                Doorbell
              </a>{' '}
              delivery app, which has processed over £440k for Malawian merchants, and the pharma/clinic module of
              mboraMAX. Earlier, he architected Malawi's national{' '}
              <a href="https://zipatala.health.gov.mw/" className="underline">
                Master Health Facility Register
              </a>
              .
            </p>
            <p>
              He was Lead Software Engineer at{' '}
              <a href="https://oneacrefund.org/" className="underline">
                One Acre Fund
              </a>
              , leading a team building mobile and web applications serving over one million smallholder farmers across
              East Africa. He was a Software Developer at{' '}
              <a href="https://bestseller.com/" className="underline">
                Bestseller
              </a>{' '}
              in Denmark, and a Software Architect at{' '}
              <a href="https://www.facebook.com/Baobabhealthtrust/" className="underline">
                Baobab Health Trust
              </a>{' '}
              in Malawi.
            </p>
            <p>
              He holds a Master of Engineering from{' '}
              <a href="https://www.doshisha.ac.jp/en/" className="underline">
                Doshisha University
              </a>{' '}
              in Kyoto, Japan, and is currently pursuing Microsoft DP-700 (Fabric Data Engineer) and AI-102 (Azure AI
              Engineer Associate) certifications to deepen his expertise in enterprise AI and data platforms.
            </p>
            <p>
              His work has been recognised beyond his own products — through EU/GOPA-supported consulting engagements, a
              UN digital-health approach, and international GovTech award platforms. He{' '}
              <a href="/blog" className="underline">
                writes about AI agent engineering
              </a>{' '}
              — agent memory, tool calling, MCP/A2A integrations, token economics, generative UI, and production safety
              patterns — and{' '}
              <a href="/speaking" className="underline">
                speaks internationally
              </a>{' '}
              on trustworthy AI and GovTech.
            </p>
            <p>
              Outside of engineering, Jeremiah is a gospel hip-hop artist performing under the name{' '}
              <a href="https://getalinafe.com" className="underline">
                Liwu
              </a>
              .
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="brief" className="leading-7 text-lg text-default flex flex-col gap-y-4 my-4">
        <img src={setup.src} alt="Jeremiah's desk setup" />
        <p>
          Jeremiah Chienda is a governance-grade AI engineer at the UK's{' '}
          <a href="https://ico.org.uk/" className="underline">
            Information Commissioner's Office
          </a>{' '}
          — a data regulator, where governance, PII and audit are the daily default. He specializes in AI agent systems,
          RAG architectures and LLM-powered products, and in making them safe enough to ship where being wrong has real
          consequences.
        </p>
        <p>
          His career traces a four-country arc: national health platforms in Malawi, a govtech assistant serving 12
          million citizens in Rwanda (where he led AI at{' '}
          <a href="https://irembo.gov.rw" className="underline">
            Africa's leading e-government platform
          </a>
          ), a Master of Engineering in Japan, and now a data regulator in the UK. Along the way: Lead Software Engineer
          at{' '}
          <a href="https://oneacrefund.org/" className="underline">
            One Acre Fund
          </a>{' '}
          (1M+ farmers), Software Developer at{' '}
          <a href="https://bestseller.com/" className="underline">
            Bestseller
          </a>{' '}
          (Denmark), and Software Architect at{' '}
          <a href="https://www.facebook.com/Baobabhealthtrust/" className="underline">
            Baobab Health Trust
          </a>{' '}
          (Malawi). Master of Engineering,{' '}
          <a href="https://www.doshisha.ac.jp/en/" className="underline">
            Doshisha University
          </a>{' '}
          (Japan).
        </p>
        <p>
          Speaker, writer, and gospel hip-hop artist performing as{' '}
          <a href="https://getalinafe.com" className="underline">
            Liwu
          </a>
          .
        </p>
      </TabsContent>
      <TabsContent value="pitch" className="leading-7 text-lg text-default flex flex-col gap-y-4 my-4">
        <p>
          I'm Jeremiah Chienda — a <strong>governance-grade AI engineer</strong>. I build trustworthy AI for
          high-stakes, regulated environments, currently inside the UK's{' '}
          <a href="https://ico.org.uk/" className="underline">
            Information Commissioner's Office
          </a>{' '}
          — a data regulator.
        </p>
        <p>
          Ten years, four countries, national scale: builder, regulator and responsible-AI practitioner in one — from
          health data in Malawi to a govtech assistant serving 12 million Rwandans.
        </p>
      </TabsContent>
      <TabsContent value="pictures" className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg bg-card cursor-pointer group"
              onClick={() => setSelectedImage({ ...image, index })}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        imageIndex={selectedImage?.index || 0}
      />
    </Tabs>
  );
}
