import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

export function Bio() {
  return (
    <Tabs defaultValue="pitch">
      <TabsList className="grid w-full lg:w-2/3 bg-card rounded-xl text-muted grid-cols-3">
        <TabsTrigger value="pitch">Elavator Pitch</TabsTrigger>
        <TabsTrigger value="brief">Brief Profile</TabsTrigger>
        <TabsTrigger value="full">Full Bio</TabsTrigger>
      </TabsList>
      <TabsContent value="brief" className="leading-7 text-lg text-default py-4">
        <div className="flex">
          <div className="w-1/4">Img Here</div>
          <div className="w-3/4 flex flex-col gap-y-4 ">
            <p>
              Jeremiah is a seasoned and passionate Software Engineer with 7 years of professional experience across
              multiple industries worldwide.
            </p>
            <p>
              He currently works with <a href='https://irembo.com/' className='underline'>Irembo</a>, where he helps build the next generation of <a href='https://irembo.gov.rw/' className='underline'>Government Services</a> in Rwanda for more 
              than 12M citizens.
            </p>
            <p>
              Before that, he had a brief sting with Danish-based <a href='https://bestseller.com/' className='underline'>Bestseller</a>, after having helped more than <a href="https://oneacrefund.org/our-impact" className='underline'>1M farmers accross 9 African countries</a> improve their agricultural yields while at <a href='https://oneacrefund.org/' className='underline'>One Acre Fund</a>
            </p>
            <p>
              Having been born and raised in Malawi, Jeremiah, during his time at <a href='https://www.facebook.com/Baobabhealthtrust/' className='underline'>Baobab Health Trust</a> where he worked with the <a href='https://www.kuunika.org/' className='underline'>Ministry of Health</a> to usher in a <a href='https://zipatala.health.gov.mw/' className='underline'>National Facility Registry</a>.
            </p>
            <p>
              Jeremiah is also co-founder of <a href='https://www.doorbell.mw/' className='underline'>Doorbell Malawi</a> which is looking to disrupt the consumer goods retail
              industry in the country.
            </p>
            <p>
              He holds a Masters of Engineering Degree from Doshisha University in Japan and a Bachelors of Science from
              the University of Malawi.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="pitch" className="leading-7 text-lg text-default flex flex-col gap-y-4 my-4">
        <p>
          A Full Stack Engineer with 7+ years of experience leading multinational Engineering teams accross HealthTech,
          FinTech, AgriTech and GovTech in Africa.
        </p>
        <p>
          Jeremiah holds a Masters of Engineering Degree with a focus on Artificial Intelligence as applied to Natural
          Language Processing.
        </p>
        <p>
          <a href='/blog' className='underline hover:text-default'>Follow his blog</a> where he writes about his experiences as a Software Engineer, or book him at your event if you
          need an expert to talk about a wide range of Software Engineering topics including Blockchain Technology and its practical usecases
          today.
        </p>
      </TabsContent>
      <TabsContent value="full">
        <h3>Full Biography Here</h3>
      </TabsContent>
    </Tabs>
  );
}
