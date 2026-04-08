import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Plane, Train, Bus, ExternalLink } from 'lucide-react';

const distances = [
  { name: 'Airport', distance: '3 Kms', icon: Plane },
  { name: 'Bus Stand', distance: '1.5 Kms', icon: Bus },
  { name: 'Railway Station', distance: '2 Kms', icon: Train },
];

export default function LocationPreview() {
  return (
    <section className="py-24 bg-brand-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Location
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
              In the Heart of <br />
              <span className="italic">The Blue City</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              Hotel Shri Ram Excellency is located in the heart of city yet away from city. All the important places of Jodhpur are near to this hotel, making it the perfect base for your exploration.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {distances.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <item.icon className="text-brand-gold" size={20} />
                  </div>
                  <p className="text-2xl font-serif text-white mb-1">{item.distance}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{item.name}</p>
                </div>
              ))}
            </div>

            <a 
              href="https://maps.google.com/?cid=13306025343733180376" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-charcoal px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300"
            >
              <MapPin size={18} />
              Get Directions
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-sm overflow-hidden shadow-2xl border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6254!2d73.0135!3d26.2614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c6444444445%3A0xb8c8c8c8c8c8c8c8!2sHotel%20Shri%20Ram%20Excellency!5e0!3m2!1sen!2sin!4v1712520000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-red p-6 text-white hidden md:block shadow-2xl">
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">Our Address</p>
              <p className="font-serif text-lg leading-tight">58, Residency Road,<br />Jodhpur, Rajasthan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
