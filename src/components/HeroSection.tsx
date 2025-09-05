import React from 'react';
import { ChevronRightIcon, ZapIcon, MousePointerIcon, BarChart3Icon } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';
import './GlassButton.css';

export const HeroSection = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block backdrop-blur-lg bg-white/5 border border-gray-700 rounded-full px-4 py-1.5">
              <span className="text-sm text-gray-300 flex items-center">
                <span className="bg-blue-500 h-2 w-2 rounded-full mr-2"></span>
                Automation solutions for modern businesses
              </span>
            </div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Businesses Through{' '}
                
              </h1>
              <span className="text-7xl font-caveat font-semibold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
                  Intelligent Automation
              </span>
              <ScribbleElement type="arrow" position="top-right" color="#60A5FA" rotation={15} />
              <ScribbleElement type="note" text="future of work!" position="bottom-right" color="#A78BFA" />
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              We help companies streamline processes, reduce costs, and increase
              efficiency with cutting-edge automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="glass-button px-6 py-3">
                Get Started
                <ChevronRightIcon size={18} className="ml-2" />
              </a>
              <a href="#services" className="px-6 py-3 rounded-full backdrop-blur-lg bg-white/5 border border-gray-700 hover:bg-white/10 transition-all text-center">
                Explore Services
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700 overflow-hidden">
                <div className="absolute -inset-1/4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                <div className="h-full w-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-all">
                      <ZapIcon className="text-blue-400 mb-3" />
                      <h3 className="text-sm font-medium">
                        Process Automation
                      </h3>
                    </div>
                    <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-all">
                      <MousePointerIcon className="text-purple-400 mb-3" />
                      <h3 className="text-sm font-medium">
                        Workflow Optimization
                      </h3>
                    </div>
                    <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-all">
                      <BarChart3Icon className="text-green-400 mb-3" />
                      <h3 className="text-sm font-medium">Data Analytics</h3>
                    </div>
                    <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-all">
                      <ZapIcon className="text-yellow-400 mb-3" />
                      <h3 className="text-sm font-medium">AI Integration</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      {/* Custom styles for the text effect */}
      <style jsx>{`
        .mismatched-text-container {
          display: inline-block;
          position: relative;
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }
        .font-serif {
          font-family: Georgia, 'Times New Roman', serif;
        }
        .italic {
          font-style: italic;
        }
      `}</style>
    </section>;
};