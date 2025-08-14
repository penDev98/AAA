import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AIBenefits from './components/AIBenefits';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AIBenefits />
      <Services />
      <Process />
      <About />
      <Footer />
    </div>
  );
}

export default App;