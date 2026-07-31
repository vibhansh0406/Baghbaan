import React from 'react';
import { motion } from 'framer-motion';

const Section5UI = () => {
  const photos = [
    'SnapInsta.to_670867522_18078221891284851_8695517073263434859_n.jpg',
    'SnapInsta.to_670971345_18078221927284851_4943897329291805121_n.jpg',
    'SnapInsta.to_671254544_18078221882284851_6740273168744760907_n.jpg',
    'SnapInsta.to_671804809_18078221909284851_3039663238816489581_n.jpg',
    'SnapInsta.to_672310439_18078221936284851_8366033340647186944_n.jpg',
    'SnapInsta.to_673119064_18078221918284851_3803302254053532087_n.jpg'
  ];

  return (
    <section
      className="py-24 md:py-40 w-full relative bg-charcoal px-4 sm:px-6 md:px-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-marigold font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block">Atmosphere</span>
          <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-ivory mb-2">The Courtyard</h3>
        </div>

        {/* Clean, responsive CSS Grid layout replacing the scroll-hijacked horizontal gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-64 md:h-80 w-full overflow-hidden border border-ivory/10 rounded-sm group shadow-xl bg-[#111]"
            >
              <div className="absolute inset-0 bg-[#111]/40 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img
                src={`/gallery/${src}`}
                alt="Restaurant Courtyard"
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section5UI;
