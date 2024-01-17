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
}

const Lightbox = ({ imgSrc, altText }: LightboxProps) => {
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
    <div ref={lightboxRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={toggleLightbox} >
      <div className="max-h-full p-4 mx-6 overflow-auto bg-white rounded-lg xl:mx-32 md:mx-12">
        <img src={imgSrc} alt={altText} className="h-auto max-w-full" />
      </div>
      <button onClick={toggleLightbox} className="absolute p-2 text-white rounded top-5 right-5 focus:outline-none">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 2.4L21.6 0 12 9.6 2.4 0 0 2.4 9.6 12 0 21.6 2.4 24 12 14.4 21.6 24 24 21.6 14.4 12z" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  );

  return (
    <div>
      <img
        src={imgSrc}
        alt={altText}
        onClick={toggleLightbox}
        className="cursor-pointer"
      />
      {isOpen && ReactDOM.createPortal(
        lightboxContent,
        document.body
        )}
    </div>
  );
};
    
export default Lightbox;