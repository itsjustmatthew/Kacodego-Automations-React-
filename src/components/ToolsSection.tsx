import React from 'react';
import { ScribbleElement } from './ScribbleElement';
export const ToolsSection = () => {
  const tools = [{
    name: 'n8n',
    description: 'Powerful workflow automation tool with a fair-code distribution model',
    logo: 'https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1757076601041x436652815494073400/pngwing.com%20%281%29.png',
    color: 'bg-blue-500'
  }, {
    name: 'Langchain',
    description: 'Framework for developing applications powered by language models',
    logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
    color: 'bg-green-500'
  }, {
    name: 'UiPath',
    description: 'Enterprise automation platform for robotic process automation',
    logo: 'https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1757076868470x277840188946848700/PATH_BIG.svg',
    color: 'bg-yellow-500'
  }, {
    name: 'Make',
    description: 'Visual platform that lets you design, build, and automate anything',
    logo: 'https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1757076607502x693879788538149100/unnamed.webp',
    color: 'bg-purple-500'
  }, {
    name: 'Zapier',
    description: 'Connect your apps and automate workflows with easy integrations',
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg',
    color: 'bg-orange-500'
  }];
  return <section id="tools" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools We{' '}
            <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Use
            </span>
          </h2>
          <ScribbleElement type="underline" position="bottom-center" color="#60A5FA" />
          <ScribbleElement type="note" text="best in class!" position="top-right" color="#A78BFA" rotation={-5} />
          <p className="text-gray-400 max-w-xl mx-auto">
            We leverage industry-leading automation tools to deliver powerful
            solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => <div key={index} className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl p-6 
                transition-all duration-300 hover:bg-white/10 
                hover:border-gray-600 group">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center ${tool.color}/10 border border-gray-700 mr-4`}>
                  <img src={tool.logo} alt={`${tool.name} logo`} className="max-w-[80%] max-h-[80%] object-contain" />
                </div>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
              </div>
              <p className="text-gray-400">{tool.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block backdrop-blur-lg bg-white/5 border border-gray-700 rounded-full px-6 py-3">
            <p className="text-gray-300">
              Our team is certified in these tools and many more to provide you
              with the best automation solutions.
            </p>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl parallax-bg"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl parallax-bg"></div>
    </section>;
};