// Import the Link component from Next.js
import Navbar from "@/components/Navbar";
import LinkButton from "@/components/LinkButton";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import SlidingText from "@/components/SlidingText";

export default function Home() {

  const WORD = "full-stack developer"
  

  return (
    <div id="screen-top">
      < Navbar />
      
      <main className="min-h-screen px-6 pb-10 font-normal text-black bg-white md:px-12 lg:px-32">
        
        
        <h1 className="pt-[15%] font-bold text-title-sm sm:text-title lg:text-hero select-none">
          I&apos;m Stuart, a 
          <SlidingText 
            word={WORD}
            intervalReveal={150}
            randomizesPerReveal={4}
          /> 
          with a focus on creating user-centric digital solutions. Let&apos;s work together and make things happen!</h1>

        <div className="flex flex-wrap gap-4 mt-6">
          <LinkButton
            href="https://github.com/StuartMolnar"
            imgSrc="GitHub.svg"
            buttonText="GitHub"
          />
          <LinkButton
            href="https://linkedin.com/in/stuart-molnar/"
            imgSrc="LinkedIn.svg"
            buttonText="LinkedIn"
          />
          <LinkButton
            href="/resume.pdf"
            imgSrc="Resume.svg"
            buttonText="Resume"
          />
        </div>
        <a href="#projects" className="flex mt-[10%] space-x-2 font-medium hover:text-[#953A1D]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1_120" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_1_120)">
                  <path d="M12 19L6 13L7.4 11.6L12 16.175L16.6 11.6L18 13L12 19ZM12 13L6 7.00001L7.4 5.60001L12 10.175L16.6 5.60001L18 7.00001L12 13Z" />
              </g>
          </svg>
          <p>
              View my client works & personal projects
          </p>
        </a>

        {/* adjust grid-cols-# for different screen sizes if necessary */}
        <div id="projects" className="grid grid-cols-1 pt-20 space-y-4 md:gap-4 md:grid-cols-2 md:space-y-0">
          <Project bgColor="bg-gray" imgSrc="western-star-image.png" title="Western Star Resources" description="Front-End Development" href="western-star"/>
          <Project bgColor="bg-black" imgSrc="league-logo.png" title="League of Legends Chat Assistant" description="Back-End Development" href="chat-bot" width_padding="p-12 lg:p-36"/>
          <Project bgColor="bg-black" imgSrc="leaguexvalorant-logo.png" title="League to Valorant Rank Converter" description="Full-Stack Development" href="ranked-converter" width_padding="p-10 lg:p-32"/>
          <Project bgColor="bg-gray" imgSrc="rio-image.png" title="Rio Minerals Ltd." description="Front-End Development" href="western-star" width_padding="p-4"/>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
