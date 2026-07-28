import React from 'react';
import { motion } from 'framer-motion';

const Section2UI = () => {
  return (
    <section
      className="py-32 w-full relative parallax-bg px-6 md:px-20 border-t border-marigold/10"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_670867522_18078221891284851_8695517073263434859_n.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#111]/85"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">

        {/* Typographic Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h4 className="text-marigold font-inter tracking-[0.2em] uppercase text-sm mb-4">Our Heritage</h4>
          <h3 className="font-cormorant text-5xl md:text-6xl text-ivory mb-8 leading-tight">
            The Gardener's <br/><span className="text-terracotta italic">Table</span>
          </h3>
          <p className="font-inter text-ivory/80 leading-relaxed mb-6 text-lg">
            "Bagh Baan" translates to the keeper of the orchard. Nestled seamlessly on the Ajmer-Jaipur expressway, we provide travelers and local families alike with a sanctuary of warmth, comfort, and authentic culinary heritage.
          </p>
          <p className="font-inter text-ivory/80 leading-relaxed text-lg">
            From our family to yours, experience the true taste of Rajasthan in a 100% Pure Veg environment, elevated by modern hospitality and spacious, serene surroundings.
          </p>
        </motion.div>

        {/* Elegant Stat Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
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
              className="bg-wood-brown/30 border border-marigold/20 p-8 rounded-sm hover:border-marigold/60 transition-colors"
            >
              <h4 className="font-cormorant text-3xl text-marigold mb-2">{stat.label}</h4>
              <span className="font-inter text-sm text-ivory/60 uppercase tracking-wider">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Section2UI;
