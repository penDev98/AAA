import React from 'react';
import { Clock } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gray-50 pt-52 pb-24 md:pt-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Automate Your Growth with{' '}
          <span className="text-blue-600">AI Systems</span> That Work
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We build custom chatbots, outreach systems, and internal automations that save time, 
          cut costs, and grow your business — all without hiring.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={scrollToBooking}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book your free audit call
          </button>
          
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">No-pressure 30 minute discovery call</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;