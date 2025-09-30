import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';


export function App() {
  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element, index) => {
        const speed = 0.05 + index * 0.02;
        const yPos = -(scrollY * speed);
        const el = element as HTMLElement;
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  return <div className="bg-[#0c1118] text-white min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        {/* Main dark gradient background - brightened */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#131a26] to-[#001455]"></div>
        {/* Large center circle gradient - brightened */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full bg-gradient-to-br from-[#182538]/30 to-transparent opacity-60 parallax-bg"></div>
        {/* Accent circles - brightened */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-3xl parallax-bg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-500/10 blur-3xl parallax-bg"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzMwMzA0MCIgZmlsbC1vcGFjaXR5PSIuMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <RevealOnScroll>
            <ServicesSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ToolsSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <AboutSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ProjectsSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ContactSection />
          </RevealOnScroll>
        </main>
        <Footer />
      </div>
      
      {/* Global styles for pulsing glow effect and handwriting font */}
      <style jsx global>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(139, 92, 246, 0.2);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.1);
          }
        }

        @keyframes rainbowGlow {
          0% {
            box-shadow: 0 0 15px 2px rgba(255, 0, 0, 0.3);
          }
          16.6% {
            box-shadow: 0 0 15px 2px rgba(255, 165, 0, 0.3);
          }
          33.3% {
            box-shadow: 0 0 15px 2px rgba(255, 255, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 15px 2px rgba(0, 255, 0, 0.3);
          }
          66.6% {
            box-shadow: 0 0 15px 2px rgba(0, 127, 255, 0.3);
          }
          83.3% {
            box-shadow: 0 0 15px 2px rgba(139, 0, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 15px 2px rgba(255, 0, 0, 0.3);
          }
        }

        @keyframes rainbowBorderGlow {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }

        .rainbow-glow {
          animation: rainbowGlow 6s infinite linear;
        }

        .rainbow-border-glow {
          position: relative;
          z-index: 1;
          border-radius: 9999px;
          border: 1px solid transparent;
          background: transparent;
          animation: rainbowGlow 6s infinite linear;
        }

        .rainbow-border-glow::before {
          content: '';
          position: absolute;
          z-index: -2;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red);
          border-radius: inherit;
          animation: rainbowBorderGlow 4s linear infinite;
        }

        .rainbow-border-glow::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #302E4D;
          border-radius: inherit;
        }

        .pulse-glow {
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .font-handwriting {
          font-family: 'Unbounded', cursive, sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .font-original-handwriting {
          font-family: 'Caveat', cursive, sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
          font-size: 1.125rem; /* Slightly increased font size */
        }
      `}</style>
    </div>;
}