
import React, { useState } from 'react';
import { imageData } from './images.js'; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex w-full min-h-[30vh] items-center justify-center gap-4">
        <button
        id="prev-button"
        onClick={prevSlide}
        className="w-8 h-8 bg-transparent cursor-pointer transform rotate-180"
      >
        <img src="/public/Imagens/arrow.png" alt="Previous" className="w-full h-full" />
      </button>
      <div className="relative flex items-center justify-center w-[450px] h-[450px]">
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full rounded-lg transition-opacity duration-200 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <button
        id="next-button"
        onClick={nextSlide}
        className="w-8 h-8 bg-transparent cursor-pointer"
      >
        <img src="/public/Imagens/arrow.png" alt="Next" className="w-full h-full" />
      </button>
    </div>
  );

};

export default Carousel;