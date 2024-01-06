import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import EmblaCarousel from '@/carousel/EmblaCarousel'
import LinkButton from '@/components/LinkButton';
import TechButton from '@/components/TechButton';
import '@/css/embla.css'
import { isImportDeclaration } from "typescript";

type EmblaOptionsType = {
  align?: string
  loop?: boolean
}


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const IMAGES = ['RioProject.png', 'WSProject.png', 'RioProject.png', 'WSProject.png']

function WesternStar() {
    return (
      <div id="screen-top">
        <Navbar />
          
        <main className="min-h-screen px-10 pt-16 pb-10 font-normal text-black bg-white md:px-32">
          <div className="flex flex-col justify-between xl:flex-row xl:items-center gap-y-4">

          <h1 className="font-heavy text-hero">Western Star Resources</h1>
          <div className="flex gap-x-4">
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
          
          <div className="pt-10">          
            <EmblaCarousel slides={SLIDES} options={OPTIONS} images={IMAGES} />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:gap-x-[10%] gap-y-10 pt-32">
            <div className="flex-row md:w-[45%]">
              <h1 className="text-title font-heavy">Title</h1>
              <p className="pt-8 text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate fringilla lectus, vitae tempus ex porttitor sit amet. Mauris pellentesque ac neque nec lobortis. Aenean dictum justo vel mattis efficitur. Sed quis elit vel lorem pretium vehicula eu eu ligula. Cras consequat rutrum felis eget pellentesque. Vestibulum accumsan fringilla magna, vel pharetra dolor aliquam et. Nulla non sapien vitae massa aliquam viverra sit amet id tellus. Vivamus sed tincidunt tellus. Nullam ac arcu non neque tincidunt imperdiet. Vivamus nec ligula at lorem consequat commodo.

              In in viverra tortor, nec venenatis elit. Ut sed lorem in ex mollis dignissim. Nam posuere ac diam nec vulputate. Nam quis neque nibh. Proin tristique, eros ut sollicitudin aliquet, nisl quam luctus sapien, ac pellentesque mi justo vel erat. Sed non sapien massa. Phasellus at vulputate tortor. Cras facilisis vel velit in dignissim. Aliquam consequat libero mollis, gravida lacus nec, dignissim metus. Nunc eu posuere arcu.</p>
            </div>
            <div className="flex-row md:w-[45%]">
              <h1 className="text-title font-heavy">Technologies</h1>
              <div className="grid grid-cols-1 gap-6 pt-8 4sm:grid-cols-2 2sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
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
                    <TechButton imgSrc="" buttonText="Docker" />
                </div>
              </div>
            </div>
          </div>
      </main>

      <Footer />
    </div>
  );
}   

export default WesternStar;
