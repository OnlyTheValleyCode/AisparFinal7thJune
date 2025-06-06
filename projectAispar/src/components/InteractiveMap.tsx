import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InteractiveMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const map = mapRef.current;
    const heading = headingRef.current;
    
    if (section && map && heading) {
      // Animate heading
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

      // Animate map
      gsap.from(map, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: map,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      });

      // Animate connection points
      const points = map.querySelectorAll('.connection-point');
      gsap.from(points, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: map,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      });

      // Animate connection lines
      const lines = map.querySelectorAll('.connection-line');
      gsap.from(lines, {
        width: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        scrollTrigger: {
          trigger: map,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  const connectionPoints = [
    { id: 'lagos', label: 'Lagos', top: '48%', left: '20%' },
    { id: 'nairobi', label: 'Nairobi', top: '55%', left: '60%' },
    { id: 'johannesburg', label: 'Johannesburg', top: '75%', left: '55%' },
    { id: 'cairo', label: 'Cairo', top: '25%', left: '45%' },
    { id: 'accra', label: 'Accra', top: '52%', left: '15%' },
    { id: 'kinshasa', label: 'Kinshasa', top: '58%', left: '35%' },
    { id: 'casablanca', label: 'Casablanca', top: '18%', left: '15%' },
    { id: 'addis', label: 'Addis Ababa', top: '42%', left: '58%' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="map" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="primary-gradient-text">Network</span> Across Africa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AISPAR connects major cities and trade hubs across the continent, creating an efficient and reliable supply chain network.
          </p>
        </div>
        
        <div 
          ref={mapRef}
          className="relative max-w-4xl mx-auto aspect-[4/3] bg-[url('https://images.pexels.com/photos/6124950/pexels-photo-6124950.jpeg')] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
        >
          {/* Overlay with semi-transparent gradient */}
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
          
          {/* Connection Points */}
          {connectionPoints.map((point) => (
            <div 
              key={point.id}
              className="connection-point absolute z-10 flex flex-col items-center"
              style={{ top: point.top, left: point.left }}
            >
              <div className="w-4 h-4 bg-secondary rounded-full shadow-lg pulse-animation"></div>
              <span className="mt-2 text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded whitespace-nowrap">
                {point.label}
              </span>
            </div>
          ))}
          
          {/* Connection Lines (simplified) */}
          <div className="connection-line absolute bg-secondary h-0.5 w-[30%] top-[50%] left-[20%] transform -rotate-12 opacity-70"></div>
          <div className="connection-line absolute bg-secondary h-0.5 w-[25%] top-[42%] left-[35%] transform rotate-12 opacity-70"></div>
          <div className="connection-line absolute bg-secondary h-0.5 w-[20%] top-[55%] left-[35%] transform -rotate-12 opacity-70"></div>
          <div className="connection-line absolute bg-secondary h-0.5 w-[15%] top-[52%] left-[15%] transform rotate-12 opacity-70"></div>
          <div className="connection-line absolute bg-secondary h-0.5 w-[25%] top-[60%] left-[35%] transform rotate-20 opacity-70"></div>
          <div className="connection-line absolute bg-secondary h-0.5 w-[20%] top-[25%] left-[25%] transform rotate-30 opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;