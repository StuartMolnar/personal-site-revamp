import React, { useState, useEffect, CSSProperties } from 'react';

interface SlidingTextProps {
    description: string;
    textBlock: string;
    width: number;
    interval?: number;
}

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
  };

  const useResponsiveWidth = (initialWidth: number) => {
    const [responsiveWidth, setResponsiveWidth] = useState(initialWidth);
  
    useEffect(() => {
      const updateWidth = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < breakpoints.sm) {
          setResponsiveWidth(initialWidth * 0.79);
        } else if (windowWidth < breakpoints.md) {
          setResponsiveWidth(initialWidth * 1);
        } else if (windowWidth < breakpoints.lg) {
          setResponsiveWidth(initialWidth * 1);
        } else {
          setResponsiveWidth(initialWidth * 1.60);
        }
      };
  
      window.addEventListener('resize', updateWidth);
      updateWidth();
  
      return () => window.removeEventListener('resize', updateWidth);
    }, [initialWidth]);
  
    return responsiveWidth;
  };

const SlidingText: React.FC<SlidingTextProps> = ({ description, textBlock, width, interval = 500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isSliding, setIsSliding] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);   
    const responsiveWidth = useResponsiveWidth(width);

    const processedTextBlock = textBlock.replace(/\s+/g, ' ');

    useEffect(() => {
        if (!isSliding) {
            setDisplayedText(description);
            return;
        }

        const timer = setInterval(() => {
            const textToShow = processedTextBlock.slice(currentIndex, currentIndex + description.length);
            setDisplayedText(textToShow);
            setCurrentIndex(prevIndex => (prevIndex + 1) % processedTextBlock.length);
        }, interval);

        return () => clearInterval(timer);
    }, [description, processedTextBlock, interval, isSliding, currentIndex]);


    const handleClick = () => {
        setIsSliding(!isSliding);
    };

    const spanStyle: CSSProperties = {
        display: 'inline-block',
        minWidth: `${responsiveWidth}px`,
        maxWidth: `${responsiveWidth}px`,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        verticalAlign: '-25.5%',
        margin: '0 0.5rem',
    };
    


    return (
        <span onClick={handleClick} style={spanStyle} className="text-red text-title-sm sm:text-title lg:text-hero">{displayedText}</span>
    );
}

export default SlidingText;
