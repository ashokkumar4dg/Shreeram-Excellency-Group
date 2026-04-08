import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Tv, Wind, Shield, ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    description: 'Our Deluxe Rooms offer a perfect blend of comfort and style. Featuring elegant furnishings and modern amenities, these rooms are ideal for both business and leisure travelers.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070',
    price: '₹4,500',
    size: '350 sq ft',
    amenities: [Wifi, Coffee, Tv, Wind],
  },
  {
    id: 'executive',
    title: 'Executive Suite',
    description: 'Experience elevated luxury in our Executive Suites. With separate living and sleeping areas, these suites provide ample space and premium features for a truly sophisticated stay.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2074',
    price: '₹7,500',
    size: '550 sq ft',
    amenities: [Wifi, Coffee, Tv, Wind, Shield],
  },
  {
    id: 'presidential',
    title: 'Presidential Suite',
    description: 'The ultimate in luxury and exclusivity. Our Presidential Suite offers unparalleled views, bespoke service, and the finest amenities for an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070',
    price: '₹12,000',
    size: '950 sq ft',
    amenities: [Wifi, Coffee, Tv, Wind, Shield],
  },
];

export default function Rooms() {
  return (
    <div className="pt-24 bg-brand-cream">
      {/* Header */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Accommodations
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
              Rooms & <span className="italic">Suites</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 font-light text-lg">
              Each of our rooms is a sanctuary of peace and elegance, designed to provide the ultimate comfort during your stay in Jodhpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex flex-col gap-12 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-brand-red text-white px-6 py-2 text-sm font-bold tracking-widest uppercase shadow-xl">
                  {room.price} / Night
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl font-serif mb-4">{room.title}</h2>
                  <p className="text-brand-charcoal/60 font-light leading-relaxed text-lg">
                    {room.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 text-brand-charcoal/80">
                    <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 flex items-center justify-center">
                      <span className="text-xs font-bold">SQ</span>
                    </div>
                    <span className="text-sm uppercase tracking-widest">{room.size}</span>
                  </div>
                  {room.amenities.slice(0, 3).map((Icon, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-charcoal/80">
                      <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm uppercase tracking-widest">Premium</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="bg-brand-red text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all text-center"
                  >
                    Book This Room
                  </Link>
                  <button className="border border-brand-charcoal/20 text-brand-charcoal px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Room Service Feature */}
      <section className="py-24 bg-brand-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-full overflow-hidden border-8 border-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1526015984814-e4558c4d3f1c?auto=format&fit=crop&q=80&w=2070"
                alt="Room Service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-4 -right-4 bg-brand-gold p-8 rounded-full text-brand-charcoal font-serif text-2xl italic shadow-2xl">
              24/7
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase block">
              In-Room Dining
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              Gourmet Service <br />
              <span className="italic">At Your Doorstep</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Experience the luxury of fine dining in the privacy of your room. Our extensive room service menu features a wide array of local and international delicacies, prepared with the same care and precision as our restaurant offerings.
            </p>
            <ul className="space-y-4">
              {['Breakfast in Bed', 'Midnight Cravings', 'Private Dinner Setup', 'Customized Menus'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-gold">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span className="text-sm uppercase tracking-[0.2em] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-brand-red text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all">
              View Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function for cn (already defined in utils, but needed for local use if not imported correctly)
import { cn } from '@/lib/utils';
