import React from 'react';
import { motion } from 'framer-motion';

const Section2UI = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative z-10 pointer-events-none px-4">

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center pointer-events-auto">

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="bg-dusk-plum/40 backdrop-blur-md border border-ivory/10 p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="font-cormorant text-3xl md:text-4xl text-marigold mb-4">The Gardener's Table</h3>
          <p className="font-inter text-ivory/90 leading-relaxed mb-4">
            "Bagh Baan" means the keeper of the orchard. Nestled on the Ajmer-Jaipur expressway, we offer more than just a meal — we offer a comfortable stop for long drives, warm hospitality, and the true taste of Rajasthan.
          </p>
          <p className="font-inter text-ivory/90 leading-relaxed">
            From our family to yours, experience authentic 100% Pure Veg thali roots combined with modern comforts, all under the gentle sway of our orchard canopy.
          </p>
        </motion.div>

        {/* Stat Chips */}
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
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
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-terracotta/90 backdrop-blur-sm px-6 py-3 rounded-r-xl rounded-bl-xl border-l-4 border-marigold w-64 shadow-lg shadow-black/20"
            >
              <h4 className="font-inter font-bold text-ivory text-lg">{stat.label}</h4>
              <span className="font-inter text-sm text-ivory/80">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Section2UI;
