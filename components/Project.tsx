import Link from "next/link";
import Image from "next/image";
import { MOBILE_BREAKPOINT } from "@/constants/constants";

interface ProjectProps {
    bgColor: string;
    imgSrc: string;
    title: string;
    description: string;
    href: string;
    width_padding?: string;
    onClick: () => void;
    isActive: boolean;
  }

function Project({ bgColor, imgSrc, title, description, href, width_padding, isActive, onClick}: ProjectProps) {

    const handleMobileClick = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        onClick();
      }
  }
  
    return (
      <div className="relative aspect-[85/66] rounded-xl group">
        <div onClick={handleMobileClick} className="cursor-pointer">
          <div className={`absolute inset-0 rounded-xl flex items-center ${bgColor} ${width_padding}`}>
              <Image
                  src={`/${imgSrc}`}
                  alt={imgSrc}
                  width={9999}
                  height={9999}
              />
          </div>
        </div>
        <Link href={`/${href}`} className={`absolute inset-0 z-10 flex flex-col items-center text-center justify-center transition-opacity duration-300 bg-black bg-opacity-80 rounded-xl text-body ${isActive || 'xl:group-hover:opacity-100'} ${isActive ? 'flex opacity-100' : 'hidden xl:flex xl:opacity-0'} text-white`}>
          <h1 className="font-bold text-white text-title-sm 2sm:text-title-lg max-w-[80%]">{title}</h1>
          <p className="mt-2 text-body-sm 2sm:text-body-lg">{description}</p>
          <button className="flex p-2.5 px-3 mt-4 space-x-2 text-body-sm rounded-3xl bg-red hover:brightness-125 hover:scale-105">
            <span>&#10132;</span><span>Read More</span></button>
        </Link>
        
      </div>
    
    );
  }
  
  export default Project;