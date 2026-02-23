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
      <TabsList className="grid w-full lg:w-2/3 bg-card rounded-xl text-muted grid-cols-4">
        <TabsTrigger value="pitch">Elevator Pitch</TabsTrigger>
        <TabsTrigger value="brief">Brief Profile</TabsTrigger>
        <TabsTrigger value="full">Full Bio</TabsTrigger>
        <TabsTrigger value="pictures">Pictures</TabsTrigger>
      </TabsList>
      <TabsContent value="full" className="leading-7 text-lg text-default py-4">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img src={vertical.src} alt="Jeremiah Chienda — AI Engineer" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-y-4 ">
            <p>
              Jeremiah Chienda is an AI Engineer based in Kigali, Rwanda, where he leads AI and mobile engineering at{' '}
              <a href="https://irembo.com/" className="underline">
                Irembo
              </a>{' '}
              — the platform that digitizes government services for millions of Rwandan citizens.
            </p>
            <p>
              Over a career spanning 10+ years and 5 countries, Jeremiah has built production software across govtech,
              fintech, agriculture, telecom, and e-commerce. At Irembo, he architects LLM-powered agent systems, RAG
              pipelines, and AI-driven products that serve real users at national scale. He organized and led Irembo's
              first internal AI hackathon and actively contributes to the company's AI strategy.
            </p>
            <p>
              Before Irembo, Jeremiah was Lead Software Engineer at{' '}
              <a href="https://oneacrefund.org/" className="underline">
                One Acre Fund
              </a>
              , where he led a team building mobile and web applications serving over one million smallholder farmers
              across East Africa. He was a Software Developer at{' '}
              <a href="https://bestseller.com/" className="underline">
                Bestseller
              </a>{' '}
              in Denmark, and Software Architect at{' '}
              <a href="https://www.facebook.com/Baobabhealthtrust/" className="underline">
                Baobab Health Trust
              </a>{' '}
              in Malawi, where he worked on health information systems including the national{' '}
              <a href="https://zipatala.health.gov.mw/" className="underline">
                Master Health Facility Register
              </a>
              .
            </p>
            <p>
              Jeremiah holds a Master of Engineering from{' '}
              <a href="https://www.doshisha.ac.jp/en/" className="underline">
                Doshisha University
              </a>{' '}
              in Kyoto, Japan. He is currently pursuing Microsoft DP-700 (Fabric Data Engineer) and AI-102 (Azure AI
              Engineer Associate) certifications to deepen his expertise in enterprise AI and data platforms.
            </p>
            <p>
              He{' '}
              <a href="/blog" className="underline">
                writes about AI agent engineering
              </a>{' '}
              — covering agent memory, tool calling, MCP/A2A integrations, token economics, generative UI, and
              production safety patterns. He speaks at conferences and events across Africa on AI, software engineering,
              and the African tech ecosystem.
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
          Jeremiah Chienda is an AI Engineer and engineering lead at{' '}
          <a href="https://irembo.com/" className="underline">
            Irembo
          </a>
          , Rwanda's leading e-government platform. He specializes in AI agent systems, RAG architectures, and
          LLM-powered applications, with deep experience shipping software across fintech, govtech, agriculture, and
          telecom in Africa and Europe.
        </p>
        <p>
          Previously Lead Software Engineer at{' '}
          <a href="https://oneacrefund.org/" className="underline">
            One Acre Fund
          </a>
          , Software Developer at{' '}
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
          (Japan). Currently pursuing Microsoft DP-700 and AI-102 certifications.
        </p>
        <p>Speaker, writer, and gospel hip-hop artist.</p>
      </TabsContent>
      <TabsContent value="pitch" className="leading-7 text-lg text-default flex flex-col gap-y-4 my-4">
        <p>
          I'm Jeremiah Chienda — an <strong>AI Engineer</strong> with 10+ years building production software, currently
          leading AI and mobile engineering at{' '}
          <a href="https://irembo.com/" className="underline">
            Irembo
          </a>{' '}
          in Kigali, Rwanda.
        </p>
        <p>
          I design and ship AI agent systems, RAG pipelines, and LLM-powered products for govtech and fintech. I've
          built software used by millions across East and Southern Africa, led engineering teams of different sizes, and
          shipped across mobile, web, and cloud.
        </p>
        <p>
          I hold a Master of Engineering from{' '}
          <a href="https://www.doshisha.ac.jp/en/" className="underline">
            Doshisha University
          </a>{' '}
          (Japan), and a BSc from Malawi University of Business and Science.
        </p>
        <p>
          I also{' '}
          <a href="/blog" className="underline">
            write about AI agent engineering
          </a>
          , speak at conferences, and make gospel rap under the name{' '}
          <a href="https://getalinafe.com" className="underline">
            Liwu
          </a>
          .
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
