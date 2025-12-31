
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight, X, MessageCircle, Home, Heart, Maximize } from 'lucide-react';
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
import { SiteMode, Property } from './types';

// --- Page Components ---

const HomePage: React.FC<{ 
  mode: SiteMode, 
  currentProperty: Property, 
  currentTheme: any, 
  setIsBookingOpen: (o: boolean) => void,
  handleModeSwitch: (mode: SiteMode) => void
}> = ({ mode, currentProperty, currentTheme, setIsBookingOpen, handleModeSwitch }) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={currentProperty.heroImage} 
            className="w-full h-full object-cover scale-100 transition-transform duration-[3s] ease-out"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] md:text-xs uppercase tracking-[1em] font-light mb-8 block animate-in fade-in slide-in-from-bottom duration-1000">
            {currentProperty.location}
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-light mb-12 leading-none animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {currentProperty.name.split(' ')[1]}
          </h1>
          <div className="flex items-center justify-center space-x-12 animate-in fade-in duration-1000 delay-500">
            <div className="w-12 h-[1px] bg-white/40" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-medium opacity-80">
               Est. 2025
            </p>
            <div className="w-12 h-[1px] bg-white/40" />
          </div>
        </div>

        {/* Minimal Mode Switcher */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-16 items-center">
          <button 
            onClick={() => handleModeSwitch('VILLA')}
            className={`text-[9px] uppercase tracking-[0.6em] transition-all pb-2 ${mode === 'VILLA' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}
          >
            Villa
          </button>
          <button 
            onClick={() => handleModeSwitch('VIEW')}
            className={`text-[9px] uppercase tracking-[0.6em] transition-all pb-2 ${mode === 'VIEW' ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}
          >
            View
          </button>
        </div>
      </header>

      {/* The Architectural Signature */}
      <section className="py-48 px-6 lg:px-24 bg-white relative overflow-hidden" ref={detailsRef}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative z-10">
            <span className="text-[9px] uppercase tracking-[0.8em] text-gray-400 mb-8 block">01 / Signature</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">A Sanctuary <br/>of <span className="italic">Stillness</span></h2>
            <div className="space-y-8 mb-16">
               <p className="text-xl leading-relaxed font-light text-gray-500 italic">
                 "Luxury is the absence of noise."
               </p>
               <p className="text-lg leading-loose font-light text-gray-600">
                 {currentProperty.longDesc}
               </p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                 <p className="text-gray-300 text-[10px] uppercase tracking-widest mb-1">Starting from</p>
                 <p className="text-4xl font-serif">₹{currentProperty.price}</p>
              </div>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="group flex items-center space-x-6 text-[10px] uppercase tracking-[0.4em] font-bold"
              >
                <span>Check Availability</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/9] overflow-hidden shadow-2xl scale-110 -rotate-2">
              <img src={currentProperty.gallery[0]} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-20 -right-20 w-1/2 aspect-square hidden lg:block shadow-3xl rotate-3 border-[15px] border-white">
               <img src={currentProperty.gallery[2]} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* The Dwelling Portfolio (Asymmetric List) */}
      <section className="py-48 px-6 lg:px-24 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-xl">
              <span className="text-[9px] uppercase tracking-[0.8em] text-gray-400 mb-6 block">02 / Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-none mb-8">Dwelling <br/><span className="italic">Collection</span></h2>
            </div>
            <p className="text-gray-400 max-w-xs text-sm font-light leading-relaxed">Each space is a frame for the landscape, designed with the rhythm of the valley in mind.</p>
          </div>

          <div className="space-y-px">
            {currentProperty.roomTypes.map((type, idx) => (
              <div 
                key={type.name} 
                className="group flex flex-col md:flex-row items-center justify-between py-12 border-b border-black/5 hover:px-8 transition-all duration-700 cursor-pointer"
              >
                 <div className="flex items-baseline space-x-12">
                    <span className="text-sm font-light opacity-30 group-hover:opacity-100">{type.count}</span>
                    <h3 className="text-3xl md:text-5xl font-serif font-light group-hover:italic transition-all">{type.name}</h3>
                 </div>
                 <div className="flex items-center space-x-8 mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Inquire More</span>
                    <ChevronRight size={16} />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Intangibles (Minimalist Floating Icons) */}
      <section className="py-48 px-6 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="text-center mb-32">
             <span className="text-[9px] uppercase tracking-[0.8em] text-gray-400 mb-6 block">03 / The Details</span>
             <h2 className="text-5xl md:text-7xl font-serif mb-8">Elemental <br/><span className="italic">Comfort</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-12 px-12">
            {currentProperty.roomFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center space-y-12"
              >
                 <div className="p-8 border border-black/5 rounded-full hover:scale-110 hover:border-black/20 transition-all duration-700">
                    {getIcon(feature.icon, currentTheme.iconAccent, 40)}
                 </div>
                 <div className="max-w-[180px]">
                    <p className="text-[11px] uppercase tracking-[0.4em] leading-loose text-black/50 font-bold">
                       {feature.label}
                    </p>
                 </div>
              </div>
            ))}
          </div>

          {/* Magical Floating Element */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50" />
        </div>
      </section>

      {/* Curated Highlights (Editorial Grid) */}
      <section className="py-48 px-6 lg:px-24 bg-[#0E0E0E] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
              <div>
                <span className="text-[9px] uppercase tracking-[0.8em] text-white/40 mb-8 block">04 / Experiences</span>
                <h2 className="text-5xl md:text-8xl font-serif leading-none mb-12 italic">Estate <br/>Curations</h2>
                <p className="text-white/40 max-w-sm text-sm font-light leading-loose">The estate lives through its small moments. Private garden sanctuaries and misty mornings that defy explanation.</p>
              </div>
              <div className="aspect-[4/5] overflow-hidden scale-90 rotate-2">
                 <img src={currentProperty.highlights[0].image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-24">
              {currentProperty.highlights.slice(1).map((h, idx) => (
                <div key={idx} className="group cursor-pointer">
                   <div className="aspect-[16/9] overflow-hidden mb-8 relative">
                      <img src={h.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                         <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Discover</span>
                      </div>
                   </div>
                   <h4 className="text-2xl font-serif italic mb-2">{h.title}</h4>
                   <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* The Location Portal (Postcard Design) */}
      <section className="py-48 px-6 lg:px-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
             <div className="lg:col-span-4 order-2 lg:order-1">
                <span className="text-[9px] uppercase tracking-[0.8em] text-gray-400 mb-8 block">05 / Location</span>
                <h2 className="text-5xl font-serif leading-tight mb-12">Arriving at <br/><span className="italic">{currentProperty.name}</span></h2>
                
                <div className="space-y-12">
                   {currentProperty.travelInfo.map((info, idx) => (
                     <div key={idx} className="flex space-x-8 group">
                        <div className="mt-1 transition-transform group-hover:scale-110 duration-500" style={{ color: currentTheme.iconAccent }}>
                          {getIcon(info.icon, 'currentColor', 28)}
                        </div>
                        <p className="text-gray-500 font-light text-sm leading-relaxed">
                          {info.text}
                        </p>
                     </div>
                   ))}
                </div>

                <div className="pt-16 mt-16 border-t border-black/5">
                   <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300 mb-4">Postcard</p>
                   <p className="text-xl font-serif italic text-black/40">{currentProperty.address}</p>
                </div>
             </div>
             
             <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="aspect-video bg-gray-50 p-1 lg:p-4 border border-black/5 shadow-3xl overflow-hidden group">
                   <div className="w-full h-full relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover opacity-60 grayscale scale-110 group-hover:scale-100 group-hover:grayscale-0 transition-all duration-1000"
                        alt="Wayanad Landscape"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <a 
                          href={currentProperty.mapLink}
                          target="_blank"
                          className="bg-black text-white px-12 py-5 text-[9px] uppercase tracking-[0.5em] font-bold shadow-2xl hover:bg-white hover:text-black transition-all"
                         >
                           Open Live Map
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ExperiencePage: React.FC<{ currentTheme: any, currentProperty: Property }> = ({ currentTheme, currentProperty }) => (
  <div className="pt-48 pb-32 animate-in fade-in duration-1000">
    {/* On-Site Pursuits Section */}
    <div className="px-6 lg:px-24 max-w-[1400px] mx-auto mb-64">
      <div className="mb-32 max-w-2xl">
        <span className="text-[9px] uppercase tracking-[1em] text-gray-400 mb-8 block">01 / Curated On-Site</span>
        <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">Estate <br/><span className="italic">Pursuits</span></h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed">Immerse yourself in the unique rhythm of {currentProperty.name}. Every moment is an invitation to reconnect.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
        {currentProperty.onSiteExperiences.map((item, idx) => (
          <div key={idx} className="group flex items-start space-x-10 p-6 border-b border-black/5 hover:border-black transition-all duration-700">
            <div className="mt-1 transition-transform duration-500 group-hover:-translate-y-2" style={{ color: currentTheme.iconAccent }}>
               {getIcon(item.icon, 'currentColor', 32)}
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">{item.label}</h4>
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold opacity-60">Exclusive to {currentProperty.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Regional Explorations Section (Beyond the Walls) */}
    <div className="px-6 lg:px-24 max-w-[1400px] mx-auto">
      <div className="mb-32 max-w-2xl text-right ml-auto">
        <span className="text-[9px] uppercase tracking-[1em] text-gray-400 mb-8 block text-right">02 / Beyond the Walls</span>
        <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">Wayanad <br/><span className="italic">Odyssey</span></h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed text-right">Step outside our sanctuary to discover the untamed beauty and ancient heritage of the Western Ghats.</p>
      </div>
      <div className="space-y-64">
        {WAYANAD_EXPERIENCES.map((exp, idx) => (
          <div key={exp.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`space-y-12 ${idx % 2 !== 0 ? 'lg:pl-32' : 'lg:pr-32'}`}>
              <h3 className="text-5xl font-serif italic">{exp.title}</h3>
              <p className="text-gray-500 font-light text-xl leading-loose">{exp.description}</p>
              <div className="w-24 h-[1px] bg-black/10" />
            </div>
            <div className="aspect-[4/5] overflow-hidden shadow-3xl relative group">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              <div className="absolute top-12 right-12 bg-white/90 p-6 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                 {getIcon(exp.icon, currentTheme.primary, 24)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GalleryPage: React.FC<{ currentProperty: Property, setLightboxIndex: (i: number) => void }> = ({ currentProperty, setLightboxIndex }) => (
  <div className="pt-48 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in duration-1000">
    <div className="mb-32">
      <span className="text-[9px] uppercase tracking-[1em] text-gray-400 mb-8 block">Visual Archive</span>
      <h2 className="text-6xl md:text-8xl font-serif">A Moment <br/><span className="italic">Captured</span></h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {currentProperty.gallery.map((img: string, idx: number) => (
        <div 
          key={idx} 
          onClick={() => setLightboxIndex(idx)} 
          className="relative group cursor-pointer overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700"
        >
           <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <Maximize className="text-white" size={32} strokeWidth={1} />
           </div>
        </div>
      ))}
    </div>
  </div>
);

const SustainabilityPage: React.FC<{ currentTheme: any }> = ({ currentTheme }) => (
  <div className="pt-48 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in duration-1000">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
      <div className="lg:col-span-5 sticky top-48">
        <span className="text-[9px] uppercase tracking-[1em] text-gray-400 mb-8 block">Our Earth</span>
        <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">Stewards <br/>of the <span className="italic">Land</span></h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          As stewards of the Nilgiri Biosphere, we believe luxury should leave no trace other than inspiration.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-48">
        {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
          <div key={pillar.title} className="group">
             <div className="flex items-center space-x-12 mb-12">
                <div className="p-6 border border-black/5 group-hover:bg-black group-hover:text-white transition-all duration-700 rounded-full">
                   {getIcon(pillar.icon, 'currentColor', 32)}
                </div>
                <h3 className="text-4xl font-serif">{pillar.title}</h3>
             </div>
             <p className="text-2xl font-light text-gray-400 leading-relaxed pl-24">
               {pillar.desc}
             </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage: React.FC<{ currentTheme: any, currentProperty: Property }> = ({ currentTheme, currentProperty }) => {
  const handleWhatsAppChat = () => {
    const message = `Hi Coffee Bloom Estates, I'm interested in learning more about ${currentProperty.name}.`;
    window.open(`https://wa.me/918921142220?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClasses = "w-full bg-transparent text-black border-b border-black/5 py-4 px-2 outline-none focus:border-black transition-all placeholder:text-gray-300 font-light text-xl";
  const labelClasses = "text-[9px] uppercase tracking-[0.6em] font-bold text-gray-400 mb-2 block";

  return (
    <div className="pt-48 pb-32 px-6 lg:px-24 max-w-[1400px] mx-auto animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
         <div className="lg:col-span-5">
           <span className="text-[9px] uppercase tracking-[1em] text-gray-400 mb-8 block">Contact</span>
           <h2 className="text-6xl md:text-8xl font-serif mb-16 leading-tight">Concierge <br/>& <span className="italic">Service</span></h2>
           
           <div className="space-y-16">
              <div className="grid grid-cols-1 gap-12">
                 <div>
                    <h4 className="text-[9px] uppercase tracking-widest font-bold mb-8 opacity-30">The Network</h4>
                    <div className="space-y-8">
                      <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-6 group">
                        <Phone size={18} className="text-gray-300" />
                        <span className="text-2xl font-light">{CONTACT_INFO.phone}</span>
                      </a>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-6 group">
                        <Mail size={18} className="text-gray-300" />
                        <span className="text-2xl font-light">{CONTACT_INFO.email}</span>
                      </a>
                    </div>
                 </div>
                 <div className="pt-12 border-t border-black/5">
                    <button 
                      onClick={handleWhatsAppChat}
                      className="group flex items-center space-x-8"
                    >
                      <MessageCircle size={32} className="text-gray-200 group-hover:text-green-500 transition-colors" />
                      <div className="text-left">
                        <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-gray-400">WhatsApp</p>
                        <p className="text-2xl font-serif italic">Live Concierge Chat</p>
                      </div>
                    </button>
                 </div>
              </div>
           </div>
         </div>

         <div className="lg:col-span-7 bg-white p-16 lg:p-24 shadow-3xl border border-black/5">
            <h4 className="text-[9px] uppercase tracking-[0.8em] font-bold mb-16 text-gray-300">Inquiry Dispatch</h4>
            <form className="space-y-16">
               <div className="space-y-4">
                  <label className={labelClasses}>Personal Identifier</label>
                  <input type="text" className={inputClasses} placeholder="Julian Smith" />
               </div>
               <div className="space-y-4">
                  <label className={labelClasses}>Inquiry Mode</label>
                  <select className={inputClasses}>
                    <option>Private Stay</option>
                    <option>Events & Gatherings</option>
                    <option>Press Inquiry</option>
                  </select>
               </div>
               <div className="space-y-4">
                  <label className={labelClasses}>Observations</label>
                  <textarea className={inputClasses} rows={3} placeholder="Tell us about your requirements..."></textarea>
               </div>
               <button className="w-full py-8 text-[10px] uppercase tracking-[0.8em] font-bold text-white bg-black transition-all shadow-2xl hover:bg-white hover:text-black hover:border border-black">
                 Send Invitation
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

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
    <div className={`transition-opacity duration-1000 min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ color: currentTheme.textDark }}>
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
              handleModeSwitch={handleModeSwitch}
            />
            <div className="py-32 px-12 bg-white flex flex-col items-center">
               <div className="w-[1px] h-32 bg-black/5 mb-16" />
               <div className="max-w-[1400px] w-full flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="flex space-x-12">
                    <button onClick={() => handleModeSwitch('VILLA')} className={`text-3xl font-serif italic transition-all ${mode === 'VILLA' ? 'text-black underline' : 'opacity-20 hover:opacity-100'}`}>The Villa</button>
                    <button onClick={() => handleModeSwitch('VIEW')} className={`text-3xl font-serif italic transition-all ${mode === 'VIEW' ? 'text-black underline' : 'opacity-20 hover:opacity-100'}`}>The View</button>
                  </div>
                  <div className="flex space-x-12 items-center opacity-30">
                    <a href="#" className="hover:opacity-100 transition-opacity"><Instagram size={24} strokeWidth={1} /></a>
                    <a href="#" className="hover:opacity-100 transition-opacity"><Youtube size={24} strokeWidth={1} /></a>
                  </div>
               </div>
            </div>
          </>
        )}
        {activePage === 'experience' && <ExperiencePage currentTheme={currentTheme} currentProperty={currentProperty} />}
        {activePage === 'gallery' && <GalleryPage currentProperty={currentProperty} setLightboxIndex={setLightboxIndex} />}
        {activePage === 'sustainability' && <SustainabilityPage currentTheme={currentTheme} />}
        {activePage === 'contact' && <ContactPage currentTheme={currentTheme} currentProperty={currentProperty} />}
      </main>

      {activePage !== 'home' && (
        <footer className="py-48 px-12 bg-white text-black border-t border-black/5">
          <div className="max-w-[1400px] mx-auto text-center">
             <h2 className="text-4xl font-serif mb-12 italic tracking-tighter">Coffee Bloom Estates</h2>
             <div className="flex justify-center space-x-16 text-[10px] uppercase tracking-[0.8em] text-black/40 mb-20">
                <button onClick={() => handleNavigate('home')}>Home</button>
                <button onClick={() => handleNavigate('experience')}>Archive</button>
                <button onClick={() => handleNavigate('contact')}>Connect</button>
             </div>
             <p className="text-[9px] uppercase tracking-[0.5em] text-black/20">&copy; 2025 Coffee Bloom Estates — Vaduvanchal Highlands</p>
          </div>
        </footer>
      )}

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-8 backdrop-blur-2xl">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-12 right-12 text-white/40 hover:text-white transition-colors">
            <X size={48} strokeWidth={1} />
          </button>
          <img src={currentProperty.gallery[lightboxIndex]} className="max-w-full max-h-[85vh] object-contain shadow-3xl animate-in zoom-in duration-700" />
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} mode={mode} primaryColor={currentTheme.primary} />
    </div>
  );
};

export default App;
