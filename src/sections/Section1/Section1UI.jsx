import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden parallax-bg"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_673880830_18078221945284851_2043286918831100065_n.jpg')` }}
    >

      {/* Sage overlay for legibility matching the brand */}
      <div className="absolute inset-0 bg-sage-dark/80 backdrop-blur-[2px]"></div>

      {/* Vignette bridging to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-sage"></div>

      {/* Elegant thin inner border frame for a luxurious feel */}
      <div className="absolute inset-4 md:inset-8 border border-ivory/20 pointer-events-none z-10 hidden sm:block"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="text-center px-4 sm:px-8 z-20 relative w-full max-w-5xl flex flex-col items-center"
      >

        {/* Brand Logo Extracted from Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          src="/favicon.png"
          alt="Bagh Baan Tree"
          className="w-24 md:w-32 mb-6"
        />

        <motion.span
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.1em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-inter text-ivory/80 uppercase text-[10px] md:text-xs mb-2 block"
        >
          A UNIT OF ZW GROUP
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-philosopher text-6xl sm:text-7xl md:text-[8rem] text-ivory mb-2 md:mb-4 drop-shadow-xl leading-none"
        >
          Bagh<span className="mx-2 md:mx-4 text-3xl md:text-6xl align-middle">•</span>Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-[1px] bg-ivory/50 mx-auto my-6 md:my-8"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-ivory mb-3 md:mb-4 tracking-wide leading-tight px-4 uppercase font-light"
        >
          Restaurant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-inter text-xs sm:text-sm md:text-base text-ivory/90 max-w-md mx-auto mb-10 md:mb-12 mt-4"
        >
          100% Pure Veg • NH-8, Ajmer–Jaipur Highway
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md mx-auto sm:max-w-none"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, backgroundColor: "#c25835" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-terracotta text-ivory font-inter font-medium rounded-full shadow-xl transition-colors uppercase tracking-widest text-xs md:text-sm"
          >
            Explore Menu
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 border border-ivory/50 text-ivory font-inter font-medium rounded-full backdrop-blur-sm hover:bg-ivory/10 transition-colors uppercase tracking-widest text-xs md:text-sm cursor-pointer"
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
