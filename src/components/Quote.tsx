import Image from 'next/image';

interface QuoteProps {
  avatar: string;
  name: string;
  workplace: string;
  quoteText: string;
  date: string;
}

export default function Quote({ avatar, name, workplace, quoteText, date }: QuoteProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] rounded-lg p-4 w-full max-w-md">
      <div className="flex flex-col">
        {/* Quote header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            {/* Avatar */}
            <div className="relative mr-6">
              <div className="w-16 h-16 rounded-full bg-primary absolute -bottom-1 -right-1"></div>
              <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-md">
                <Image 
                  src={avatar} 
                  alt={name} 
                  width={64} 
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Name and workplace */}
            <div>
              <h4 className="font-bebas text-xl tracking-widest text-primary">{name}</h4>
              <p className="text-white text-opacity-50 text-sm">{workplace}</p>
            </div>
          </div>
          
          {/* Twitter icon */}
          <div>
            <Image 
              src="/images/twitter-icon.svg" 
              alt="Twitter" 
              width={24}
              height={24}
              className="opacity-30"
            />
          </div>
        </div>
        
        {/* Quote content */}
        <div>
          <p className="text-white text-base mb-3">{quoteText}</p>
          <p className="text-white text-opacity-50 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
} 