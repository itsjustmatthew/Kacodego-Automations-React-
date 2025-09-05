import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-[#131a26]/70 py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-handwriting">
            KACODEGO
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#tools" className="text-gray-300 hover:text-white transition-colors">
            Tools
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
          <a href="#contact" className="rounded-full transition-all border-2 border-transparent rainbow-border-glow">
            <span className="px-5 py-2 block rounded-full bg-[#302E4D] hover:bg-[#3a3861]">Get Started</span>
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <nav className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-[#131a26]/90 border-t border-gray-800">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#tools" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Tools
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="rounded-full text-center border-2 border-transparent rainbow-border-glow" onClick={() => setMobileMenuOpen(false)}>
              <span className="px-5 py-2 block rounded-full bg-[#302E4D] hover:bg-[#3a3861]">Get Started</span>
            </a>
          </div>
        </nav>}
    </header>;
};