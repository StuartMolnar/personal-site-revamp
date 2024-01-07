import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
    bgColor: string;
    imgSrc: string;
    title: string;
    description: string;
    href: string;
  }

function Project({ bgColor, imgSrc, title, description, href }: ProjectProps) {
  
    return (
      <div className="relative aspect-[85/66] rounded-xl group">
        <Link href={`/${href}`} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 rounded-xl text-body group-hover:opacity-100">
          <h1 className="font-bold text-white text-title max-w-[80%]">{title}</h1>
          <p className="mt-2">{description}</p>
          <button className="p-1.5 px-2 mt-4 rounded-3xl bg-red">&#10132; Read More</button>
        </Link>
        <div className={`absolute inset-0 p-16 rounded-xl ${bgColor}`}>
          <Image
            src={`/${imgSrc}`}
            alt={imgSrc}
            width={9999}
            height={9999}
          />
        </div>
      </div>
    
    );
  }
  
  export default Project;