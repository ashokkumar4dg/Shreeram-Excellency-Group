import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Wifi, Car, Coffee, ShieldCheck, Clock } from 'lucide-react';

const amenities = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Authentic Rajasthani and global cuisines at our signature restaurant.',
  },
  {
    icon: Coffee,
    title: 'Cafe & Lounge',
    description: 'Relax with premium brews and light bites in a sophisticated setting.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with seamless internet access throughout the hotel.',
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Complimentary secure parking and valet services for all guests.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security',
    description: 'Your safety is our priority with round-the-clock security and surveillance.',
  },
  {
    icon: Clock,
    title: 'Room Service',
    description: 'Gourmet meals delivered to your door at any hour of the day.',
  },
];

export default function Amenities() {
  return (
    <section className="py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
            Our Amenities
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light">
            Crafted for <span className="italic">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="w-16 h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors duration-500">
                <item.icon size={28} className="text-brand-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3 tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
