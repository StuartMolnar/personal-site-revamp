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
  const lightboxRef = useRef<HTMLDivElement>(null); // Use useRef here

  useEffect(() => {
    // Now we access the current property of the ref
    const targetElement = lightboxRef.current;
    
    if (isOpen && targetElement) {
      disableBodyScroll(targetElement);
    } else if (targetElement) {
      enableBodyScroll(targetElement);
    }
    
    // Clean up scroll locks when the component unmounts
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
    <div ref={lightboxRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={toggleLightbox} >
      <div className="max-h-full p-4 mx-6 overflow-auto bg-white rounded-lg xl:mx-32 md:mx-12">
        <img src={imgSrc} alt={altText} className="h-auto max-w-full" />
      </div>
      <button onClick={toggleLightbox} className="absolute p-2 text-white bg-gray-700 rounded top-5 right-5 hover:bg-gray-600 focus:outline-none">
        Close
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