import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ImageModal } from './ImageModal';
import Tweet from './Tweet';
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
        <TabsTrigger value="pitch">Elavator Pitch</TabsTrigger>
        <TabsTrigger value="brief">Brief Profile</TabsTrigger>
        <TabsTrigger value="full">Full Bio</TabsTrigger>
        <TabsTrigger value="pictures">Pictures</TabsTrigger>
      </TabsList>
      <TabsContent value="full" className="leading-7 text-lg text-default py-4">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img src={vertical.src} alt="Vertical Image of Jeremiah" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-y-4 ">
            <p>
              Jeremiah is a seasoned and passionate Software Engineer with 8 years of professional experience across
              multiple industries worldwide.
            </p>
            <p>
              He is currently working on applying Generative AI at{' '}
              <a href="https://irembo.com/" className="underline">
                Irembo
              </a>
              , where he helps build the next generation of{' '}
              <a href="https://irembo.gov.rw/" className="underline">
                Government Services
              </a>{' '}
              in Rwanda for more than 12M citizens.
            </p>
            <p>
              Before that, he had a brief sting with Danish-based{' '}
              <a href="https://bestseller.com/" className="underline">
                Bestseller
              </a>
              , after having helped more than{' '}
              <a href="https://oneacrefund.org/our-impact" className="underline">
                1M farmers accross 9 African countries
              </a>{' '}
              improve their agricultural yields while at{' '}
              <a href="https://oneacrefund.org/" className="underline">
                One Acre Fund
              </a>
            </p>
            <p>
              Having been born and raised in Malawi, Jeremiah developed the National{' '}
              <a href="https://zipatala.health.gov.mw/" className="underline">
                Master Facility Registry
              </a>{' '}
              during his time at{' '}
              <a href="https://www.facebook.com/Baobabhealthtrust/" className="underline">
                Baobab Health Trust
              </a>{' '}
              where he worked with the{' '}
              <a href="https://www.kuunika.org/" className="underline">
                Ministry of Health
              </a>{' '}
              .
            </p>
            <p>
              He holds a Masters of Engineering Degree from{' '}
              <a href="https://www.doshisha.ac.jp/en/" className="underline">
                Doshisha University in Japan
              </a>{' '}
              with a focus on Natural Language Processing (NLP) and a Bachelors of Science from the{' '}
              <a href="https://mubas.ac.mw/" className="underline">
                Malawi University of Business and Applied Science
              </a>
              .
            </p>
            <p>
              Jeremiah is also a Board Member of{' '}
              <a href="https://www.doorbell.mw/" className="underline">
                Doorbell Malawi
              </a>{' '}
              where provides Technical mentorship to one of the most exciting tech-enabled startup disrupting the
              consumer goods retail industry in the country.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="brief" className="leading-7 text-lg text-default flex flex-col gap-y-4 my-4">
        <img src={setup.src} alt="Jeremiahs desk setup" />
        <p>
          A Full Stack Engineer with 7+ years of experience leading multinational Engineering teams accross HealthTech,
          FinTech, AgriTech and GovTech in Africa.
        </p>
        <p>
          Jeremiah holds a Masters of Engineering Degree with a focus on Artificial Intelligence as applied to Natural
          Language Processing.
        </p>
        <p>
          <a href="/blog" className="underline hover:text-default">
            Follow his blog
          </a>{' '}
          where he writes about his experiences as a Software Engineer, or book him at your event if you need an expert
          to talk about a wide range of Software Engineering topics including Blockchain Technology and its practical
          usecases today.
        </p>
      </TabsContent>
      <TabsContent value="pitch">
        <Tweet />
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
