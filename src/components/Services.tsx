import React from 'react';
import { MessageCircle, Send, Bot, Zap, Users, Target, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Can Build For You
          </h2>
        </div>

        {/* Customer Support Chatbots */}
        <div className="mb-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                {/* Chat Interface Mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">AI Support</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                        <p className="text-sm text-gray-700">👋 Hi!</p>
                        <p className="text-sm text-gray-700">I'd like to ask if it's possible to get express shipping on my order?</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                        <p className="text-sm text-gray-700">I saw that your standard shipping takes 6 days but it'd be awesome if I can get it by Thursday</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-orange-500 text-white rounded-2xl rounded-br-md p-3 max-w-xs">
                        <p className="text-sm">Thank you for your inquiry! Yes, just pick Express Shipping on the checkout screen, and you'll receive your order on the next day.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                        <p className="text-sm text-gray-700">That's perfect! 😊</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-2">
                      <input 
                        type="text" 
                        placeholder="Enter your message..." 
                        className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        readOnly
                      />
                      <button className="bg-orange-500 p-2 rounded-full">
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Customer support chatbots
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We build custom chatbots trained on all of your company data – product descriptions, specifications, PDFs, customer support chat database, etc...
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When the AI is trained on data like this, it can handle a big part of your customer support.
              </p>
              <button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
              >
                Inquire about AI chatbot
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Workflow Automations */}
        <div className="mb-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                {/* Workflow Diagram */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl text-white text-2xl font-bold mb-4">
                        AI
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {/* Top row */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-yellow-600 text-xs font-bold">€</span>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-yellow-600 text-xs font-bold">€</span>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {/* Bottom row */}
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-gray-200 mb-2"></div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-gray-200 mb-2"></div>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 text-xs font-bold">M</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-gray-200 mb-2"></div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-gray-200 mb-2"></div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-gray-200 mb-2"></div>
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Workflow automations
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Manually doing repetitive tasks not only takes more time but also leaves room for human error. By creating AI workflow automations for your specific needs you'll be able to offload hours of work.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Imagine every time you close a client, they automatically received an onboarding link, Slack invitation, their own Drive folder was created and shared with them.
              </p>
              <button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
              >
                Inquire about workflow automations
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Internal Chatbots */}
        <div className="mb-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                {/* Internal Chat Interface */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">HR Assistant</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                        <p className="text-sm text-gray-700">What are the Mounting Hardware specifications for the Realme TV stick FHD?</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-orange-500 text-white rounded-2xl rounded-br-md p-3 max-w-xs">
                        <p className="text-sm">TV Stick, Remote, USB Cable, Power Adaptor, HDMI Extender</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-2">
                      <input 
                        type="text" 
                        placeholder="Enter your message..." 
                        className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm border-0 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        readOnly
                      />
                      <button className="bg-orange-500 p-2 rounded-full">
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Chatbots for internal use
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chatbots are not only useful for customer support. Internal use chatbots can be used for a variety of tasks – like helping onboard new employees, answering common questions, scheduling calls, etc.
              </p>
              <button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
              >
                Explore Internal Chatbots
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* AI Lead Generation */}
        <div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                {/* Lead Gen Workflow */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-blue-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Lead Scraping</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-green-600 rounded-full w-full"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Data Enrichment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-purple-200 rounded-full">
                          <div className="h-2 bg-purple-600 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">AI Personalization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-orange-200 rounded-full">
                          <div className="h-2 bg-orange-600 rounded-full w-1/4"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Multi-Channel Outreach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI-Powered Lead Generation & Outreach
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automated scraping, enrichment, personalization, and multi-channel outbound to bring in leads on autopilot. Scale your outreach without scaling your team.
              </p>
              <button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
              >
                Scale Your Lead Generation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;