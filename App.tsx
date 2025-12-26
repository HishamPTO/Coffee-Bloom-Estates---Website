
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight, ChevronLeft, X, MoveDown } from 'lucide-react';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import { 
  COLORS_VILLA, 
  COLORS_VIEW, 
  PROPERTY_VILLA, 
  PROPERTY_VIEW, 
  CONTACT_INFO,
  getIcon
} from './constants';
import { SiteMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<SiteMode>('VILLA');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentTheme = mode === 'VILLA' ? COLORS_VILLA : COLORS_VIEW;
  const currentProperty = mode === 'VILLA' ? PROPERTY_VILLA : PROPERTY_VIEW;

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.background;
    setIsLoaded(true);
  }, [currentTheme.background]);

  // Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [mode]);

  const handleModeSwitch = (newMode: SiteMode) => {
    if (newMode !== mode) {
      setIsLoaded(false);
      setTimeout(() => {
        setMode(newMode);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsLoaded(true);
      }, 400);
    }
  };

  return (
    <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ color: currentTheme.textDark }}>
      <Navbar mode={mode} onBookClick={() => setIsBookingOpen(true)} primaryColor={currentTheme.primary} />

      {/* Hero Section - The Cinematic Entrance */}
      <header id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={currentProperty.heroImage} 
            className="w-full h-full object-cover scale-105 parallax-bg transition-transform duration-[2s] ease-out"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] font-light mb-6 block animate-in fade-in slide-in-from-bottom duration-1000">
            {currentProperty.location}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light mb-8 leading-none animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {currentProperty.name.split(' ')[1]}
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto font-light tracking-wide opacity-80 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            {currentProperty.tagline}
          </p>
        </div>

        {/* Property Switcher Bottom - Luxury Toggle */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-8 flex flex-col md:flex-row justify-between items-center text-white/50 space-y-6 md:space-y-0">
          <div className="flex space-x-12">
            <button 
              onClick={() => handleModeSwitch('VILLA')}
              className={`text-[10px] uppercase tracking-[0.4em] property-switch-btn relative font-medium transition-colors hover:text-white ${mode === 'VILLA' ? 'text-white active' : ''}`}
            >
              The Villa
            </button>
            <button 
              onClick={() => handleModeSwitch('VIEW')}
              className={`text-[10px] uppercase tracking-[0.4em] property-switch-btn relative font-medium transition-colors hover:text-white ${mode === 'VIEW' ? 'text-white active' : ''}`}
            >
              The View
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-white/20 animate-bounce" />
          </div>
        </div>
      </header>

      {/* The Dwelling - Architectural Section */}
      <section id="details" className="py-32 px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Content - Editorial style */}
            <div className="lg:col-span-5 reveal">
              <span className="text-[10px] uppercase tracking-[0.5em] font-medium mb-6 block text-gray-400">01. The Sanctuary</span>
              <h2 className="text-5xl lg:text-7xl font-serif mb-12 leading-tight">
                Refined <br />
                <span className="italic">Solitude</span>
              </h2>
              <p className="text-lg leading-relaxed font-light text-gray-600 mb-12">
                {currentProperty.longDesc}
              </p>
              
              <div className="space-y-10 border-t border-gray-100 pt-10">
                <div className="grid grid-cols-2 gap-8">
                  {currentProperty.amenities.slice(0, 4).map((item) => (
                    <div key={item.label} className="flex flex-col space-y-3">
                      <div className="opacity-40">{getIcon(item.icon, currentTheme.primary)}</div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="group flex items-center space-x-6 text-[10px] uppercase tracking-[0.4em] font-bold mt-8"
                  style={{ color: currentTheme.primary }}
                >
                  <span>Reserve Experience</span>
                  <div className="w-12 h-[1px] bg-current transition-all group-hover:w-20" />
                </button>
              </div>
            </div>

            {/* Right Content - Overlapping Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative reveal">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 shadow-2xl">
                <img src={currentProperty.gallery[1]} alt="Estate View" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="hidden lg:block absolute -left-12 bottom-12 w-1/2 shadow-2xl">
                <img src={currentProperty.gallery[2]} alt="Interior" className="w-full aspect-square object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy - Full Width Quote Experience */}
      <section className="relative py-48 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src={currentProperty.gallery[0]} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
           <span className="text-[10px] uppercase tracking-[0.6em] mb-12 block text-white/50">Our Philosophy</span>
           <h3 className="text-4xl md:text-6xl font-serif mb-12 italic">"{currentProperty.philosophy.quote}"</h3>
           <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
             {currentProperty.philosophy.description}
           </p>
           <div className="mt-16 text-[11px] uppercase tracking-[0.4em] font-bold">
             — {currentProperty.philosophy.title}
           </div>
        </div>
      </section>

      {/* Gallery - Minimal Grid */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
             <div className="reveal">
               <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2 block">02. Visuals</span>
               <h2 className="text-4xl lg:text-5xl font-serif">Wayanad Frames</h2>
             </div>
             <div className="hidden md:block text-right reveal">
               <p className="text-xs uppercase tracking-[0.3em] font-light max-w-xs text-gray-400">A curated collection of life in the high-altitude spice estates.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 reveal" onClick={() => setLightboxIndex(0)}>
              <img src={currentProperty.gallery[0]} className="w-full h-[500px] object-cover hover:opacity-90 transition-opacity cursor-pointer shadow-lg" />
            </div>
            <div className="md:col-span-5 grid grid-cols-1 gap-8">
              <div className="reveal" onClick={() => setLightboxIndex(1)}>
                <img src={currentProperty.gallery[1]} className="w-full h-[234px] object-cover hover:opacity-90 transition-opacity cursor-pointer shadow-lg" />
              </div>
              <div className="reveal" onClick={() => setLightboxIndex(2)}>
                <img src={currentProperty.gallery[2]} className="w-full h-[234px] object-cover hover:opacity-90 transition-opacity cursor-pointer shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Contact */}
      <footer id="footer" className="py-32 px-6 bg-[#0E0E0E] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div className="reveal">
               <h2 className="text-5xl lg:text-7xl font-serif mb-12">Coffee Bloom</h2>
               <p className="text-white/40 max-w-sm mb-12 font-light">
                 Private architectural sanctuaries spread across the mist-shrouded peaks of Wayanad, Kerala.
               </p>
               <div className="flex space-x-8">
                  <a href="#" className="hover:text-white/60 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-white/60 transition-colors"><Youtube size={20} /></a>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
               <div className="space-y-6">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Connect</span>
                 <p className="text-sm font-light text-white/60 leading-loose">
                   {CONTACT_INFO.address}<br />
                   {CONTACT_INFO.phone}<br />
                   {CONTACT_INFO.email}
                 </p>
               </div>
               <div className="space-y-6">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Explore</span>
                 <ul className="text-sm font-light text-white/60 space-y-3">
                   <li><a href="#details" className="hover:text-white transition-colors">Architecture</a></li>
                   <li><a href="#gallery" className="hover:text-white transition-colors">Visual Story</a></li>
                   <li><a href="#about" className="hover:text-white transition-colors">Environment</a></li>
                   <li><button onClick={() => setIsBookingOpen(true)} className="hover:text-white transition-colors">Inquire</button></li>
                 </ul>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-[9px] uppercase tracking-[0.5em] text-white/20">
            <span>&copy; 2025 Coffee Bloom Estates</span>
            <span className="mt-4 md:mt-0">Wayanad • Kerala • India</span>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[200] bg-[#0E0E0E] flex items-center justify-center p-4">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors">
            <X size={40} strokeWidth={1} />
          </button>
          <img 
            src={currentProperty.gallery[lightboxIndex]} 
            className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-in zoom-in duration-500"
          />
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        mode={mode} 
        primaryColor={currentTheme.primary}
      />
    </div>
  );
};

export default App;
