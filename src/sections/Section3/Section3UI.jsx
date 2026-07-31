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
      className="py-16 md:py-32 w-full relative parallax-bg px-4 sm:px-6 md:px-20"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_673119064_18078221918284851_3803302254053532087_n.jpg')` }}
    >

      <div className="absolute inset-0 bg-[#111]/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-marigold font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-3 md:mb-4 block">Signature Experience</span>
          <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-ivory mb-4 md:mb-6">The Rajasthani Thali</h3>
          <p className="font-inter text-ivory/70 max-w-lg mx-auto text-base md:text-lg px-4 md:px-0">
            A symphony of flavors, curated from generations of family recipes. 100% Pure Veg and authentically prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-10">
          <MenuItem name="Panchmel Dal" description="A rich blend of five lentils slow-cooked with aromatic spices." delay={0.1} />
          <MenuItem name="Gatte ki Sabzi" description="Gram flour dumplings simmered in a tangy yogurt and spice curry." delay={0.2} />
          <MenuItem name="Ker Sangri" description="Traditional desert beans and berries stir-fried with Rajasthani masalas." delay={0.3} />
          <MenuItem name="Bati & Churma" description="Baked wheat spheres served with sweet crushed wheat and pure ghee." delay={0.4} />
          <MenuItem name="Jeera Rice" description="Basmati rice tempered with cumin and whole spices." delay={0.5} />
          <MenuItem name="Lehsuni Chutney" description="Fiery garlic chutney to elevate the thali experience." delay={0.6} />
        </div>
      </div>

    </section>
  );
};

export default Section3UI;
