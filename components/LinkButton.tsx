import Link from 'next/link';
import Image from 'next/image';

interface LinkButtonProps {
    href: string;
    imgSrc: string;
    buttonText: string;
}

  const LinkButton: React.FC<LinkButtonProps> = ({ href, imgSrc, buttonText }) => {  
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center w-[115px] px-4 py-2 space-x-2 cursor-pointer rounded-[99px] bg-red">
                <Image
                    src={`/${imgSrc}`}
                    alt={buttonText}
                    width={18} // Adjust the size as needed
                    height={18} // Adjust the size as needed
                />
                <span className="font-medium text-white">{buttonText}</span>
            </div>
        </Link>
    );
  }
  
  export default LinkButton;