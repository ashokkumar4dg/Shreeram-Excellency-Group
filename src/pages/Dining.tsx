import React from 'react';
import { motion } from 'motion/react';

export default function Dining() {
  return (
    <div className="pt-24 bg-brand-cream">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
            alt="The Grand Palate Restaurant"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Culinary Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-light mb-8">
              The <span className="italic">Grand Palate</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 font-light">
              A journey through the rich flavors of Rajasthan and beyond. Experience fine dining in an atmosphere of regal elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              Authentic <br />
              <span className="italic">Rajasthani Flavors</span>
            </h2>
            <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed">
              Our signature restaurant offers a curated selection of traditional dishes, prepared using age-old recipes and the freshest local ingredients. From the spicy Laal Maas to the comforting Dal Baati Churma, every bite is a celebration of our heritage.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-serif text-xl mb-2">Breakfast</h4>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">07:00 AM - 10:30 AM</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Lunch</h4>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">12:30 PM - 03:30 PM</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Dinner</h4>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">07:30 PM - 11:00 PM</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Bar</h4>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <button className="bg-brand-red text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all">
              Reserve a Table
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=70&w=600"
              alt="Food 1"
              className="w-full aspect-square object-cover rounded-sm shadow-xl"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=70&w=600"
              alt="Food 2"
              className="w-full aspect-square object-cover rounded-sm shadow-xl translate-y-8"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=70&w=600"
              alt="Food 3"
              className="w-full aspect-square object-cover rounded-sm shadow-xl -translate-y-8"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=70&w=600"
              alt="Food 4"
              className="w-full aspect-square object-cover rounded-sm shadow-xl"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
