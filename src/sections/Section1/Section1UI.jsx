import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-sage"
    >

      {/* Light radial gradient to create focus on the center logo */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-sage-dark/30 pointer-events-none"></div>

      {/* Cinematic Vignette bridging to the dark cinematic sections below */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="text-center px-4 sm:px-8 z-20 relative w-full max-w-5xl flex flex-col items-center"
      >

        {/* Brand Logo Extracted from Image (perfectly proportioned) */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          src="/logo_tree_only.png"
          alt="Bagh Baan Tree Logo"
          className="w-48 sm:w-64 md:w-80 object-contain mb-4 mix-blend-screen"
        />

        <motion.span
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.15em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-inter text-ivory/90 uppercase text-[9px] sm:text-[11px] md:text-xs mb-1 block tracking-widest"
        >
          A UNIT OF ZW GROUP
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-philosopher text-6xl sm:text-7xl md:text-[8rem] text-ivory mb-2 md:mb-4 drop-shadow-md leading-none tracking-wide"
        >
          Bagh<span className="mx-1 md:mx-3 text-3xl md:text-6xl align-middle">•</span>Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 280 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-[1px] bg-ivory/60 mx-auto mt-6 mb-8 md:my-8"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-playfair text-2xl sm:text-3xl md:text-4xl text-ivory mb-3 tracking-[0.3em] uppercase font-light"
        >
          Restaurant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-inter text-xs sm:text-sm text-ivory/80 max-w-md mx-auto mb-10 md:mb-12 mt-4 uppercase tracking-widest"
        >
          100% Pure Veg • Highway Fine Dining
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md mx-auto sm:max-w-none"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-ivory text-sage-dark font-inter font-semibold rounded-full shadow-2xl transition-all uppercase tracking-widest text-xs md:text-sm hover:bg-white"
          >
            Explore Menu
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 border border-ivory/50 text-ivory font-inter font-semibold rounded-full backdrop-blur-sm hover:bg-ivory/10 transition-colors uppercase tracking-widest text-xs md:text-sm cursor-pointer shadow-lg"
            onClick={() => window.open('https://maps.google.com/?q=Bagh+Baan+Family+Restaurant+Gagwana+Ajmer', '_blank')}
          >
            Get Directions
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Section1UI;
