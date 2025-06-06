import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stat = statRef.current;
    
    if (stat) {
      // Animate the stat item
      gsap.from(stat, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: stat,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animate the counter
      const valueElement = stat.querySelector('.stat-value');
      if (valueElement) {
        const finalValue = valueElement.textContent || '';
        
        // Only animate if it's a number
        if (!isNaN(Number(finalValue.replace(/[^0-9.-]+/g, '')))) {
          let startValue = 0;
          const endValue = parseInt(finalValue.replace(/[^0-9.-]+/g, ''));
          const duration = 2;
          const increment = endValue / (duration * 60); // 60fps
          
          gsap.to(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top bottom-=100",
              onEnter: () => {
                const counter = setInterval(() => {
                  startValue += increment;
                  if (startValue >= endValue) {
                    valueElement.textContent = finalValue;
                    clearInterval(counter);
                  } else {
                    valueElement.textContent = finalValue.replace(
                      /[0-9]+/,
                      Math.floor(startValue).toString()
                    );
                  }
                }, 16);
              }
            }
          });
        }
      }
    }
  }, [delay]);

  return (
    <div ref={statRef} className="text-center p-6">
      <div className="stat-value text-4xl md:text-5xl font-bold mb-2 primary-gradient-text">
        {value}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  const stats = [
    { value: "25+", label: "African Countries", delay: 0.2 },
    { value: "500+", label: "Businesses Served", delay: 0.4 },
    { value: "30%", label: "Efficiency Increase", delay: 0.6 },
    { value: "1.2M", label: "Transactions Monthly", delay: 0.8 }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="primary-gradient-text">Impact</span> Across Africa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming supply chains across the continent with measurable results and continuous innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;