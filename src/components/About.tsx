import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Hi, I'm Kerim — Your AI Automation Partner
          </h2>
          
          <div className="bg-gray-50 p-12 rounded-2xl">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">K</span>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              I help founders, teams, and agencies save 10+ hours per week using smart automations. 
              With years of experience in software development, AI, and growth systems, I build 
              automations that actually save time and make money — not just look cool on paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;