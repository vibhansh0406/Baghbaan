import React from 'react';
import { motion } from 'framer-motion';

const Section4UI = () => {
  return (
    <section
      className="py-24 md:py-40 w-full relative bg-sage-light px-4 sm:px-6 md:px-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center relative z-10">

        {/* Typographic Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-charcoal"
        >
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-terracotta font-inter tracking-[0.2em] uppercase text-xs md:text-sm">Highway Twists</h4>
            <div className="h-[1px] w-12 bg-terracotta/50"></div>
          </div>

          <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-charcoal mb-4 md:mb-6 leading-none">
            Wood-Fired <br/><span className="text-sage-dark italic font-playfair">Perfection</span>
          </h3>
          <p className="font-inter text-charcoal/70 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light max-w-md">
            Italy meets Rajasthan. Hand-tossed, pure veg, and baked to blistering perfection in our authentic wood-fired oven.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { name: "Classic Margherita", desc: "Fresh basil & mozzarella." },
              { name: "Farmhouse Supreme", desc: "Olives, mushrooms & sweet corn." },
              { name: "Tandoori Paneer", desc: "Fusion classic with mint drizzle." }
            ].map((pizza, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border-l border-sage-dark/30 pl-4 py-2"
              >
                <h5 className="font-playfair text-xl md:text-2xl text-charcoal mb-1">{pizza.name}</h5>
                <p className="font-inter text-sm text-charcoal/60 font-light">{pizza.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elegant Architectual Image Window */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-sm aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative bg-charcoal"
          >
            <img
              src="/gallery/SnapInsta.to_670971345_18078221927284851_4943897329291805121_n.jpg"
              alt="Wood Fired Oven Ambience"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-sage-dark/20 mix-blend-overlay"></div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Section4UI;
