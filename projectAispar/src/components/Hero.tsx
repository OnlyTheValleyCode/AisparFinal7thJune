import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const tagline = taglineRef.current;

    if (hero && text && tagline) {
      // Parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to(hero, {
          backgroundPosition: `${50 + x * 10}% ${50 + y * 10}%`,
          duration: 1,
          ease: 'power1.out'
        });
      };

      // Text animation
      const tl = gsap.timeline();
      
      tl.from(text, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      // Tagline animation (word by word)
      const words = tagline.textContent?.split(' ') || [];
      
      // Clear the tagline to rebuild it
      tagline.textContent = '';
      
      words.forEach((word) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.style.display = 'inline-block';
        tagline.appendChild(wordSpan);
      });
      
      gsap.from(tagline.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5
      });

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div 
        ref={textRef}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center"
      >
        <h1 className="text-hero-mobile md:text-hero-desktop text-white font-bold mb-6 leading-tight">
          Transforming African Supply Chains
        </h1>
        <h2 
          ref={taglineRef}
          className="text-xl md:text-2xl text-white font-medium mb-8"
        >
          Innovative Technology Solutions for a Connected Continent
        </h2>
        <button className="bg-secondary hover:bg-opacity-90 text-gray-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Discover Our Solutions
        </button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;