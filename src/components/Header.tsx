import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('eng');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'eng', name: 'English' },
    { code: 'rus', name: 'Russian' },
    { code: 'ger', name: 'German' },
    { code: 'fra', name: 'French' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    setLanguageDropdownOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
        {/* Background image and gradient effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bg-image.webp" 
            alt="Game background" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(52,44,29,0.8)] to-darkBg"></div>
        </div>

        {/* Page content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header navigation */}
          <header className="pt-6 px-8 md:px-16 lg:px-24">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="w-[128px] h-[48px] relative">
                <Image 
                  src="/images/logo.webp" 
                  alt="SURVIVE logo" 
                  fill
                  className="object-contain"
                />
              </div>

              {/* Mobile menu */}
              <MobileMenu />

              {/* Desktop navigation menu */}
              <div className="hidden md:flex items-center">
                <nav className="flex space-x-12">
                  <a href="#" className="text-xs font-bold tracking-widest uppercase">MAIN</a>
                  <a href="#about" className="text-xs font-bold tracking-widest uppercase">about</a>
                  <a href="#features" className="text-xs font-bold tracking-widest uppercase">game features</a>
                  <a href="#requirements" className="text-xs font-bold tracking-widest uppercase">System requirements</a>
                  <a href="#quotes" className="text-xs font-bold tracking-widest uppercase">quotes</a>
                  <a href="#newsletter" className="text-xs font-bold tracking-widest uppercase">newsletter</a>
                </nav>

                <div className="flex items-center ml-16">
                  {/* Steam icon */}
                  <a href="#" className="mr-5">
                    <Image 
                      src="/images/steam-icon.svg" 
                      alt="Steam" 
                      width={20} 
                      height={20} 
                    />
                  </a>
                  
                  {/* Xbox icon */}
                  <a href="#" className="mr-5">
                    <div className="relative">
                      <Image 
                        src="/images/xbox-icon.svg" 
                        alt="" 
                        width={20} 
                        height={20}
                      />
                    </div>
                  </a>

                  {/* Divider */}
                  <div className="w-px h-4 bg-white opacity-50 mx-5"></div>

                  {/* Language selector dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button 
                      className="flex items-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={toggleLanguageDropdown}
                    >
                      <span className="text-xs font-bold tracking-widest uppercase mr-1.5">{selectedLanguage}</span>
                      <Image 
                        src="/images/dropdown-icon.svg" 
                        alt="Language selector" 
                        width={10} 
                        height={6} 
                        className={`transition-transform duration-300 ${languageDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {/* Dropdown menu */}
                    {languageDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-32 bg-dark bg-opacity-95 border border-[#333333] rounded shadow-lg z-50">
                        <div className="py-1">
                          {languages.map((language) => (
                            <button
                              key={language.code}
                              className={`block w-full text-left px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-gray-700  cursor-pointer ${
                                selectedLanguage === language.code ? 'text-primary' : 'text-white'
                              }`}
                              onClick={() => selectLanguage(language.code)}
                            >
                              {language.code}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-0">
            <div className="flex flex-col items-center space-y-4 md:space-y-5">
              <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider uppercase">
                SURVIVE AT ALL COSTS
              </h1>
              <h3 className="font-bebas text-lg md:text-xl lg:text-2xl tracking-widest uppercase">
                Experience new social battle royale game
              </h3>
              
              {/* Buy button */}
              <div className="mt-4 md:mt-6">
                <button className="flex items-center bg-primary rounded px-5 py-3  cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-dark font-bold text-sm md:text-base">Buy Now on Steam</span>
                    <div className="mx-3 h-5 w-px bg-dark opacity-50"></div>
                    <span className="text-dark font-bold text-sm md:text-base">$14.99</span>
                  </div>
                </button>
              </div>
            </div>
          </main>

          {/* Bottom scroll indicator */}
          <div className="flex flex-col items-center mb-12">
            <a href="#about" className="flex flex-col items-center">
              <span className="text-xs font-bold tracking-widest uppercase mb-1">The story</span>
              <Image 
                src="/images/scroll-down.svg" 
                alt="Scroll down" 
                width={23} 
                height={12} 
              />
            </a>
          </div>
        </div>
      </div>
  );
}