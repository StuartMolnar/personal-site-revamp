import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface LightboxProps {
  imgSrc: string;
  altText: string;
}

const Lightbox = ({ imgSrc, altText }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const lightboxContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={toggleLightbox}
    >
      <div className="max-h-full p-4 mx-6 overflow-auto bg-white rounded-lg xl:mx-32 md:mx-12">
        <img src={imgSrc} alt={altText} className="h-auto max-w-full" />
      </div>
      <button
        onClick={toggleLightbox}
        className="absolute p-2 text-white bg-gray-700 rounded top-5 right-5 hover:bg-gray-600 focus:outline-none"
      >
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