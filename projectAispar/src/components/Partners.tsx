import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    
    if (section && heading) {
      gsap.from(heading, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  const partnerLogos = [
    { name: "Company 1", logo: "https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg" },
    { name: "Company 2", logo: "https://images.pexels.com/photos/5474304/pexels-photo-5474304.jpeg" },
    { name: "Company 3", logo: "https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg" },
    { name: "Company 4", logo: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg" },
    { name: "Company 5", logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg" },
    { name: "Company 6", logo: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg" },
    { name: "Company 7", logo: "https://images.pexels.com/photos/5473952/pexels-photo-5473952.jpeg" },
    { name: "Company 8", logo: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg" },
  ];

  // Duplicate the logos for seamless scrolling
  const allLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section 
      ref={sectionRef}
      id="partners" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="primary-gradient-text">Trusted</span> Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations across Africa to revolutionize supply chains.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-12 partner-scroll w-max"
          >
            {allLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 h-24 w-48 bg-gray-100 rounded-lg flex items-center justify-center p-4"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;