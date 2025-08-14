import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Lead<span className="text-blue-600">Ops</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;