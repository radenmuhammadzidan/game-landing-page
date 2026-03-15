import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    if (email) {
      alert(`Thank you for subscribing! Email: ${email}`);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="relative py-16 overflow-hidden bg-dark">
      {/* Background image and overlay */}
      <div className={`absolute inset-0 z-0 w-100 left-20 bg-[url('/images/newsletter-bg.webp')] bg-contain`}>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div>
      </div>
      <div className="absolute inset-0 z-0 w-full bg-radial-[at_15%_50%] from-[rgba(0,0,0,0.2)] to-black to-55%"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center h-full pt-8">
        {/* Title section */}
        <div className="mb-12 text-center">
          <h3 className="font-bebas text-xl md:text-2xl tracking-widest text-white mb-2">
            Want to stay in touch?
          </h3>
          <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider text-white">
            newsletter SUBSCRIBE
          </h1>
        </div>

        {/* Description text */}
        <div className="max-w-xl text-center mb-12">
          <p className="text-white text-base md:text-lg">
            In order to start receiving our news, all you have to do is enter
            your email address. Everything else will be taken care of by us.
            We will send you emails containing information about game. We
            don&apos;t spam.
          </p>
        </div>

        {/* Subscription form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-[0.08] rounded flex-1 p-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={handleEmailChange}
              className="bg-transparent w-full text-primary outline-none placeholder:text-white placeholder:opacity-50 text-lg" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-primary py-3 px-8 rounded text-dark font-bold cursor-pointer"
          >
            Subscribe now
          </button>
        </form>
      </div>
    </section>
  );
} 