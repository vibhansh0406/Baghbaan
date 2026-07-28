import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="font-tempting text-5xl md:text-7xl lg:text-8xl text-marigold mb-4 drop-shadow-lg">
          Bagh Baan
        </h1>
        <h2 className="font-cormorant text-2xl md:text-3xl text-ivory mb-2 tracking-wide uppercase">
          100% Pure Veg Family Restaurant
        </h2>
        <p className="font-inter text-sm md:text-base text-ivory/80 max-w-md mx-auto mb-8">
          NH-8, Ajmer–Jaipur Highway · Gagwana, Ajmer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-terracotta text-ivory font-inter font-medium rounded-md shadow-lg shadow-terracotta/20 transition-colors hover:bg-terracotta/90"
          >
            View Menu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-marigold text-marigold font-inter font-medium rounded-md shadow-lg backdrop-blur-sm bg-dusk-plum/30 hover:bg-dusk-plum/50 transition-colors"
            onClick={() => window.open('https://maps.google.com/?q=Bagh+Baan+Family+Restaurant+Gagwana+Ajmer', '_blank')}
          >
            Get Directions
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Section1UI;
