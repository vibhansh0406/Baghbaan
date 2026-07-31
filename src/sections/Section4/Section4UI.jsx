import React from 'react';
import { motion } from 'framer-motion';

const Section4UI = () => {
  return (
    <section
      className="py-16 md:py-32 w-full relative parallax-bg px-4 sm:px-6 md:px-20 border-t border-marigold/10"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_670971345_18078221927284851_4943897329291805121_n.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#111]/85"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-start md:items-center relative z-10">

        {/* Typographic Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h4 className="text-terracotta font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Highway Twists</h4>
          <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-ivory mb-4 md:mb-6 leading-none">
            Wood-Fired <br/><span className="text-marigold italic font-playfair">Perfection</span>
          </h3>
          <p className="font-inter text-ivory/80 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light">
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
                className="bg-[#111]/70 backdrop-blur-sm border-l-2 border-marigold p-4 md:p-6 hover:bg-[#111]/90 transition-colors"
              >
                <h5 className="font-playfair text-xl md:text-2xl text-ivory mb-1">{pizza.name}</h5>
                <p className="font-inter text-sm text-ivory/60 font-light">{pizza.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elegant typography-focused element, replacing the unwanted masonry images */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center p-12 border border-marigold/20 rounded-full w-72 h-72 md:w-96 md:h-96 flex flex-col justify-center items-center shadow-2xl bg-gradient-to-br from-[#111]/80 to-[#111]/40 backdrop-blur-md"
          >
            <span className="font-playfair text-6xl text-terracotta mb-2">"</span>
            <p className="font-inter font-light text-ivory/80 italic text-sm md:text-base leading-relaxed">
              Every slice carries the warmth of our hearth and the heritage of our garden.
            </p>
            <span className="font-playfair text-6xl text-terracotta mt-2 rotate-180 inline-block">"</span>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Section4UI;
