import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ name, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.5, delay }}
    className="border-b border-marigold/10 pb-6"
  >
    <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-cormorant text-2xl text-ivory">{name}</h4>
      <div className="flex-grow border-b border-dotted border-ivory/20 mx-4 relative top-[-6px]"></div>
    </div>
    <p className="font-inter text-sm text-ivory/60">{description}</p>
  </motion.div>
);

const Section3UI = () => {
  return (
    <section
      id="menu"
      className="py-24 md:py-40 w-full relative parallax-bg px-4 sm:px-6 md:px-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_673119064_18078221918284851_3803302254053532087_n.jpg')` }}
    >

      <div className="absolute inset-0 bg-charcoal/95 rounded-t-[3rem] md:rounded-t-[5rem]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-marigold font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block">Heritage on a Plate</span>
          <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-ivory mb-4 leading-none">The Royal Thali</h3>
          <p className="font-inter text-ivory/70 max-w-md mx-auto text-sm md:text-base px-4 font-light">
            Generations of Rajasthani flavor, curated into one unforgettable masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { name: "Panchmel Dal", desc: "Five lentils slow-cooked with aromatic spices." },
            { name: "Gatte ki Sabzi", desc: "Gram flour dumplings in a tangy yogurt curry." },
            { name: "Ker Sangri", desc: "Desert beans stir-fried with rich masalas." },
            { name: "Bati & Churma", desc: "Baked wheat spheres with sweet crushed wheat." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(232, 169, 59, 0.4)" }}
              className="bg-[#111]/60 backdrop-blur-md border border-ivory/10 p-6 md:p-8 rounded-sm shadow-xl flex flex-col justify-center items-center text-center transition-all cursor-pointer group"
            >
              <h4 className="font-playfair text-2xl md:text-3xl text-ivory mb-2 group-hover:text-marigold transition-colors">{item.name}</h4>
              <p className="font-inter text-sm text-ivory/60 font-light max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section3UI;
