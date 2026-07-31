import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section
      className="min-h-[100svh] md:h-screen w-full flex flex-col justify-center items-center relative bg-charcoal sticky top-0 -z-10"
    >

      {/*
        This is an ultra-premium layout:
        A dark, moody charcoal hero section that is sticky.
        The Ivory Oasis section will slide up OVER this section as you scroll.
      */}

      {/* Very faint noise and vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sage-dark/10 to-transparent pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-6 z-20 relative w-full max-w-4xl flex flex-col items-center justify-center pt-10 pb-32"
      >

        {/* Strictly the Tree Logo, purely centered, tinted to sage so it matches brand without being a flat background */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          src="/logo_tree_only.png"
          alt="Bagh Baan Logo"
          className="w-40 sm:w-48 md:w-56 h-auto object-contain mb-8 mx-auto sepia contrast-125 hue-rotate-15 brightness-110 drop-shadow-2xl"
          style={{ filter: "brightness(0) saturate(100%) invert(71%) sepia(10%) saturate(763%) hue-rotate(30deg) brightness(87%) contrast(85%)" }} // Forces it to Sage color (#9E9C89)
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-inter text-sage uppercase text-[10px] md:text-xs mb-2 block tracking-[0.25em]"
        >
          A UNIT OF ZW GROUP
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-philosopher text-6xl sm:text-7xl md:text-[8rem] text-ivory mb-2 md:mb-4 leading-none tracking-wide"
        >
          Bagh<span className="mx-1 md:mx-3 text-sage text-3xl md:text-6xl align-middle">•</span>Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-[1px] bg-sage-dark/40 mx-auto mt-6 mb-8 md:my-8"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-playfair text-2xl sm:text-3xl md:text-4xl text-ivory mb-3 tracking-[0.4em] uppercase font-light"
        >
          Restaurant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-inter text-xs sm:text-sm text-sage/70 max-w-md mx-auto mt-4 uppercase tracking-[0.15em]"
        >
          100% Pure Veg • Highway Fine Dining
        </motion.p>
      </motion.div>

    </section>
  );
};

export default Section1UI;
