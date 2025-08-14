import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            © 2025 LeadOps. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:contact@leadops.com" 
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;