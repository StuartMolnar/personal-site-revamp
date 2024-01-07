// Import the Link component from Next.js
import Navbar from "@/components/Navbar";
import LinkButton from "@/components/LinkButton";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div id="screen-top">
      < Navbar />
      {/* adjust mx-32 value for different screen sizes in future */}
      <main className="min-h-screen px-32 pb-10 font-normal text-black bg-white">
        
        
        <h1 className="pt-[15%] font-bold text-hero">I&apos;m Stuart, a <span className="text-red">full-stack developer</span> with a focus on creating user-centric digital solutions. Let&apos;s work together and make things happen!</h1>

        <div className="flex mt-6 space-x-4">
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
        <a href="#projects" className="flex pt-[10%] space-x-2 font-medium">
          <Image
              src="/Double_Arrow_Down.svg"
              alt="Arrow Pointing Down"
              width={18}
              height={18}
          />
          <p className="">
            View my client works & personal projects
          </p>
        </a>

        {/* adjust grid-cols-# for different screen sizes if necessary */}
        <div id="projects" className="grid grid-cols-2 gap-4 pt-20">
          <Project bgColor="bg-gray" imgSrc="WSProject.png" title="Western Star Resources" description="Front-End Development" href="western-star"/>
          <Project bgColor="bg-black" imgSrc="ChatProject.png" title="League of Legends Chat Assistant" description="Back-End Development" href="chat-bot"/>
          <Project bgColor="bg-black" imgSrc="ConverterProject.png" title="League to Valorant Rank Converter" description="Full-Stack Development" href="ranked-converter"/>
          <Project bgColor="bg-gray" imgSrc="RioProject.png" title="Rio Minerals Ltd." description="Front-End Development" href="western-star"/>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
