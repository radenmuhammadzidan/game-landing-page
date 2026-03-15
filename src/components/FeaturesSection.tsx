import Image from "next/image";
import { useState } from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "SURVIVE AT ALL COSTS",
      description:
        "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
    },
    {
      id: 2,
      title: "CREATE ALLIES & ENEMIES",
      description:
        "Form alliances with other players to increase your chances of survival, or betray them to claim all the glory for yourself.",
    },
    {
      id: 3,
      title: "IMPRESS THE AUDIENCE",
      description:
        "Stream-friendly features that let you interact with viewers and build your audience while playing the game.",
    },
  ];

  const handleFeatureChange = (index: number) => {
    setActiveFeature(index);
  };

  return (
    <section
      id="features"
      className="relative min-h-screen py-16 overflow-hidden"
    >
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        {/* Pure black background */}
        <div className="absolute inset-0 bg-black"></div>
        {/* Background image */}
        <Image
          src="/images/bg-image-3.webp"
          alt="Background"
          fill
          className="object-cover opacity-60"
        />
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(4,5,6,0.52)] to-black"></div>
      </div>

      {/* Content - Mobile view */}
      <div className="relative md:hidden z-10 container mx-auto px-4 flex flex-col h-full pt-12">
        {/* Title section */}
        <div className="mb-12">
          <h3 className="font-bebas text-xl tracking-widest text-white">
            What&apos;s so special?
          </h3>
          <h1 className="font-bebas text-4xl uppercase tracking-wider text-white">
            features
          </h1>
        </div>

        {/* Features content - simplified for mobile */}
        <div className="flex flex-col">
          {/* Feature dot indicators with content */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div className="flex flex-col mb-6" key={feature.id}>
                <div className="flex items-center mb-4">
                  <button
                    key={`button-${index}`}
                    className={`w-6 h-6 rounded-full border border-white mr-4 flex items-center justify-center ${
                      index === activeFeature ? "bg-white" : "bg-transparent"
                    } transition-colors duration-300`}
                    onClick={() => handleFeatureChange(index)}
                  >
                    {index === activeFeature && (
                      <span className="w-2 h-2 rounded-full bg-black"></span>
                    )}
                  </button>
                  <h2 className={`font-bebas text-2xl tracking-widest ${
                    index === activeFeature ? "text-primary" : "text-white"
                  } transition-colors duration-300`}>
                    {feature.title}
                  </h2>
                </div>
                
                <div className="h-20 pl-10 relative">
                  {index === activeFeature && (
                    <p 
                      className="text-base text-white leading-relaxed transition-all duration-500 opacity-100 transform translate-y-0"
                    >
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content - Desktop view (preserve original) */}
      <div className="absolute right-0 w-180 z-10 container mx-auto px-4 md:px-8 lg:px-16 hidden md:flex flex-col h-full pt-16">
        {/* Title section */}
        <div className="mb-24">
          <h3 className="font-bebas text-xl md:text-2xl tracking-widest text-white">
            What&apos;s so special?
          </h3>
          <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider text-white">
            features
          </h1>
        </div>

        {/* Features content */}
        <div className="flex flex-row items-center">
          {/* Feature dot indicators */}
          <div className="flex flex-col justify-center space-y-16 md:space-y-24 lg:space-y-32 mb-16">
            {features.map((feature, index) => (
              <div className="flex flex-row items-start mb-6" key={feature.id}>
                <button
                  key={index}
                  className={`w-6 h-6 rounded-full border border-white mr-10 mt-2 ${
                    index === activeFeature ? "bg-white" : "bg-transparent"
                  } transition-colors duration-300`}
                  onClick={() => handleFeatureChange(index)}
                >
                  {index === activeFeature && (
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                  )}
                </button>
                <div
                  key={feature.id}
                  className="transition-opacity duration-500 flex flex-col items-start"
                >
                  <h2 className={`font-bebas text-2xl md:text-3xl lg:text-4xl tracking-widest ${
                    index === activeFeature ? "text-primary" : "text-white"
                  } transition-colors duration-300 mb-6`}>
                    {feature.title}
                  </h2>
                  
                  {index === activeFeature && (
                    <p className="text-base md:text-lg text-white leading-relaxed max-w-120 transition-all duration-500 opacity-100 transform translate-y-0">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
