import React from 'react';
import { Search, Building as Build, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discovery Call',
      description: 'We get aligned on goals and identify the biggest automation opportunities.'
    },
    {
      number: '2',
      icon: Build,
      title: 'System Build',
      description: 'We build your custom chatbot or automation using AI tools and APIs.'
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Launch & Optimize',
      description: 'Your system goes live. We monitor, adjust, and improve based on data.'
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Process, Big Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;