import Link from "next/link";
import Image from "next/image";

interface LinkButtonProps {
    href: string;
    imgSrc: string;
    buttonText: string;
}

  const LinkButton: React.FC<LinkButtonProps> = ({ href, imgSrc, buttonText }) => {  
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="">
            <div className="flex md:scale-100 scale-75 items-center justify-start min-w-[115px] max-w-[150px] px-4 py-2 space-x-2 cursor-pointer rounded-[99px] bg-red">
                <Image
                    src={`/${imgSrc}`}
                    alt={buttonText}
                    width={18}
                    height={18}
                />
                <span className="font-medium text-white">{buttonText}</span>
            </div>
        </Link>
    );
  }
  
  export default LinkButton;