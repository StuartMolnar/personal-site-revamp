import React, { useState, useEffect } from 'react';

interface SlidingTextProps {
  word: string;
  intervalReveal?: number;
  randomizesPerReveal?: number;
}

const SlidingText: React.FC<SlidingTextProps> = ({ word, intervalReveal = 200, randomizesPerReveal = 4 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const randomCharacters = "1234567890";

  const getRandomCharacter = (char: string) => {
    return char === ' ' ? ' ' : randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  };

  useEffect(() => {
    const randomizedText = Array.from(word).map(char => getRandomCharacter(char)).join('');
    setDisplayedText(randomizedText);
  }, [word]);

  const revealNextCharacter = () => {
    if (currentIndex < word.length) {
        setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const revealInterval = setInterval(revealNextCharacter, intervalReveal);
    return () => clearInterval(revealInterval);
  }, [currentIndex, intervalReveal]);

  useEffect(() => {
    const randomizeInterval = setInterval(() => {
      setDisplayedText(prevText =>
        prevText
          .split('')
          .map((char, index) => index < currentIndex ? char : getRandomCharacter(char))
          .join('')
      );
    }, intervalReveal / randomizesPerReveal);
    return () => clearInterval(randomizeInterval);
  }, [currentIndex, intervalReveal, randomizesPerReveal]);

  useEffect(() => {
    const updatedText = word
        .split('')
        .map((char, index) => index < currentIndex ? char : getRandomCharacter(char))
        .join('');
    setDisplayedText(updatedText);
  }, [currentIndex, word]);

  return <span className="text-red"> {displayedText} </span>;
};

export default SlidingText;
