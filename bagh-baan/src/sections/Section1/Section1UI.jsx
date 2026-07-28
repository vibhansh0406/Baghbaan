import React from 'react';
import { motion } from 'framer-motion';

const Section1UI = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-deep-plum">

      {/* Elegant Jaali Pattern Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#E8A93B 1px, transparent 1px), radial-gradient(#E8A93B 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      ></div>

      {/* Cinematic Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/90"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="text-center px-4 z-10 relative"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-inter text-marigold uppercase text-sm mb-4 block"
        >
          Welcome to the Orchard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-tempting text-6xl md:text-8xl lg:text-[9rem] text-ivory mb-2 drop-shadow-2xl leading-none"
        >
          Bagh Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-[1px] bg-marigold/50 mx-auto my-6"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-cormorant text-2xl md:text-4xl text-marigold mb-3 tracking-wide"
        >
          100% Pure Veg Family Restaurant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-inter text-sm md:text-base text-ivory/70 max-w-md mx-auto mb-10"
        >
          NH-8, Ajmer–Jaipur Highway · Gagwana, Ajmer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, backgroundColor: "#c25835" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-terracotta text-ivory font-inter font-medium rounded-sm shadow-xl transition-colors uppercase tracking-widest text-sm"
          >
            Explore Menu
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-marigold/50 text-marigold font-inter font-medium rounded-sm backdrop-blur-sm hover:bg-marigold/10 transition-colors uppercase tracking-widest text-sm cursor-pointer"
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
