import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade';

interface LightboxProps {
  imgSrc: string;
  altText: string;
  carousel?: boolean;
  className?: string;
}

const Lightbox = ({ imgSrc, altText, carousel, className }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = lightboxRef.current;
    
    if (isOpen && targetElement) {
      disableBodyScroll(targetElement);
    } else if (targetElement) {
      enableBodyScroll(targetElement);
    }
    

    return () => {
      if (targetElement) {
        enableBodyScroll(targetElement);
      }
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  const lightboxContent = (
    <div ref={lightboxRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center py-10 bg-black bg-opacity-90" onClick={toggleLightbox} >
      <button onClick={toggleLightbox} className="p-2 m-4 text-white rounded md:m-6 xl:m-8 focus:outline-none">
        {/* <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 2.4L21.6 0 12 9.6 2.4 0 0 2.4 9.6 12 0 21.6 2.4 24 12 14.4 21.6 24 24 21.6 14.4 12z" fill="#FFFFFF"/>
        </svg> */}
      </button>
      <div className="max-h-full p-4 m-4 overflow-auto bg-white rounded-lg md:m-6 xl:m-8">
        <img src={imgSrc} alt={altText} className="w-auto max-h-full mx-auto" />
      </div>
      
    </div>
  );

  return (
    <div>
      <img
        src={imgSrc}
        alt={altText}
        onClick={toggleLightbox}
        className={`cursor-pointer ${className} ${carousel ? 'embla__slide__img': ''}`}
      />
      {isOpen && ReactDOM.createPortal(
        lightboxContent,
        document.body
        )}
    </div>
  );
};
    
export default Lightbox;
