import React from 'react';
import { motion } from 'framer-motion';

const Section4UI = () => {
  return (
    <section className="h-[120vh] w-full flex flex-col justify-center items-start relative z-10 pointer-events-none px-4 md:px-20">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-30%" }}
        transition={{ duration: 1 }}
        className="max-w-lg bg-wood-brown/70 backdrop-blur-md p-8 rounded-2xl border-l-4 border-terracotta pointer-events-auto shadow-2xl"
      >
        <h3 className="font-tempting text-4xl md:text-5xl text-marigold mb-2">Wood-Fired</h3>
        <h4 className="font-cormorant text-2xl md:text-3xl text-ivory mb-4 uppercase tracking-widest">Perfection</h4>

        <p className="font-inter text-ivory/90 leading-relaxed mb-6">
          A delightful twist for highway travelers. Our authentic wood-fired pizzas bring a taste of Italy right to the heart of Rajasthan, baked fresh with locally sourced 100% Pure Veg ingredients.
        </p>

        <ul className="space-y-4 font-inter text-ivory/80 mb-6">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-marigold"></span>
            Classic Margherita with fresh basil
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-marigold"></span>
            Farmhouse Veggie Supreme
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            Tandoori Paneer Pizza
          </li>
        </ul>

      </motion.div>

    </section>
  );
};

export default Section4UI;
