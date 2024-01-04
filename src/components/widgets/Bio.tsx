import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

export function Bio() {
  return (
    <Tabs defaultValue="pitch">
      <TabsList className="grid w-2/3 bg-card rounded-xl text-muted grid-cols-3">
        <TabsTrigger value="pitch">Elavator Pitch</TabsTrigger>
        <TabsTrigger value="brief">Brief Profile</TabsTrigger>
        <TabsTrigger value="full">Full Bio</TabsTrigger>
      </TabsList>
      <TabsContent value="brief" className="leading-7 text-lg text-muted py-4">
        <div className="flex">
          <div className="w-1/4">Img Here</div>
          <div className="w-3/4 flex flex-col gap-y-4 ">
            <p>
              Jeremiah is a seasoned and passionate Software Engineer with 7 years of professional experience across
              multiple industries worldwide.
            </p>
            <p>
              He currently works with Danish-based Bestseller, where he helps make brands such as Jack and Jones and
              Vero Moda accessible to millions of worldwide customers across physical and online retail stores such as
              Asos and Zalando.
            </p>
            <p>
              Before that, he worked with One Acre Fund to improve harvests of 1M+ Farmers across 9 countries in Africa;
              the Ministry of Health in Malawi and more.
            </p>
            <p>
              Jeremiah is also co-founder of Doorbell Malawi which is looking to disrupt the consumer goods retail
              industry in the country.
            </p>
            <p>
              He holds a Masters of Engineering Degree from Doshisha University in Japan and a Bachelors of Science from
              the University of Malawi.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="pitch" className="leading-7 text-lg text-muted flex flex-col gap-y-4 my-4">
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
