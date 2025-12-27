
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SiteMode } from '../types';

export type PageID = 'home' | 'experience' | 'gallery' | 'sustainability' | 'contact';

interface NavbarProps {
  mode: SiteMode;
  onBookClick: () => void;
  primaryColor: string;
  activePage: PageID;
  onNavigate: (page: PageID) => void;
  onModeSwitch: (mode: SiteMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode, onBookClick, primaryColor, activePage, onNavigate, onModeSwitch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageID }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Experiences', id: 'experience' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Our Earth', id: 'sustainability' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: PageID) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const isDarkText = isScrolled || activePage !== 'home';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl py-6 shadow-sm translate-y-0' 
            : 'bg-transparent py-10 translate-y-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <button onClick={() => handleLinkClick('home')} className="flex flex-col text-left group">
              <span 
                className={`text-xl font-serif font-bold tracking-tight transition-colors duration-700 ${isDarkText ? 'text-black' : 'text-white'}`}
              >
                C.B.E
              </span>
              <span className={`text-[8px] uppercase tracking-[0.4em] opacity-50 ${isDarkText ? 'text-black' : 'text-white'}`}>Wayanad Luxury</span>
            </button>
            
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-all hover:opacity-100 ${
                    activePage === link.id ? 'opacity-100 font-bold underline underline-offset-8' : 'opacity-50'
                  } ${isDarkText ? 'text-black' : 'text-white'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className={`hidden lg:flex items-center space-x-4 border-x px-8 transition-colors ${isDarkText ? 'border-black/10' : 'border-white/10'}`}>
              <button 
                onClick={() => onModeSwitch('VILLA')}
                className={`text-[9px] uppercase tracking-[0.3em] transition-all hover:opacity-100 ${mode === 'VILLA' ? 'opacity-100 font-bold' : 'opacity-40'} ${isDarkText ? 'text-black' : 'text-white'}`}
              >
                The Villa
              </button>
              <span className={`text-[9px] opacity-20 ${isDarkText ? 'text-black' : 'text-white'}`}>/</span>
              <button 
                onClick={() => onModeSwitch('VIEW')}
                className={`text-[9px] uppercase tracking-[0.3em] transition-all hover:opacity-100 ${mode === 'VIEW' ? 'opacity-100 font-bold' : 'opacity-40'} ${isDarkText ? 'text-black' : 'text-white'}`}
              >
                The View
              </button>
            </div>

            <button
              onClick={onBookClick}
              className={`hidden lg:block text-[10px] uppercase tracking-[0.4em] font-bold border-b transition-all pb-1 ${isDarkText ? 'text-black border-black/20 hover:border-black' : 'text-white border-white/20 hover:border-white'}`}
            >
              Start Inquiry
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden transition-colors ${isDarkText ? 'text-black' : 'text-white'}`}
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
          <div className="flex justify-center space-x-8 mb-4">
             <button 
                onClick={() => { onModeSwitch('VILLA'); setIsMobileMenuOpen(false); }}
                className={`text-[11px] uppercase tracking-[0.4em] border px-4 py-2 ${mode === 'VILLA' ? 'bg-white text-black' : 'border-white/20 text-white/60'}`}
             >
               The Villa
             </button>
             <button 
                onClick={() => { onModeSwitch('VIEW'); setIsMobileMenuOpen(false); }}
                className={`text-[11px] uppercase tracking-[0.4em] border px-4 py-2 ${mode === 'VIEW' ? 'bg-white text-black' : 'border-white/20 text-white/60'}`}
             >
               The View
             </button>
          </div>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-4xl font-serif italic transition-all hover:text-white/40 ${activePage === link.id ? 'text-white underline underline-offset-8' : 'text-white/50'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
             onClick={() => { setIsMobileMenuOpen(false); onBookClick(); }}
             className="text-[10px] uppercase tracking-[0.5em] font-bold mt-12 text-white/50 border-white/20 border-t pt-12 w-full"
          >
            Start Inquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
