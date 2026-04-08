import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
              <span className="text-white font-serif font-bold text-lg">SRE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold tracking-widest leading-none">SHRI RAM</span>
              <span className="text-[8px] tracking-[0.3em] font-medium opacity-80 uppercase">Excellency</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed font-light">
            Experience luxury redefined in the heart of Jodhpur. Our hotel combines traditional hospitality with modern elegance to create unforgettable memories.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-medium mb-8 tracking-widest uppercase text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm font-light text-white/70">
            <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
            <li><Link to="/dining" className="hover:text-white transition-colors">Dining Experience</Link></li>
            <li><Link to="/spa" className="hover:text-white transition-colors">Spa & Wellness</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Reservations</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg font-medium mb-8 tracking-widest uppercase text-brand-gold">Our Services</h4>
          <ul className="space-y-4 text-sm font-light text-white/70">
            <li>24/7 Room Service</li>
            <li>Concierge Desk</li>
            <li>Airport Transfers</li>
            <li>Event Planning</li>
            <li>Business Center</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg font-medium mb-8 tracking-widest uppercase text-brand-gold">Contact Us</h4>
          <ul className="space-y-6 text-sm font-light text-white/70">
            <li className="flex gap-4">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span>Sardarpura, Jodhpur, Rajasthan 342003, India</span>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+91 291 261 4100</span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>info@hotelshriramexcellency.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
        <p>© 2026 Shri Ram Excellency Group. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
