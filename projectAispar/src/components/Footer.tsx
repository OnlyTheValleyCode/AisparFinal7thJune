import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 font-montserrat font-bold text-xl">
                AISPAR Africa
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming supply chains across Africa with innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition-colors">Network</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Logistics Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Supply Chain Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cross-Border Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Secure Transactions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-end"
              />
              <button 
                type="submit" 
                className="primary-gradient text-white font-bold px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AISPAR Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;