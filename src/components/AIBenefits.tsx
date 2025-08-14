import React from 'react';
import { Check, Clock } from 'lucide-react';

const AIBenefits = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      title: 'Stop wasting hundreds of work hours on repetitive tasks',
      description: 'Using powerful workflow automations we are able to help you automate annoying and time-heavy tasks.'
    },
    {
      title: 'Let AI handle 80% of your customer support',
      description: 'Using the power of AI chatbots trained on all of your company data, you will be able to handle 80% of your support tickets with AI.'
    },
    {
      title: 'Offload new employee onboarding to AI',
      description: 'Chatbots for internal use can make your employee\'s life 10x easier, and make them 10x more productive.'
    }
  ];

  return (
    <section className="pt-16 pb-24 md:pt-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              You can't beat AI... So why not{' '}
              <span className="text-orange-500">use</span> it?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-16">
              With the public launch of OpenAI's ChatGPT and the GPT-4 LLM, people are starting to see 
              the true power of AI. We help you utilize that power into your business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
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

export default AIBenefits;