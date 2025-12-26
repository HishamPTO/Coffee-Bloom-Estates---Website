
import React, { useState } from 'react';
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
    date: '',
    guests: '2',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const propertyName = mode === 'VILLA' ? 'The Villa' : 'The View';
    const message = `Hi Coffee Bloom, I am interested in booking ${propertyName} for ${formData.guests} guests on ${formData.date}. Is it available? (Name: ${formData.name}, Phone: ${formData.phone})`;
    const whatsappUrl = `https://wa.me/9189211422220?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-md p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-3xl font-serif mb-2" style={{ color: primaryColor }}>Reserve Your Stay</h3>
        <p className="text-gray-500 text-sm mb-8">
          Inquire about availability for {mode === 'VILLA' ? 'The Villa' : 'The View'} via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Name</label>
            <input 
              required
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Date</label>
              <input 
                required
                type="date"
                className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Guests</label>
              <select 
                className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guests</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
            <input 
              required
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full border-b border-gray-200 py-2 focus:border-black outline-none transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 text-sm font-bold tracking-widest uppercase text-white mt-4"
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
