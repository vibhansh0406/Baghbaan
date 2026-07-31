import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden parallax-bg"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_673880830_18078221945284851_2043286918831100065_n.jpg')` }}
    >

      {/* Deep Glassmorphism overlay for text legibility */}
      <div className="absolute inset-0 bg-[#111]/70 backdrop-blur-[2px]"></div>

      {/* Cinematic Gradient Vignette bridging to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/40 via-[#111]/20 to-[#111]"></div>

      {/* Elegant thin inner border frame for a luxurious feel */}
      <div className="absolute inset-4 md:inset-8 border border-marigold/20 pointer-events-none z-10 hidden sm:block"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="text-center px-4 sm:px-8 z-20 relative w-full max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-inter text-marigold uppercase text-xs md:text-sm mb-4 md:mb-6 block"
        >
          Welcome to the Orchard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-tempting text-7xl sm:text-8xl md:text-[10rem] text-ivory mb-2 md:mb-4 drop-shadow-2xl leading-none"
        >
          Bagh Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-[1px] bg-marigold/50 mx-auto my-6 md:my-8"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-ivory mb-3 md:mb-4 tracking-wide leading-tight px-4"
        >
          100% Pure Veg <span className="italic text-marigold">Restaurant</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-inter text-xs sm:text-sm md:text-base text-ivory/70 max-w-md mx-auto mb-10 md:mb-12"
        >
          NH-8, Ajmer–Jaipur Highway · Gagwana, Ajmer
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
            className="w-full sm:w-auto px-10 py-4 bg-terracotta text-ivory font-inter font-medium rounded-sm shadow-xl transition-colors uppercase tracking-widest text-xs md:text-sm"
          >
            Explore Menu
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 border border-marigold/50 text-marigold font-inter font-medium rounded-sm backdrop-blur-sm hover:bg-marigold/10 transition-colors uppercase tracking-widest text-xs md:text-sm cursor-pointer"
            onClick={() => window.open('https://maps.google.com/?q=Bagh+Baan+Family+Restaurant+Gagwana+Ajmer', '_blank')}
          >
            Get Directions
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-inter text-[10px] uppercase tracking-widest text-ivory/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-marigold to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Section1UI;
