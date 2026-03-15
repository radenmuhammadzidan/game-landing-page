import Image from 'next/image';
import { useState } from 'react';

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const screenshots = [
    { id: 1, src: '/images/screenshot-1.webp', alt: 'Game screenshot 1' },
    { id: 2, src: '/images/screenshot-2.webp', alt: 'Game screenshot 2' },
    { id: 3, src: '/images/screenshot-3.webp', alt: 'Game screenshot 3' },
  ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section id="about" className="relative min-h-screen py-16 overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg-image-2.webp" 
          alt="Background" 
          fill 
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-darkBg"></div>
        {/* Linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden relative z-10 container mx-auto px-4 flex flex-col items-center h-full">
        {/* Title and text - mobile */}
        <div className="w-full mb-10">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bebas text-xl tracking-widest">What is SOS?</h3>
            <h1 className="font-bebas text-4xl uppercase tracking-wider leading-tight">
              social battle<br />royale game
            </h1>
            
            {/* Divider */}
            <div className="w-16 h-1 bg-primary rounded-sm mt-2 mb-6"></div>
            
            {/* About game text */}
            <p className="text-base text-justify leading-relaxed">
              Each round, you and 15 other contestants compete to
              escape a deadly island filled with monsters. The trick is: three people can survive. Will you run
              solo or form friendships with others to escape?<br /><br />Making the right decisions could be the
              difference between life and death.
            </p>
          </div>
        </div>

        {/* Screenshots - mobile */}
        <div className="w-full relative mt-8 pb-12">
          {/* Current Screenshot */}
          <div className="relative mx-auto w-full max-w-xs rounded-md overflow-hidden mb-8">
            <Image 
              src={screenshots[activeSlide].src} 
              alt={screenshots[activeSlide].alt} 
              width={300} 
              height={180} 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-8">
            {screenshots.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full border border-white ${index === activeSlide ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Content - Preserve original */}
      <div className="hidden md:flex relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex-col md:flex-row items-center justify-between h-full gap-12 md:gap-16 lg:gap-24">
        {/* Left text content */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bebas text-xl md:text-2xl tracking-widest">What is SOS?</h3>
            <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider leading-tight">
              social battle<br />royale game
            </h1>
            
            {/* Divider */}
            <div className="w-16 h-1 bg-primary rounded-sm mt-2 mb-8"></div>
            
            {/* About game text */}
            <p className="text-base md:text-lg text-justify leading-relaxed">
              Each round, you and 15 other contestants compete to
              escape a deadly island filled with monsters. The trick is: three people can survive. Will you run
              solo or form friendships with others to escape?<br /><br />Making the right decisions could be the
              difference between life and death.
            </p>
          </div>
        </div>

        {/* Right images showcase */}
        <div className="w-full md:w-1/2 relative h-100">
          {/* Switch buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12 z-20">
            <Image 
              src="/images/switch.svg" 
              alt="Switch" 
              width={40} 
              height={70} 
              className="cursor-pointer"
              onClick={() => handleSlideChange((activeSlide - 1 + screenshots.length) % screenshots.length)}
            />
          </div>
          
          {/* Screenshots display */}
          <div className="relative">
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id} 
                className={`rounded-md overflow-hidden transition-all duration-125 w-125 h-75 bg-primary ${
                  index === activeSlide ? 'opacity-100 absolute top-0 left-0 z-10' : 
                  index === (activeSlide + 1) % screenshots.length ? 'opacity-90 absolute top-8 left-8 z-1' : 
                  index === (activeSlide + 2) % screenshots.length ? 'opacity-80 absolute top-16 left-16 z-0' : 
                  'opacity-0 absolute'
                }`}
              >
                <Image 
                  src={screenshot.src} 
                  alt={screenshot.alt} 
                  width={500} 
                  height={300} 
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-100 space-x-12">
            {screenshots.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full border border-white ${index === activeSlide ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}