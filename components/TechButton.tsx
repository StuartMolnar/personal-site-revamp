import Image from "next/image";
import { useState, useEffect } from 'react';

interface TechButtonProps {
    imgSrc?: string;
    buttonText: string;
}



  const TechButton: React.FC<TechButtonProps> = ({  imgSrc, buttonText }) => {  
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
        <div>
            <div className="flex items-center px-4 py-2 rounded-[99px] bg-black">
                {imgSrc && (
                    <Image
                        src={`/${imgSrc}`}
                        alt={buttonText}
                        width={imageSize}
                        height={imageSize}
                        style={{ minWidth: `${imageSize}px`, minHeight: `${imageSize}px` }}
                    />
                )}
                <span className="text-white text-body-sm md:text-normal">{buttonText}</span>
            </div>
        </div>
    );
  }
  
  export default TechButton;