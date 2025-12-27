
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SiteMode } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: SiteMode;
  primaryColor: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, mode, primaryColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    checkin: '',
    checkout: '',
    guests: '2',
    phone: '',
    property: mode as string,
  });

  // Synchronize selection with the site mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, property: mode }));
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const propertyLabel = formData.property === 'VILLA' ? 'The Villa' : 'The View';
    
    // Structured WhatsApp message using markdown for better readability in the recipient's view
    const message = `*NEW BOOKING INQUIRY*
---------------------------
*Guest Name:* ${formData.name}
*Contact Number:* ${formData.phone}

*Property:* ${propertyLabel}
*Check-in:* ${formData.checkin}
*Check-out:* ${formData.checkout}
*Total Guests:* ${formData.guests}
---------------------------
Hi Coffee Bloom Estates, I would like to check availability and rates for the above details. Looking forward to hearing from you!`;

    // WhatsApp number: 91 89211 42220
    const whatsappUrl = `https://wa.me/918921142220?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const inputClasses = "w-full bg-white text-black border-b border-gray-300 py-3 px-1 focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium";
  const labelClasses = "text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1 block";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300 overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <header className="mb-10">
          <h3 className="text-4xl font-serif mb-2" style={{ color: primaryColor }}>Inquiry</h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Please provide your details for a tailored <br/>Wayanad experience.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className={labelClasses}>Property Selection</label>
            <div className="flex bg-gray-50 p-1 rounded-sm">
              <button 
                type="button"
                onClick={() => setFormData({...formData, property: 'VILLA'})}
                className={`flex-1 py-3 text-[9px] uppercase tracking-[0.2em] font-bold transition-all ${formData.property === 'VILLA' ? 'bg-black text-white shadow-md' : 'text-gray-400 hover:text-black'}`}
              >
                The Villa
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, property: 'VIEW'})}
                className={`flex-1 py-3 text-[9px] uppercase tracking-[0.2em] font-bold transition-all ${formData.property === 'VIEW' ? 'bg-black text-white shadow-md' : 'text-gray-400 hover:text-black'}`}
              >
                The View
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className={labelClasses}>Full Name</label>
            <input 
              required
              type="text"
              placeholder="e.g. Julian Smith"
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className={labelClasses}>Check-in Date</label>
              <input 
                required
                type="date"
                className={`${inputClasses} min-h-[48px]`}
                value={formData.checkin}
                onChange={(e) => setFormData({...formData, checkin: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className={labelClasses}>Check-out Date</label>
              <input 
                required
                type="date"
                className={`${inputClasses} min-h-[48px]`}
                value={formData.checkout}
                onChange={(e) => setFormData({...formData, checkout: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className={labelClasses}>Total Guests</label>
              <div className="relative">
                <select 
                  className={`${inputClasses} appearance-none cursor-pointer pr-8`}
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n} className="text-black bg-white">{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
                <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <X size={12} className="rotate-45" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className={labelClasses}>WhatsApp Contact</label>
              <input 
                required
                type="tel"
                placeholder="+91 89211 42220"
                className={inputClasses}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-6 text-[10px] font-bold tracking-[0.4em] uppercase text-white mt-6 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            style={{ backgroundColor: primaryColor }}
          >
            Send WhatsApp Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
