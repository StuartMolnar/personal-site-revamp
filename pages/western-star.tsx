import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import EmblaCarousel from "@/carousel/EmblaCarousel"
import LinkButton from "@/components/LinkButton";
import TechButton from "@/components/TechButton";
import "@/css/embla.css"

// type EmblaOptionsType = {
//   align?: string
//   loop?: boolean
// }


// const OPTIONS: EmblaOptionsType = { align: "start", loop: true }
// const SLIDE_COUNT = 4
// const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, index) => index);
// const IMAGES = ["western-star-image.png", "league-logo.png", "rio-image.png", "leaguexvalorant-logo.png"]

function WesternStar() {
    return (
      <div id="screen-top" className="min-h-screen text-black bg-white">
        <Navbar />
          
        <main className="flex flex-col items-center justify-center max-w-[1250px] mx-auto min-h-[80vh] px-6 pt-8 pb-10 font-normal md:px-12 xl:pt-16 xl:px-32">

          <div className="flex flex-col gap-y-6">
            <h1 className="font-heavy text-title md:text-hero">Page Under Construction</h1>

            <p className="">This page will feature <a href="https://westernstarresources.com/" className="font-heavy text-red hover:text-black">westernstarresources.com</a>, a brand new investor-focused website to kick-off the launch of Western Star Resources as a junior mining company.</p>
            <p className="">Feel free the view the <span className="font-heavy text-red">live site</span> or the <span className="font-heavy text-red">source code</span> below!</p>

            <div className="flex gap-x-2 md:gap-x-4">
              <LinkButton
                href="https://westernstarresources.com/"
                imgSrc="Live.svg"
                buttonText="Live Site"
              />
            <LinkButton
                href="https://github.com/StuartMolnar/western-star"
                imgSrc="GitHub.svg"
                buttonText="GitHub"
              />
            </div>
          </div>
          

        {/* <h2 className="pt-6 text-body-lg">A brand new investor-focused website to kick-off the launch of Western Star Resources as a junior mining company</h2>


          <div className="pt-8 -mx-0 xl:pt-16">
              <div className="border-t-[1.75px] border-black"></div>
          </div>

          <div className="flex pt-8 space-x-4 xl:pt-16">
            <p>This page is currently under construction. Feel free to browse the <a href="https://westernstarresources.com/" className="font-bold text-red hover:text-black">live website</a> or the <a href="https://github.com/StuartMolnar/western-star" className="font-bold text-red hover:text-black">source code</a> in the meantime!</p>
          </div> */}


{/*           
          <div className="flex pt-8 gap-x-2 md:gap-x-4">
              <LinkButton
                href="https://westernstarresources.com/"
                imgSrc="Live.svg"
                buttonText="Live Site"
              />
            <LinkButton
                href="https://github.com/StuartMolnar/western-star"
                imgSrc="GitHub.svg"
                buttonText="GitHub"
              />
            </div> */}
          
          {/* <div className="pt-8 xl:pt-10">          
            <EmblaCarousel slides={SLIDES} options={OPTIONS} images={IMAGES} />
          </div> */}

          
      </main>

      <Footer />
    </div>
  );
}   

export default WesternStar;
