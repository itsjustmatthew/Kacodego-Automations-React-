import React from 'react';
import { CodeIcon, BotIcon, SettingsIcon, DatabaseIcon, BarChart2Icon, LayersIcon } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';
export const ServicesSection = () => {
  const services = [{
    icon: <CodeIcon className="text-blue-400" />,
    title: 'Custom Automation Solutions',
    description: 'Tailored automation solutions designed specifically for your business needs and processes.'
  }, {
    icon: <BotIcon className="text-purple-400" />,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn and adapt to your business data and processes.'
  }, {
    icon: <SettingsIcon className="text-green-400" />,
    title: 'Process Optimization',
    description: 'Streamline your workflows and eliminate inefficiencies through intelligent automation.'
  }, {
    icon: <DatabaseIcon className="text-yellow-400" />,
    title: 'Data Integration',
    description: 'Connect and synchronize data across all your business systems and platforms.'
  }, {
    icon: <BarChart2Icon className="text-red-400" />,
    title: 'Analytics & Reporting',
    description: 'Gain insights from your data with automated analytics and custom reporting solutions.'
  }, {
    icon: <LayersIcon className="text-cyan-400" />,
    title: 'Legacy System Integration',
    description: 'Connect your existing systems with modern automation technologies.'
  }];
  return <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Automation{' '}
            <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <ScribbleElement type="underline" position="bottom-right" color="#60A5FA" />
          <ScribbleElement type="note" text="streamline your workflow!" position="top-right" color="#60A5FA" rotation={-5} />
          <p className="text-gray-400 max-w-xl mx-auto">
            We provide comprehensive automation solutions to help businesses
            operate more efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl p-6 
                transition-all duration-500 group hover:bg-white/10 
                hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] 
                pulse-glow">
              <div className="mb-4 p-3 inline-block backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg 
                group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>)}
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl parallax-bg"></div>
    </section>;
};