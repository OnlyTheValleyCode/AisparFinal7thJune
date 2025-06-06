import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    
    if (section && heading && form && info) {
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

      // Animate form
      gsap.from(form, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animate info
      gsap.from(info, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="primary-gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your supply chain? Reach out to our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form 
            ref={formRef}
            className="bg-white rounded-xl shadow-lg p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-end focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-end focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                Your Message
              </label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-end focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="primary-gradient text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
            >
              Send Message
            </button>
          </form>
          
          <div 
            ref={infoRef}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Reach out to us directly or fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="primary-gradient text-white p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@aispar-africa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="primary-gradient text-white p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+254 700 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="primary-gradient text-white p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Westlands Business Park, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;