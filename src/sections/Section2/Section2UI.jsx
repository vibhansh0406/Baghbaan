import React from 'react';
import { motion } from 'framer-motion';

const Section2UI = () => {
  return (
    <section
      className="py-16 md:py-32 w-full relative parallax-bg px-4 sm:px-6 md:px-20 border-t border-marigold/10"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_670867522_18078221891284851_8695517073263434859_n.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#111]/85"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center relative z-10">

        {/* Punchy, engaging copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h4 className="text-marigold font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-4">The Oasis</h4>
          <h3 className="font-playfair text-4xl sm:text-5xl md:text-7xl text-ivory mb-6 md:mb-8 leading-none">
            Stop. Relax. <br/><span className="text-terracotta italic font-playfair">Indulge.</span>
          </h3>
          <p className="font-inter text-ivory/90 leading-relaxed mb-8 text-lg md:text-xl font-light">
            More than just a highway stop. Experience the true taste of Rajasthan in a serene, pure veg sanctuary.
          </p>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-sage text-white font-inter font-medium rounded-full shadow-xl transition-colors uppercase tracking-widest text-xs hover:bg-sage-dark"
          >
            Discover the Taste
          </motion.a>
        </motion.div>

        {/* Elegant Stat Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { label: '4.6★ Rated', desc: 'on TripAdvisor' },
            { label: '100% Pure Veg', desc: 'Authentic Rajasthani & More' },
            { label: 'Ample Parking', desc: 'For Highway Travelers' },
            { label: 'Family Seating', desc: 'Spacious & Comfortable' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-wood-brown/20 backdrop-blur-sm border border-marigold/10 p-6 md:p-8 rounded-sm hover:border-marigold/40 transition-colors"
            >
              <h4 className="font-playfair text-2xl md:text-3xl text-marigold mb-1 md:mb-2">{stat.label}</h4>
              <span className="font-inter text-xs md:text-sm text-ivory/60 uppercase tracking-wider">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Section2UI;
