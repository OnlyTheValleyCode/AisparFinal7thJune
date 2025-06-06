import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InteractiveMap from './components/InteractiveMap';
import Statistics from './components/Statistics';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SupportButton from './components/SupportButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <InteractiveMap />
      <Partners />
      <Contact />
      <Footer />
      <SupportButton />
    </div>
  );
}

export default App;