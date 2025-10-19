import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: number;
  loop?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, autoplay = 4500, loop = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (loop) {
          return (prevIndex + 1) % items.length;
        }
        return prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }, autoplay);

    return () => clearInterval(interval);
  }, [autoplay, loop, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      }
      return prevIndex > 0 ? prevIndex - 1 : prevIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        return (prevIndex + 1) % items.length;
      }
      return prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-14 md:px-28 min-h-[420px]">
              <div className="carousel-slide flex flex-col md:flex-row items-center gap-12 py-12 min-h-[420px] h-full">
                {/* TEXT SIDE */}
                <div className="w-full md:w-1/2 pl-2 md:pl-6">
                  <h3 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-[420px]">
                    {item.caption}
                  </h3>
                  <p className="text-lg text-slate-700 max-w-xl">
                    {item.caption === 'Live KPIs' && 
                      'Monitor volumes, trading partners, and average settlement time in real time across every funding rail and currency pair you use.'
                    }
                    {item.caption === 'Unified API' && 
                      'One integration surfaces quotes, executes trades, and returns cleared settlement instructions with sub-second latency.'
                    }
                    {item.caption === 'Trade any-size' && 
                      'Move eight-figure tickets through chat, web console, or fully programmatic API, supported around the clock with instant post-trade reporting.'
                    }
                  </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-contain max-h-[420px] w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-indigo-600 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;