import React from 'react';
import { motion } from 'framer-motion';

const Section2UI = () => {
  return (
    <section
      className="py-24 md:py-40 w-full relative bg-ivory px-4 sm:px-6 md:px-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-center">

        {/* Architectual Image Element */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-sm aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl relative bg-sage-light"
          >
            <img
              src="/gallery/SnapInsta.to_670867522_18078221891284851_8695517073263434859_n.jpg"
              alt="Bagh Baan Heritage"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>

        {/* Punchy, engaging copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-7/12 order-1 lg:order-2 text-charcoal"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-12 bg-terracotta/50"></div>
            <h4 className="text-terracotta font-inter tracking-[0.2em] uppercase text-xs md:text-sm">The Oasis</h4>
          </div>

          <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-charcoal mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Stop. Relax. <br/><span className="text-sage-dark italic font-playfair">Indulge.</span>
          </h3>
          <p className="font-inter text-charcoal/70 leading-relaxed mb-10 text-lg md:text-xl font-light max-w-xl">
            More than just a highway stop. Experience the true taste of Rajasthan in a serene, pure veg sanctuary.
          </p>

          {/* Elegant Stat Grid for Ivory background */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-xl">
            {[
              { label: '4.6★ Rated', desc: 'TripAdvisor' },
              { label: '100% Pure Veg', desc: 'Authentic & Pure' },
              { label: 'Ample Parking', desc: 'Secure & Spacious' },
              { label: 'Family Seating', desc: 'Comfortable Ambience' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l border-sage-dark/30 pl-4 md:pl-6 h-auto"
              >
                <h4 className="font-playfair text-2xl md:text-3xl text-charcoal mb-1 md:mb-2">{stat.label}</h4>
                <span className="font-inter text-[10px] md:text-xs text-charcoal/60 uppercase tracking-widest">{stat.desc}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Section2UI;
