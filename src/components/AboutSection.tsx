import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';
export const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-gray-700 p-1">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img src="https://7ab97e58dc0749490380ced80f43695d.cdn.bubble.io/f1757010426261x147376907234225700/microsoft-365-oUbzU87d1Gc-unsplash%20%283%29.jpg" alt="Kacodego team working on automation solutions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="backdrop-blur-lg bg-white/10 border border-gray-700 rounded-lg p-4 max-w-md">
                    <p className="text-sm font-medium">
                      "Our mission is to empower businesses through intelligent
                      automation, making complex processes simple and
                      efficient."
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      - Kacodego Automations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{' '}
                <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
                  Kacodego
                </span>
              </h2>
              <ScribbleElement type="circle" position="top-right" color="#A78BFA" rotation={10} />
              <ScribbleElement type="note" text="who we are!" position="top-right" color="#A78BFA" rotation={-5} />
            </div>
            
            <p className="text-gray-400">
              Our team combines deep technical knowledge with
              business acumen to deliver solutions that drive real results. We
              believe in the power of automation to not just reduce costs, but
              to create new opportunities for innovation and growth.
            </p>
            <div className="space-y-3 pt-2">
            
              <div className="flex items-start">
                <CheckCircleIcon className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">
                  Industry-specific automation solutions and expertise
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">
                  Continuous innovation and technology advancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    </section>;
};