import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    title: 'Deluxe Room',
    description: 'Elegant comfort with modern amenities and city views.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=70&w=800',
    price: '₹4,500',
  },
  {
    title: 'Executive Suite',
    description: 'Spacious luxury designed for the discerning traveler.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=70&w=800',
    price: '₹7,500',
  },
  {
    title: 'Presidential Suite',
    description: 'The pinnacle of luxury with panoramic views and premium service.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=70&w=800',
    price: '₹12,000',
  },
];

export default function RoomsPreview() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-red text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Accommodations
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              Refined Living <br />
              <span className="italic">For Your Comfort</span>
            </h2>
          </div>
          <Link
            to="/rooms"
            className="text-brand-charcoal hover:text-brand-red transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase group"
          >
            View All Rooms
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1 opacity-80">Starting from</p>
                    <p className="text-xl font-serif">{room.price}</p>
                  </div>
                  <Link to="/booking" className="bg-white text-brand-charcoal p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">{room.title}</h3>
              <p className="text-brand-charcoal/60 text-sm font-light leading-relaxed">
                {room.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
