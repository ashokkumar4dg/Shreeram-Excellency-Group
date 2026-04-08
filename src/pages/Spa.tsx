import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wind, Droplets, Flower2 } from 'lucide-react';

const treatments = [
  {
    title: 'Royal Ayurvedic Massage',
    duration: '90 Mins',
    price: '₹3,500',
    description: 'A traditional full-body massage using warm herbal oils to balance energy and promote deep relaxation.',
    icon: Droplets,
  },
  {
    title: 'Himalayan Salt Scrub',
    duration: '60 Mins',
    price: '₹2,800',
    description: 'Exfoliate and revitalize your skin with mineral-rich salts and essential oils.',
    icon: Sparkles,
  },
  {
    title: 'Deep Tissue Therapy',
    duration: '75 Mins',
    price: '₹3,200',
    description: 'Targeted pressure to release chronic muscle tension and improve circulation.',
    icon: Wind,
  },
  {
    title: 'Floral Facial Ritual',
    duration: '60 Mins',
    price: '₹2,500',
    description: 'A gentle facial using organic flower extracts to hydrate and brighten your complexion.',
    icon: Flower2,
  },
];

export default function Spa() {
  return (
    <div className="pt-24 bg-brand-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070"
            alt="Spa Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Wellness & Serenity
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-light mb-8">
              The <span className="italic">Nirvana Spa</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 font-light">
              Escape the bustle of the city and immerse yourself in a world of tranquility. Our expert therapists are dedicated to your holistic well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spa Treatments */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
              Signature <span className="italic">Treatments</span>
            </h2>
            <p className="max-w-2xl mx-auto text-brand-charcoal/60 font-light">
              Discover our curated menu of therapies designed to restore balance to your mind, body, and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 shrink-0 bg-brand-cream rounded-full flex items-center justify-center">
                  <item.icon size={28} className="text-brand-gold" />
                </div>
                <div className="flex-grow space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif">{item.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">{item.duration}</p>
                    </div>
                    <span className="text-brand-red font-serif text-xl">{item.price}</span>
                  </div>
                  <p className="text-brand-charcoal/60 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                  <button className="text-brand-gold text-xs font-bold tracking-widest uppercase hover:text-brand-red transition-colors flex items-center gap-2 group">
                    Book Treatment
                    <div className="w-8 h-px bg-brand-gold group-hover:bg-brand-red transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Booking CTA */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-light italic">Ready for a retreat?</h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Our spa is open daily from 09:00 AM to 09:00 PM. We recommend booking at least 24 hours in advance to ensure your preferred time slot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-brand-red text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all">
              Book Spa Session
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-charcoal transition-all">
              Download Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
