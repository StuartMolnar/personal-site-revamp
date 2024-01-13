import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

interface LinkButtonProps {
    href: string;
    imgSrc: string;
    buttonText: string;
}

  const LinkButton: React.FC<LinkButtonProps> = ({ href, imgSrc, buttonText }) => {  
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    const onWindowResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    const MOBILE_BREAKPOINT = 768;
    const imageSize = screenWidth && screenWidth < MOBILE_BREAKPOINT ? 16 : 18;

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="">
            <div className="flex items-center justify-start px-4 py-2 space-x-2 cursor-pointer rounded-[99px] hover:brightness-125 hover:bg-black hover:scale-105 bg-red">
                <Image
                    src={`/${imgSrc}`}
                    alt={buttonText}
                    width={imageSize}
                    height={imageSize}
                    style={{ minWidth: `${imageSize}px`, minHeight: `${imageSize}px` }}
                />
                <span className="font-medium text-white text-body md:text-normal">{buttonText}</span>
            </div>
        </Link>
    );
  }
  
  export default LinkButton;