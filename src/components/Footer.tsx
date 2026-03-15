import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-12 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-[130px] h-[48px] relative mb-8">
            <Image 
              src="/images/logo.webp" 
              alt="SURVIVE logo" 
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation links */}
          <nav className="mb-8 hidden md:flex space-x-12">
            <a href="#" className="text-xs font-bold tracking-widest uppercase">MAIN</a>
            <a href="#about" className="text-xs font-bold tracking-widest uppercase">about</a>
            <a href="#features" className="text-xs font-bold tracking-widest uppercase">game features</a>
            <a href="#requirements" className="text-xs font-bold tracking-widest uppercase">System requirements</a>
            <a href="#quotes" className="text-xs font-bold tracking-widest uppercase">quotes</a>
            <a href="#newsletter" className="text-xs font-bold tracking-widest uppercase">newsletter</a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-6xl mb-8">
            <Image 
              src="/images/footer-border.svg" 
              alt="" 
              width={1200} 
              height={1}
              className="w-full opacity-50" 
            />
          </div>

          {/* Social media icons */}
          <div className="flex space-x-14 mb-8">
            <a href="#" aria-label="Facebook">
              <Image src="/images/facebook-icon.svg" alt="Facebook" width={7} height={16} />
            </a>
            <a href="#" aria-label="Twitter">
              <Image src="/images/twitter-footer-icon.svg" alt="Twitter" width={16} height={16} />
            </a>
            <a href="#" aria-label="YouTube" className="text-[#FF1313]">
              <Image src="/images/youtube-icon.svg" alt="YouTube" width={18} height={14} />
            </a>
            <a href="#" aria-label="Twitch">
              <Image src="/images/twitch-icon.svg" alt="Twitch" width={18} height={16} />
            </a>
          </div>

          {/* Policy links */}
          <div className="flex items-center space-x-2 mb-8">
            <a href="#" className="text-xs font-bold tracking-widest uppercase">Privacy Policy</a>
            <Image src="/images/footer-divider.svg" alt="" width={1} height={16} />
            <a href="#" className="text-xs font-bold tracking-widest uppercase">Terms of Services</a>
            <Image src="/images/footer-divider.svg" alt="" width={1} height={16} />
            <a href="#" className="text-xs font-bold tracking-widest uppercase">Code of Conduct</a>
          </div>

          {/* Copyright information */}
          <p className="text-white text-sm opacity-50">
            © 2018 Outpost Games, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}