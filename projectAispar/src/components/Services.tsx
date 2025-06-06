import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, BarChart3, Globe, ShieldCheck } from 'lucide-react';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (card) {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="service-card bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
    >
      <div className="mb-4 primary-gradient text-white p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
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

  const services = [
    {
      title: "Logistics Optimization",
      description: "AI-powered route planning and real-time tracking solutions to optimize delivery efficiency across Africa.",
      icon: <Truck size={24} />,
      delay: 0.2
    },
    {
      title: "Supply Chain Analytics",
      description: "Advanced data analytics to provide actionable insights for improving operational efficiency.",
      icon: <BarChart3 size={24} />,
      delay: 0.4
    },
    {
      title: "Cross-Border Solutions",
      description: "Seamless cross-border trade facilitation with automated customs documentation and compliance.",
      icon: <Globe size={24} />,
      delay: 0.6
    },
    {
      title: "Secure Transactions",
      description: "Blockchain-based transaction security ensuring transparent and tamper-proof supply chain records.",
      icon: <ShieldCheck size={24} />,
      delay: 0.8
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 primary-gradient-text inline-block">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions designed specifically for African supply chains, combining cutting-edge technology with local expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;