import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing the mobile menu
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    setLanguageDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none z-20 relative"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-darkBg bg-opacity-95 z-10 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            <a href="#" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>MAIN</a>
            <a href="#about" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>about</a>
            <a href="#features" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>game features</a>
            <a href="#requirements" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>System requirements</a>
            <a href="#quotes" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>quotes</a>
            <a href="#newsletter" className="text-xs font-bold tracking-widest uppercase" onClick={handleLinkClick}>newsletter</a>
          </nav>

          <div className="flex items-center mt-12">
            {/* Steam icon */}
            <a href="#" className="mx-3">
              <Image 
                src="/images/steam-icon.svg" 
                alt="Steam" 
                width={20} 
                height={20} 
              />
            </a>
            
            {/* Xbox icon */}
            <a href="#" className="mx-3">
              <div className="relative">
                <Image 
                  src="/images/xbox-icon.svg" 
                  alt="" 
                  width={20} 
                  height={20}
                />
              </div>
            </a>
          </div>

          {/* Language selector dropdown */}
          <div className="relative mt-8" ref={dropdownRef}>
            <button 
              className="flex items-center opacity-75 hover:opacity-100 transition-opacity"
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
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-darkBg bg-opacity-95 border border-[#333333] rounded shadow-lg z-50">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`block w-full text-left px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-gray-700 ${
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
  );
} 