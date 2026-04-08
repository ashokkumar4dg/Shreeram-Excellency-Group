import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Home, Sparkles, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Booking() {
  const [bookingType, setBookingType] = useState<'room' | 'spa'>('room');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 bg-brand-cream min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-sm shadow-2xl text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif">Request Received</h2>
          <p className="text-brand-charcoal/60 font-light leading-relaxed">
            Thank you for choosing Hotel Shri Ram Excellency. Our concierge team will review your request and contact you shortly to confirm your booking.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-brand-charcoal text-white py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-brand-cream min-h-screen">
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Reservations
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
              Book Your <span className="italic">Experience</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-brand-charcoal/10">
            <button
              onClick={() => setBookingType('room')}
              className={cn(
                "flex-1 py-6 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors",
                bookingType === 'room' ? "bg-brand-cream text-brand-red" : "text-brand-charcoal/40 hover:text-brand-charcoal"
              )}
            >
              <Home size={18} />
              Room Booking
            </button>
            <button
              onClick={() => setBookingType('spa')}
              className={cn(
                "flex-1 py-6 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors",
                bookingType === 'spa' ? "bg-brand-cream text-brand-red" : "text-brand-charcoal/40 hover:text-brand-charcoal"
              )}
            >
              <Sparkles size={18} />
              Spa Session
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">
                  {bookingType === 'room' ? 'Check-in Date' : 'Session Date'}
                </label>
                <div className="relative">
                  <input
                    required
                    type="date"
                    className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none"
                  />
                  <Calendar size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30 pointer-events-none" />
                </div>
              </div>
              
              {bookingType === 'room' && (
                <>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Check-out Date</label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none"
                      />
                      <Calendar size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Guests</label>
                    <div className="relative">
                      <select className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                      <Users size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              {bookingType === 'spa' && (
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Treatment Type</label>
                  <select className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none">
                    <option>Royal Ayurvedic Massage</option>
                    <option>Himalayan Salt Scrub</option>
                    <option>Deep Tissue Therapy</option>
                    <option>Floral Facial Ritual</option>
                  </select>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">Special Requests</label>
              <textarea
                rows={4}
                placeholder="Any specific requirements or preferences..."
                className="w-full bg-brand-cream/50 border-b border-brand-charcoal/10 px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red text-white py-5 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20"
            >
              Submit Reservation Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
