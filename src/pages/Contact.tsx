import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Plane, Train, Bus, ExternalLink } from 'lucide-react';

const contactDetails = [
  { role: 'EXECUTIVE DIRECTOR', phone: '+91-9928371291' },
  { role: 'GENERAL MANAGER', phone: '+91-7230862555' },
  { role: 'RESTAURANT MANAGER', phone: '+91-9602100222' },
  { role: 'FRONT OFFICE MANAGER', phone: '+91-7230862444' },
];

const distances = [
  { name: 'Airport', distance: '3 Kms', icon: Plane },
  { name: 'Bus Stand', distance: '1.5 Kms', icon: Bus },
  { name: 'Railway Station', distance: '2 Kms', icon: Train },
];

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20 bg-brand-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6"
        >
          <span className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
            Contact <span className="italic">Us</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            We are here to assist you with your stay, dining, or event planning. Reach out to our team for any inquiries.
          </p>
        </motion.div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-12">Hotel Shri Ram Excellency</h2>
            
            <div className="space-y-8 mb-16">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <MapPin className="text-brand-red" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/50 mb-1">Address</p>
                  <p className="text-lg font-light">58, Residency Road, opp. Medical College, Jodhpur (Raj.)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Phone className="text-brand-red" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/50 mb-1">Phone</p>
                  <p className="text-lg font-light">0291-2614100, 0291-2614101</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Mail className="text-brand-red" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/50 mb-1">Email</p>
                  <p className="text-lg font-light">info@hotelshriramexcellency.com</p>
                  <p className="text-lg font-light">Reservation@hotelshriramexcellency.com</p>
                </div>
              </div>
            </div>

            {/* Management Contacts */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-charcoal/5">
              <h3 className="text-xl font-serif mb-6">Management Team</h3>
              <div className="space-y-4">
                {contactDetails.map((contact) => (
                  <div key={contact.role} className="flex justify-between items-center py-3 border-b border-brand-charcoal/5 last:border-0">
                    <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/60">{contact.role}</span>
                    <a href={`tel:${contact.phone}`} className="font-medium hover:text-brand-red transition-colors">{contact.phone}</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map & Distances */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Embedded Map */}
            <div className="w-full aspect-video rounded-sm overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
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
            
            <a 
              href="https://maps.google.com/?cid=13306025343733180376" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase py-4 border border-brand-charcoal/10 hover:bg-brand-charcoal hover:text-white transition-all duration-300"
            >
              <ExternalLink size={14} />
              Open in Google Maps
            </a>

            {/* Distances */}
            <div className="grid grid-cols-3 gap-4">
              {distances.map((item) => (
                <div key={item.name} className="bg-white p-6 text-center rounded-sm shadow-sm border border-brand-charcoal/5">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-brand-red" size={18} />
                  </div>
                  <p className="text-xl font-serif text-brand-gold mb-1">{item.distance}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/50">{item.name}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-brand-gold/5 border-l-4 border-brand-gold">
              <p className="text-brand-charcoal/70 font-light italic leading-relaxed">
                "Hotel Shri Ram Excellency is located in the heart of city yet away from city. All the important places of Jodhpur are near to this hotel."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Places of Interest */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">Places of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Mehrangarh Fort', dist: '4.5 Kms' },
              { name: 'Jaswant Thada', dist: '5.0 Kms' },
              { name: 'Umaid Bhawan Palace', dist: '3.5 Kms' },
              { name: 'Clock Tower', dist: '4.0 Kms' },
            ].map((place) => (
              <div key={place.name} className="p-6 border border-brand-charcoal/5 hover:border-brand-gold transition-colors group">
                <h4 className="font-serif text-xl mb-2 group-hover:text-brand-gold transition-colors">{place.name}</h4>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/40">{place.dist} from hotel</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
