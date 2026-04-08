import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800', title: 'Lobby' },
  { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', title: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800', title: 'Deluxe Room' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800', title: 'Executive Suite' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', title: 'The Grand Palate' },
  { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', title: 'Fine Dining' },
  { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', title: 'Spa' },
  { url: 'https://images.unsplash.com/photo-1526015984814-e4558c4d3f1c?auto=format&fit=crop&q=80&w=800', title: 'Room Service' },
];

export default function Gallery() {
  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
      <section className="py-20 bg-brand-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6"
        >
          <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
            Visual Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
            Our <span className="italic">Gallery</span>
          </h1>
        </motion.div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-sm shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif text-2xl italic">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
