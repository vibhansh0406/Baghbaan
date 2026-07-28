import React from 'react';
import { motion } from 'framer-motion';

const Section3UI = () => {
  return (
    <section className="h-[150vh] w-full flex flex-col justify-start items-center relative z-10 pointer-events-none pt-[30vh]">

      <div className="text-center mb-10 pointer-events-auto">
        <h3 className="font-cormorant text-4xl md:text-5xl text-marigold mb-4">The Rajasthani Thali</h3>
        <p className="font-inter text-ivory/80 max-w-lg mx-auto mb-6">
          A symphony of flavors, curated from generations of family recipes. 100% Pure Veg.
        </p>
      </div>

      <div className="relative w-full max-w-3xl h-[60vh] hidden md:block">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-40%" }}
          className="absolute top-[20%] right-[10%] bg-wood-brown/80 backdrop-blur px-4 py-2 rounded border border-marigold/50 font-cormorant text-xl shadow-lg"
        >
          Panchmel Dal
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: "-50%" }}
          className="absolute bottom-[20%] left-[10%] bg-wood-brown/80 backdrop-blur px-4 py-2 rounded border border-marigold/50 font-cormorant text-xl shadow-lg"
        >
          Gatte ki Sabzi
        </motion.div>
      </div>

    </section>
  );
};

export default Section3UI;
