import Image from 'next/image';

interface TechButtonProps {
    imgSrc?: string;
    buttonText: string;
}

  const TechButton: React.FC<TechButtonProps> = ({  imgSrc, buttonText }) => {  
    return (
        <div>
            <div className="flex items-center max-w-[200px] min-w-[155px] lg:scale-100 scale-75 px-4 py-2 space-x-2 rounded-[99px] bg-black">
                {imgSrc && (
                    <Image
                        src={`/${imgSrc}`}
                        alt={buttonText}
                        width={18}
                        height={18}
                    />
                )}
                <span className="w-full font-medium text-center text-white">{buttonText}</span>
            </div>
        </div>
    );
  }
  
  export default TechButton;