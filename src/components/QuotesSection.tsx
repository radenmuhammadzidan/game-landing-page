import Image from 'next/image';
import Quote from './Quote';

export default function QuotesSection() {
  const quotes = [
    {
      id: 1,
      avatar: '/images/quote-avatar-1.webp',
      name: 'Evan Lahti',
      workplace: 'PC Gamer',
      quoteText: 'One of my gaming highlights of the year.',
      date: 'October 18, 2018'
    },
    {
      id: 2,
      avatar: '/images/quote-avatar-2.webp',
      name: 'Jada Griffin',
      workplace: 'Nerdreactor',
      quoteText: 'The next big thing in the world of streaming and survival games.',
      date: 'December 21, 2018'
    },
    {
      id: 3,
      avatar: '/images/quote-avatar-3.webp',
      name: 'Aaron Williams',
      workplace: 'Uproxx',
      quoteText: 'Snoop Dogg Playing The Wildly Entertaining "SOS" Is Ridiculous.',
      date: 'December 24, 2018'
    }
  ];

  return (
    <section id="quotes" className="relative min-h-screen py-16 overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background color */}
        <div className="absolute inset-0 bg-dark"></div>
        {/* Background image */}
        <Image 
          src="/images/bg-image-5.webp" 
          alt="Background" 
          fill 
          className="object-cover mix-blend-overlay opacity-70"
        />
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row h-full pt-16 gap-16 lg:gap-24">
        {/* Left content */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="mb-8">
            <h3 className="font-bebas text-xl md:text-2xl tracking-widest text-white mb-2">
              What people think?
            </h3>
            <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider text-white">
              Press quotes
            </h1>
          </div>
          
          <p className="text-white text-base mb-12 max-w-lg">
            Our goal is to create a product and service that you&apos;re satisfied
            with and use it every day. This is why we&apos;re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
          
          <button className="bg-primary text-dark font-bold py-3 px-6 rounded w-fit mb-8 lg:mb-0">
            read more testimonials
          </button>
        </div>

        {/* Right quotes content */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote) => (
              <Quote 
                key={quote.id}
                avatar={quote.avatar}
                name={quote.name}
                workplace={quote.workplace}
                quoteText={quote.quoteText}
                date={quote.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 