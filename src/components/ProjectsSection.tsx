import React, { useState } from 'react';
import { ArrowRightIcon, XIcon } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';
export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = [{
    title: 'Manufacturing Process Automation',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070',
    description: 'Automated quality control and inventory management system for a leading manufacturer.',
    extendedDescription: "This comprehensive automation solution revolutionized the client's manufacturing process by implementing real-time quality control checks and inventory tracking. Using IoT sensors and machine learning algorithms, we reduced defect rates by 37% and optimized inventory levels, resulting in a 22% reduction in storage costs. The system provides real-time dashboards and predictive maintenance alerts, minimizing downtime and maximizing production efficiency.",
    technologies: ['IoT Sensors', 'Machine Learning', 'Real-time Analytics', 'Predictive Maintenance'],
    results: ['37% reduction in defect rates', '22% decrease in inventory costs', '15% increase in production efficiency']
  }, {
    title: 'Financial Services Workflow',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
    description: 'End-to-end automation of loan processing and approval workflows.',
    extendedDescription: "We transformed the client's manual loan processing system into a fully automated digital workflow, reducing the average processing time from 7 days to just 24 hours. The solution integrates document scanning with OCR technology, automated credit checks, and an AI-powered risk assessment engine. The system maintains compliance with all relevant financial regulations while providing a seamless experience for both customers and loan officers.",
    technologies: ['OCR Technology', 'AI Risk Assessment', 'Digital Signatures', 'Compliance Automation'],
    results: ['85% faster loan processing', '60% reduction in manual paperwork', '45% increase in application throughput']
  }, {
    title: 'Healthcare Data Integration',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
    description: 'Integrated patient data across multiple systems for improved care coordination.',
    extendedDescription: 'This solution bridged the gap between disparate healthcare systems, creating a unified patient data platform that maintains HIPAA compliance while enabling seamless information sharing between departments. We implemented secure API connections between legacy systems and modern platforms, ensuring that patient records, test results, and treatment plans are always up-to-date and accessible to authorized personnel. The platform includes real-time alerts for critical patient events and automated scheduling for follow-up care.',
    technologies: ['HIPAA-Compliant APIs', 'Secure Data Exchange', 'Real-time Alerts', 'Automated Scheduling'],
    results: ['42% reduction in administrative time', '68% faster access to patient records', '23% improvement in care coordination metrics']
  }];
  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{' '}
            <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <ScribbleElement type="arrow" position="top-left" color="#60A5FA" rotation={-15} />
          <ScribbleElement type="note" text="see our success stories!" position="bottom-right" color="#60A5FA" />
          <p className="text-gray-400 max-w-xl mx-auto">
            See how we can help you transform your business through automation.
          </p>
        </div>
        <div className={`grid grid-cols-1 ${expandedProject === null ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-8`}>
          {projects.map((project, index) => <div key={index} className={`backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl overflow-hidden 
                transition-all duration-500 ease-in-out ${expandedProject === index ? 'col-span-full' : 'hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] pulse-glow'}`}>
              <div className={`${expandedProject === index ? 'flex flex-col md:flex-row' : ''}`}>
                <div className={`relative ${expandedProject === index ? 'md:w-1/3' : ''}`} onClick={() => toggleProject(index)}>
                  <div className={`relative ${expandedProject === index ? 'h-64 md:h-auto' : 'h-48'} overflow-hidden`}>
                    <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-transform duration-700 ${expandedProject !== index ? 'group-hover:scale-105' : ''}`} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs backdrop-blur-md bg-black/30 border border-gray-700 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`p-6 ${expandedProject === index ? 'md:w-2/3' : ''}`} onClick={() => expandedProject !== index ? toggleProject(index) : undefined}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    {expandedProject === index && <button onClick={e => {
                  e.stopPropagation();
                  setExpandedProject(null);
                }} className="p-2 backdrop-blur-md bg-white/10 border border-gray-700 rounded-full hover:bg-white/20 hover:border-purple-500/50 transition-colors" aria-label="Close">
                        <XIcon size={16} />
                      </button>}
                  </div>
                  {expandedProject === index ? <div className="animate-fadeIn space-y-4">
                      <p className="text-gray-300">
                        {project.extendedDescription}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => <span key={i} className="px-3 py-1 text-xs backdrop-blur-md bg-white/5 border border-gray-700 rounded-full hover:border-purple-500/30">
                              {tech}
                            </span>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">
                          Key Results
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                          {project.results.map((result, i) => <li key={i}>{result}</li>)}
                        </ul>
                      </div>
                      <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-2" onClick={e => e.stopPropagation()}>
                        Full case study{' '}
                        <ArrowRightIcon size={16} className="ml-2" />
                      </a>
                    </div> : <>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors" onClick={e => e.stopPropagation()}>
                        View case study{' '}
                        <ArrowRightIcon size={16} className="ml-2" />
                      </a>
                    </>}
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="px-6 py-3 rounded-full backdrop-blur-lg bg-white/5 border border-gray-700 hover:bg-white/10 hover:border-purple-500/50 transition-all inline-block">
            View All Projects
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl parallax-bg"></div>
    </section>;
};