import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import EmblaCarousel from "@/carousel/EmblaCarousel"
import LinkButton from "@/components/LinkButton";
import "@/css/embla.css"

type EmblaOptionsType = {
  align?: string
  loop?: boolean
}


const OPTIONS: EmblaOptionsType = { align: "start", loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const IMAGES = ["RioProject.png", "WSProject.png", "RioProject.png", "WSProject.png"]

function RankedConverter() {
    return (
      <div id="screen-top">
        
      </div>
    );
}   

export default RankedConverter;
