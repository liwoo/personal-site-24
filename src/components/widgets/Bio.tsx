import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import Tweet from './Tweet';
import setup from '~/assets/images/setup.png';
import vertical from '~/assets/images/vertical.png';

export function Bio() {
  return (
    <Tabs defaultValue="pitch">
      <TabsList className="grid w-full lg:w-2/3 bg-card rounded-xl text-muted grid-cols-3">
        <TabsTrigger value="pitch">Elavator Pitch</TabsTrigger>
        <TabsTrigger value="brief">Brief Profile</TabsTrigger>
        <TabsTrigger value="full">Full Bio</TabsTrigger>
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
              He is currently an AI Engineer at{' '}
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
              Having been born and raised in Malawi, Jeremiah, during his time at{' '}
              <a href="https://www.facebook.com/Baobabhealthtrust/" className="underline">
                Baobab Health Trust
              </a>{' '}
              where he worked with the{' '}
              <a href="https://www.kuunika.org/" className="underline">
                Ministry of Health
              </a>{' '}
              to usher in a{' '}
              <a href="https://zipatala.health.gov.mw/" className="underline">
                National Facility Registry
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
            <p>
              He holds a Masters of Engineering Degree from{' '}
              <a href="https://www.doshisha.ac.jp/en/">Doshisha University in Japan</a> with a focus on Natural Language
              Processing (NLP) and a Bachelors of Science from the{' '}
              <a href="https://mubas.ac.mw/">Malawi University of Business and Applied Science</a>.
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
    </Tabs>
  );
}
