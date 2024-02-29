import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import EmblaCarousel from "@/carousel/EmblaCarousel"
import LinkButton from "@/components/LinkButton";
import TechButton from "@/components/TechButton";
import "@/css/embla.css"
import Lightbox from '@/components/Lightbox';

type EmblaOptionsType = {
  align?: string
  loop?: boolean
}

const OPTIONS: EmblaOptionsType = { align: "start", loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const IMAGES = ["ranked-converter/db-schema.png", "ranked-converter/index-page.png", "ranked-converter/azure-commands.png", "ranked-converter/azure-cli.png", "ranked-converter/azure-portal.png", "ranked-converter/code-processor.png", "ranked-converter/code-scraper.png"]

function RankedConverter() {
    return (
        <div id="screen-top">
          <Navbar />
            
          <main className="min-h-screen px-6 pt-8 pb-10 font-normal text-black bg-white md:px-12 xl:pt-16 xl:px-32">
            <div className="flex flex-col justify-between xl:flex-row xl:items-center gap-y-2">
  
              <h1 className="font-heavy text-title md:text-hero">League to Valorant Rank Converter</h1>

              <div className="flex gap-x-2 md:gap-x-4">
                <LinkButton
                  href="https://lol2val-converter.vercel.app/"
                  imgSrc="Live.svg"
                  buttonText="Live Site"
                />
              <LinkButton
                  href="https://github.com/StuartMolnar/ranked-converter"
                  imgSrc="GitHub.svg"
                  buttonText="GitHub"
                />
              </div>
  
            </div>

            <h2 className="pt-6 text-body-lg">A web app to convert player ranks between Valorant and League of Legends by percentile</h2>
            
            <div className="pt-8 xl:pt-10">          
              <EmblaCarousel slides={SLIDES} options={OPTIONS} images={IMAGES} />
            </div>
  
            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Motivation</h1>
                <p className="pt-8 text-body-sm">As an avid League of Legends player, I would often find myself curious how my rank compares to friends who play Valorant, and vice versa. These games are both developed by Riot Games, but their ranked distributions are not exactly the same - for example, there was a time when Radiant (Valorant’s top rank) consisted of 0.3% of the playerbase, while Challenger (League of Legend’s top rank) consisted of only 0.02%.</p>
              </div>
              <div className="flex-row xl:w-[45%]"> 
                <h1 className="text-title font-heavy">Technologies</h1>
                <div className="flex flex-wrap gap-3 pt-8 xl:gap-6">
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="JavaScript" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="HTML" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="CSS" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="React JS" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="Tailwind CSS" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="PostgreSQL" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="NodeJS" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="Puppeteer" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="Typescript" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="Docker" />
                  </div>
                  <div className="flex items-center justify-center">
                      <TechButton imgSrc="" buttonText="Microservices" />
                  </div>
                </div>
              </div>
            </div>

              

            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Problem</h1>
                <p className="pt-8 xl:w-2/3 text-body-sm">I never found an easy tool to compare the two games. Oftentimes I would have to look up the leaderboards and do some math myself. </p>
              </div>
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Solution</h1>
                <p className="pt-8 xl:w-2/3 text-body-sm">I saw that a lot of this information did exist online, even if it wasn’t directly provided by Riot’s API. It provided me an opportunity to build something to make the whole process easier.</p>

              </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              <div className="hidden xl:block flex-row xl:w-[45%]">
                (service architecture diagram)
              </div>
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Software Architecture</h1>
                <div className="xl:hidden">
                  (service architecture diagram)
                </div>
                <p className="pt-8 text-body-sm">Before diving into this app, I wanted to figure out which essential functions I would need. I was able to narrow it down into <span className="font-heavy">3 separate services</span>:</p>
                
                <div className="max-w-sm pt-6 text-body-sm">

                  <ul className="space-y-2 list-none">
                    
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">1. A web-scraping service</h4>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">2. A database service</h4>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">3. A frontend UI</h4>
                    </li>
                  </ul>

                </div>

                <p className="pt-6 text-body-sm">
                  Another key concern of mine was being able to achieve <span className="font-heavy">$0 cloud hosting costs</span>.
                </p>
                <p className="text-body-sm">
                  With this in mind, I narrowed my tools down to the following:
                </p>
                <div className="max-w-lg pt-6 text-body-sm">

                  <ul className="space-y-2 list-none">
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">1. Azure Container Apps</h4>
                      <ul className="pl-4 mt-2 list-inside">
                        <li>- for quick, scheduled processes like my web scraping service - with all costs covered by Azure’s free credits</li>
                      </ul>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">2. Supabase Free Tier</h4>
                      <ul className="pl-4 mt-2 list-inside">
                        <li>- for a free, managed database</li>
                      </ul>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">3. Vercel Hobby Tier</h4>
                      <ul className="pl-4 mt-2 list-inside">
                        <li>- for free hosting of my NextJS frontend</li>
                      </ul>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Web Scraping Service</h1>
                <div className="pt-6 xl:hidden">
                  
                  <Lightbox
                    imgSrc={'ranked-converter/code-scraper.png'}
                    altText={'Web Scraping Photo'}
                    carousel={false}
                    className="object-cover w-full max-h-[400px] rounded"
                  />
                </div>
                <p className="pt-8 xl:w-2/3 text-body-sm">For my web-scraping, I created two services: <span className="font-bold">league_data</span> and <span className="font-bold">valorant_data</span>. Both of these use NodeJS and Puppeteer for web scraping and use Supabase’s NodeJS library to store the data they retrieve. They both function very similarly, too, with the following structure: </p>
                <div className="max-w-lg pt-6 text-body-sm">

                  <ul className="space-y-2 list-none">
                    
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">1. Scrape data from target page</h4>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">2. Process and structure the data</h4>
                      <ul className="pl-4 mt-2 list-none list-inside">
                        <li>- also calculates a “cumulative percentile” rank to act as a baseline</li>
                      </ul>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">3. Prepare the data and insert the data into database</h4>
                    </li>
                    <li className="p-4 border border-gray-200 rounded shadow-sm">
                      <h4 className="font-semibold">4. Catch and log any errors</h4>
                    </li>
                  </ul>

                </div>

              </div>
              
              <div className="hidden pt-6 xl:block">
                <Lightbox
                  imgSrc={'ranked-converter/code-scraper.png'}
                  altText={'Web Scraping Photo'}
                  carousel={false}
                  className="object-cover w-full max-h-[700px] rounded"
                />
              </div>
            </div>


            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              
              <div className="xl:w-[45%] hidden xl:block">
              <Lightbox
                    imgSrc={'ranked-converter/db-schema.png'}
                    altText={'Database schema'}
                    carousel={false}
                    className="object-cover w-full rounded"
                  />
              </div>
            
              <div className="xl:w-[45%]">
                <h1 className="text-title font-heavy">Database Service</h1>
                <div className="pt-6 xl:hidden">
                  
                  <Lightbox
                    imgSrc={'ranked-converter/db-schema.png'}
                    altText={'Database schema'}
                    carousel={false}
                    className="object-cover w-full max-h-[400px] rounded"
                  />
                </div>
                <p className="pt-8 xl:w-2/3 text-body-sm">
                  The database service is quite simple, as it’s managed by Supabase. I created the tables and their assorted data using Supabase’s web UI and connected to it using their NodeJS library.
                </p>
            
                <p className="pt-8 xl:w-2/3 text-body-sm">Talk more about the schema here maybe - talk about how i enabled row level security and read-only access for my frontend</p>
              </div>
            
            </div>
            

            <div className="flex flex-col-reverse xl:flex-row xl:gap-x-[10%] gap-y-10 pt-10 xl:pt-32">
              <div className="flex-row xl:w-[45%]">
                <h1 className="text-title font-heavy">Frontend UI</h1>
                <div className="pt-6 xl:hidden">
                  <Lightbox
                    imgSrc={'ranked-converter/index-page.png'}
                    altText={'Index Page Photo'}
                    carousel={false}
                    className="object-cover w-full max-h-[400px] rounded"
                  />
                </div>
                <p className="pt-8 xl:w-2/3 text-body-sm">The frontend for my app was created using NextJS and MaterialUI. The purpose of my app was to be a very simple tool.. It features a single index page with a dropdown menu and toggle window between games. MaterialUI was great as it comes with a lot of components to choose from. NextJS was mainly chosen due to familiarity and free hosting on Vercel.</p>
              </div>
              
              
              <div className="xl:w-[45%] hidden xl:block">
                <Lightbox
                  imgSrc={'ranked-converter/index-page.png'}
                  altText={'Index Page Photo'}
                  carousel={false}
                  className="object-cover w-full max-h-[400px] rounded"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-10 xl:pt-32 ">
              
              <h1 className="text-center text-title font-heavy">Takeaways</h1>

              <p className="pt-6 xl:w-1/2 text-body-sm">This project gave me opportunities to dive deeper into web-scraping, containerization, and Azure services. It also served as an interesting opportunity to research tools based on cost benefits, and I was ultimately successful in hosting this project free of personal charge.</p>
              <p className="pt-6 xl:w-1/2 text-body-sm">The technology I’m most proud of learning from this project, though, is definitely Azure’s Container Apps. It was a little confusing at the start, and a lot of their official documentation wasn’t working properly for me, so it required some extra research. In the end, it helped me save a lot on hosting costs versus hosting a permanent server.</p>
              <p className="pt-6 xl:w-1/2 text-body-sm">Ultimately, this project allowed me to gain experience combining technologies I previously learned - such as web-scraping and containerization - and also research new technologies like Supabase and Azure Container Apps.</p>

            </div>


        </main>
  
        <Footer />
      </div>
    );
}   

export default RankedConverter;
