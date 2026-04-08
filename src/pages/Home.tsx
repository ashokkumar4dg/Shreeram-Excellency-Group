import React from 'react';
import Hero from '../components/home/Hero';
import RoomsPreview from '../components/home/RoomsPreview';
import Amenities from '../components/home/Amenities';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic">Hospitality</span>
            </h2>
            <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed mb-8">
              Located in the heart of Jodhpur, Hotel Shri Ram Excellency has been a beacon of luxury and comfort for decades. We take pride in offering an experience that transcends the ordinary, blending the rich heritage of Rajasthan with contemporary sophistication.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-brand-gold mb-1">25+</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/50">Years of Service</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-gold mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/50">Guest Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070"
                alt="Hotel Exterior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-square bg-brand-red p-8 text-white hidden md:flex flex-col justify-center shadow-2xl">
              <p className="font-serif text-3xl mb-2 italic">"The best stay in Jodhpur"</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">— Travel Magazine</p>
            </div>
          </motion.div>
        </div>
      </section>

      <RoomsPreview />
      
      {/* Dining Teaser */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
            alt="Fine Dining"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Gastronomy
            </span>
            <h2 className="text-4xl md:text-7xl font-serif font-light mb-8">
              A Symphony of <span className="italic">Flavors</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 font-light mb-10">
              Indulge in a culinary journey that celebrates local ingredients and global techniques. Our chefs create masterpieces that delight every palate.
            </p>
            <button className="bg-white text-brand-charcoal px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-white transition-all duration-300">
              Discover Dining
            </button>
          </motion.div>
        </div>
      </section>

      <Amenities />
    </div>
  );
}
