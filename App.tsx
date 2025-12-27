
import React, { useState, useEffect } from 'react';
import { ArrowRight, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight, ChevronLeft, X, Quote, Trees, Bird, Globe } from 'lucide-react';
import Navbar, { PageID } from './components/Navbar';
import BookingModal from './components/BookingModal';
import { 
  COLORS_VILLA, 
  COLORS_VIEW, 
  PROPERTY_VILLA, 
  PROPERTY_VIEW, 
  CONTACT_INFO,
  WAYANAD_EXPERIENCES,
  SUSTAINABILITY_PILLARS,
  getIcon
} from './constants';
import { SiteMode } from './types';

// --- Page Components ---

const HomePage: React.FC<{ 
  mode: SiteMode, 
  currentProperty: any, 
  currentTheme: any, 
  setIsBookingOpen: (o: boolean) => void,
  setLightboxIndex: (i: number) => void,
  handleModeSwitch: (mode: SiteMode) => void
}> = ({ mode, currentProperty, currentTheme, setIsBookingOpen, setLightboxIndex, handleModeSwitch }) => (
  <>
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={currentProperty.heroImage} 
          className="w-full h-full object-cover scale-105 transition-transform duration-[2s] ease-out"
          style={{ filter: 'brightness(0.6)' }}
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

      {/* Floating Property Selector in Hero */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-full p-2 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
        <button 
          onClick={() => handleModeSwitch('VILLA')}
          className={`px-10 py-3 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${mode === 'VILLA' ? 'bg-white text-black shadow-lg' : 'text-white hover:text-white/70'}`}
        >
          The Villa
        </button>
        <button 
          onClick={() => handleModeSwitch('VIEW')}
          className={`px-10 py-3 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${mode === 'VIEW' ? 'bg-white text-black shadow-lg' : 'text-white hover:text-white/70'}`}
        >
          The View
        </button>
      </div>
    </header>

    <section className="py-32 px-6 lg:px-24 reveal active">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium mb-6 block text-gray-400">01. Architecture</span>
            <h2 className="text-5xl lg:text-7xl font-serif mb-12 leading-tight">
              Refined <br />
              <span className="italic">Solitude</span>
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-600 mb-12">
              {currentProperty.longDesc}
            </p>
            <div className="space-y-10 border-t border-gray-100 pt-10">
              <div className="grid grid-cols-2 gap-8">
                {currentProperty.amenities.slice(0, 4).map((item: any) => (
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
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
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

    <section className="relative py-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
         <img src={currentProperty.gallery[4]} className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
         <span className="text-[10px] uppercase tracking-[0.6em] mb-12 block text-white/50">Our Philosophy</span>
         <h3 className="text-4xl md:text-6xl font-serif mb-12 italic">"{currentProperty.philosophy.quote}"</h3>
         <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
           {currentProperty.philosophy.description}
         </p>
         <div className="mt-16 text-[11px] uppercase tracking-[0.4em] font-bold text-gray-400">
           — {currentProperty.philosophy.title}
         </div>
      </div>
    </section>
  </>
);

// ... (ExperiencePage, GalleryPage, SustainabilityPage, ContactPage components remain the same) ...

const ExperiencePage: React.FC<{ currentTheme: any }> = ({ currentTheme }) => (
  <div className="pt-40 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom duration-700">
    <div className="mb-24 text-center max-w-2xl mx-auto">
      <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-6 block">The Wayanad Way</span>
      <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">Beyond the <span className="italic">Balcony</span></h2>
      <p className="text-lg text-gray-500 font-light leading-relaxed">Curated local experiences designed to immerse you in the heartbeat of the Western Ghats.</p>
    </div>
    <div className="space-y-40">
      {WAYANAD_EXPERIENCES.map((exp, idx) => (
        <div key={exp.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2 lg:pl-20' : 'lg:pr-20'}`}>
            <h3 className="text-4xl font-serif">{exp.title}</h3>
            <p className="text-gray-600 font-light text-lg leading-loose">{exp.description}</p>
          </div>
          <div className="aspect-[4/5] overflow-hidden shadow-2xl relative">
            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
            <div className="absolute top-8 right-8 bg-white/90 p-6 backdrop-blur-md">
               {getIcon(exp.icon, currentTheme.primary)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GalleryPage: React.FC<{ currentProperty: any, setLightboxIndex: (i: number) => void }> = ({ currentProperty, setLightboxIndex }) => (
  <div className="pt-40 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom duration-700">
    <div className="mb-20">
      <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-4 block">Visual Story</span>
      <h2 className="text-5xl font-serif">Wayanad <span className="italic">Captured</span></h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentProperty.gallery.map((img: string, idx: number) => (
        <div key={idx} onClick={() => setLightboxIndex(idx)} className="relative group cursor-pointer overflow-hidden shadow-lg aspect-[4/5]">
           <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <span className="text-white text-[10px] uppercase tracking-widest font-bold">Expand View</span>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const SustainabilityPage: React.FC<{ currentTheme: any }> = ({ currentTheme }) => (
  <div className="pt-40 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom duration-700">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div className="lg:col-span-5 sticky top-40">
        <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-6 block">Our Earth</span>
        <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">Conservation <br/><span className="italic">& Community</span></h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
          As stewards of the Nilgiri Biosphere, we believe luxury should leave no trace other than inspiration. Our commitment is to the land, the wildlife, and the people of Wayanad.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-24">
        {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
          <div key={pillar.title} className="group">
             <div className="flex items-center space-x-6 mb-8">
                <div className="p-4 rounded-full border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-500">
                   {getIcon(pillar.icon, 'currentColor')}
                </div>
                <h3 className="text-3xl font-serif">{pillar.title}</h3>
             </div>
             <p className="text-xl font-light text-gray-500 leading-relaxed pl-20">
               {pillar.desc}
             </p>
          </div>
        ))}
        <div className="pt-12 pl-20">
          <img src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-video object-cover shadow-2xl" />
        </div>
      </div>
    </div>
  </div>
);

const ContactPage: React.FC<{ currentTheme: any }> = ({ currentTheme }) => (
  <div className="pt-40 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom duration-700">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
       <div>
         <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-6 block">Concierge</span>
         <h2 className="text-6xl font-serif mb-12">Let's craft your <span className="italic">Journey</span></h2>
         <div className="space-y-12">
            <div>
               <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">Reach Us</h4>
               <p className="text-xl font-light">{CONTACT_INFO.phone}</p>
               <p className="text-xl font-light">{CONTACT_INFO.email}</p>
            </div>
            <div>
               <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">Location</h4>
               <p className="text-xl font-light leading-relaxed">{CONTACT_INFO.address}</p>
            </div>
         </div>
       </div>
       <div className="bg-white p-12 shadow-2xl border-t-8" style={{ borderColor: currentTheme.primary }}>
          <form className="space-y-10">
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                <input type="text" className="w-full border-b border-gray-100 py-3 outline-none focus:border-black transition-colors" placeholder=" Julian Smith" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea className="w-full border-b border-gray-100 py-3 outline-none focus:border-black transition-colors" rows={4} placeholder="How can we help?"></textarea>
             </div>
             <button className="w-full py-6 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold">Send Inquiry</button>
          </form>
       </div>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [mode, setMode] = useState<SiteMode>('VILLA');
  const [activePage, setActivePage] = useState<PageID>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentTheme = mode === 'VILLA' ? COLORS_VILLA : COLORS_VIEW;
  const currentProperty = mode === 'VILLA' ? PROPERTY_VILLA : PROPERTY_VIEW;

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.background;
    setIsLoaded(true);
  }, [currentTheme.background]);

  const handleNavigate = (page: PageID) => {
    setIsLoaded(false);
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsLoaded(true);
    }, 400);
  };

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
    <div className={`transition-opacity duration-700 min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ color: currentTheme.textDark }}>
      <Navbar 
        mode={mode} 
        activePage={activePage}
        onNavigate={handleNavigate}
        onBookClick={() => setIsBookingOpen(true)} 
        onModeSwitch={handleModeSwitch}
        primaryColor={currentTheme.primary} 
      />

      <main>
        {activePage === 'home' && (
          <>
            <HomePage 
              mode={mode} 
              currentProperty={currentProperty} 
              currentTheme={currentTheme} 
              setIsBookingOpen={setIsBookingOpen}
              setLightboxIndex={setLightboxIndex}
              handleModeSwitch={handleModeSwitch}
            />
            <div className="py-24 px-8 border-t border-gray-100 bg-white/50">
               <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                  <div>
                     <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2 block">Our Dwellings</span>
                     <div className="flex space-x-8">
                        <button onClick={() => handleModeSwitch('VILLA')} className={`text-2xl font-serif italic transition-all ${mode === 'VILLA' ? 'text-black underline' : 'opacity-30 hover:opacity-100'}`}>The Villa</button>
                        <button onClick={() => handleModeSwitch('VIEW')} className={`text-2xl font-serif italic transition-all ${mode === 'VIEW' ? 'text-black underline' : 'opacity-30 hover:opacity-100'}`}>The View</button>
                     </div>
                  </div>
                  <div className="flex space-x-6"><Instagram size={20}/><Youtube size={20}/></div>
               </div>
            </div>
          </>
        )}
        {activePage === 'experience' && <ExperiencePage currentTheme={currentTheme} />}
        {activePage === 'gallery' && <GalleryPage currentProperty={currentProperty} setLightboxIndex={setLightboxIndex} />}
        {activePage === 'sustainability' && <SustainabilityPage currentTheme={currentTheme} />}
        {activePage === 'contact' && <ContactPage currentTheme={currentTheme} />}
      </main>

      {activePage !== 'home' && (
        <footer className="py-24 px-6 bg-[#0E0E0E] text-white">
          <div className="max-w-[1400px] mx-auto text-center">
             <h2 className="text-3xl font-serif mb-8 italic">Coffee Bloom Estates</h2>
             <div className="flex justify-center space-x-12 text-[10px] uppercase tracking-[0.5em] text-white/40 mb-12">
                <button onClick={() => handleNavigate('home')}>Home</button>
                <button onClick={() => handleNavigate('contact')}>Contact</button>
             </div>
             <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">&copy; 2025 C.B.E Wayanad</p>
          </div>
        </footer>
      )}

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[200] bg-[#0E0E0E] flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-10 right-10 text-white/40 hover:text-white"><X size={40} /></button>
          <img src={currentProperty.gallery[lightboxIndex]} className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-in zoom-in duration-500" />
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} mode={mode} primaryColor={currentTheme.primary} />
    </div>
  );
};

export default App;
