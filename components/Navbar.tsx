
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SiteMode } from '../types';

interface NavbarProps {
  mode: SiteMode;
  onBookClick: () => void;
  primaryColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ mode, onBookClick, primaryColor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture', href: '#details' },
    { label: 'Frames', href: '#gallery' },
    { label: 'Heritage', href: '#about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl py-6 shadow-sm translate-y-0' 
            : 'bg-transparent py-10 translate-y-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <a href="#home" className="flex flex-col">
              <span 
                className={`text-xl font-serif font-bold tracking-tight transition-colors duration-700 ${isScrolled ? 'text-black' : 'text-white'}`}
              >
                C.B.E
              </span>
            </a>
            
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-colors hover:opacity-50 ${isScrolled ? 'text-black' : 'text-white'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={onBookClick}
              className={`hidden lg:block text-[10px] uppercase tracking-[0.4em] font-bold border-b transition-all pb-1 ${isScrolled ? 'text-black border-black/20 hover:border-black' : 'text-white border-white/20 hover:border-white'}`}
            >
              Inquire
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#0E0E0E] z-[100] transition-transform duration-700 flex flex-col justify-center items-center px-12 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-10 text-white/40 hover:text-white"
        >
          <X size={32} strokeWidth={1} />
        </button>
        
        <div className="flex flex-col space-y-12 text-center text-white">
          {['Home', 'Architecture', 'Frames', 'Heritage', 'Contact'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif italic hover:text-white/40 transition-colors"
            >
              {link}
            </a>
          ))}
          <button 
             onClick={() => { setIsMobileMenuOpen(false); onBookClick(); }}
             className="text-[10px] uppercase tracking-[0.5em] font-bold mt-12 text-white/50 border-white/20 border-t pt-12"
          >
            Start Inquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
