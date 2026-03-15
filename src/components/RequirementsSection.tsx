import Image from 'next/image';

export default function RequirementsSection() {
  const requirements = [
    {
      title: 'OS:',
      specs: ['Windows 7 64-bit only', '(No OSX support at this time)']
    },
    {
      title: 'PROCESSOR:',
      specs: ['Intel Core 2 Duo @ 2.4 GHZ', 'or AMD Athlon X2 @ 2.8 GHZ']
    },
    {
      title: 'MEMORY:',
      specs: ['8GB RAM']
    },
    {
      title: 'STORAGE:',
      specs: ['8GB available space']
    },
    {
      title: 'GRAPHICS:',
      specs: ['NVIDIA GeForce GTX 660 2GB or', 'AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)']
    }
  ];

  return (
    <section id="requirements" className="relative min-h-screen py-16 overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <Image 
          src="/images/bg-image-4.webp" 
          alt="Background" 
          fill 
          className="object-cover"
        />
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div>
        {/* Linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center h-full pt-16">
        {/* Title section */}
        <div className="mb-10 md:mb-20 text-center">
          <h3 className="font-bebas text-lg md:text-xl lg:text-2xl tracking-widest text-white mb-2">
            Can My Computer Run this game?
          </h3>
          <h1 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-8xl uppercase tracking-wider text-white">
            system requirements
          </h1>
        </div>

        {/* System requirements table - responsive */}
        <div className="w-full max-w-2xl mr-0 lg:mr-120 overflow-x-auto">
          {/* Mobile view - stack vertically */}
          <div className="block md:hidden">
            {requirements.map((req, index) => (
              <div 
                key={index} 
                className="flex flex-col p-4 border border-[#333333] mb-4"
              >
                <h3 className="font-bebas text-xl tracking-widest text-primary mb-2">
                  {req.title}
                </h3>
                <div>
                  {req.specs.map((spec, idx) => (
                    <p key={idx} className="text-white text-base">
                      {spec}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view - original grid layout */}
          <div className="hidden md:grid md:grid-cols-2 border border-[#333333]">
            {requirements.map((req, index) => (
              <div 
                key={index} 
                className={`flex flex-col p-4 ${
                  index < requirements.length - 1 ? 
                    (index % 2 === 0 ? 'border-r border-b' : 'border-b') : 
                    (index % 2 === 0 ? 'border-r' : '')
                } border-[#333333] ${
                  index === requirements.length - 1 && requirements.length % 2 !== 0 ? 'col-span-2' : ''
                }`}
              >
                <h3 className="font-bebas text-xl tracking-widest text-primary mb-2">
                  {req.title}
                </h3>
                <div>
                  {req.specs.map((spec, idx) => (
                    <p key={idx} className="text-white text-base md:text-lg">
                      {spec}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 