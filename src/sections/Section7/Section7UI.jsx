import React from 'react';
import { motion } from 'framer-motion';

const Section7UI = () => {
  return (
    <section
      className="pt-24 md:pt-40 w-full relative flex flex-col justify-end parallax-bg border-t border-marigold/10 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_671804809_18078221909284851_3039663238816489581_n.jpg')` }}
    >
      <div className="absolute inset-0 bg-charcoal/90 rounded-t-[3rem] md:rounded-t-[5rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-100 pointer-events-none rounded-t-[3rem] md:rounded-t-[5rem]"></div>

      {/* Map & Info Container */}
      <div className="w-full p-6 md:p-20 flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center relative z-10 max-w-7xl mx-auto">

        {/* Info Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
          <div>
            <span className="text-marigold font-inter tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">Location</span>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-ivory">Visit Bagh Baan</h2>
          </div>

          <p className="font-inter text-ivory/80 text-base md:text-lg leading-relaxed">
            Whether you're breaking a long drive on the highway or looking for a special dinner with the family, our 100% Pure Veg orchard doors are always open.
          </p>

          <div className="flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 text-ivory/90 font-inter text-sm md:text-base">
            <div className="flex items-start gap-4">
              <span className="text-marigold text-xl md:text-2xl mt-1 md:mt-0">📍</span>
              <p className="leading-relaxed">
                <strong className="text-marigold tracking-wide font-normal block mb-1">Bagh Baan Family Restaurant</strong>
                NH-8, Ajmer-Jaipur Expressway,<br/>
                Gagwana, Ajmer, Rajasthan 305023, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-marigold text-xl md:text-2xl">🕒</span>
              <p>Open Daily | Highway travelers welcome</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-marigold text-xl md:text-2xl">🚗</span>
              <p>Ample secure parking available</p>
            </div>
          </div>

          <motion.a
            href="https://goo.gl/maps/bHjZ6NbxFjMFRzQv6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-terracotta text-ivory font-inter font-medium py-4 px-10 rounded-full self-start shadow-xl hover:bg-terracotta/90 transition-colors uppercase tracking-widest text-xs md:text-sm w-full sm:w-auto text-center"
          >
            Get Directions
          </motion.a>
        </div>

        {/* Map Side */}
        <div className="w-full md:w-1/2 h-[350px] md:h-[500px] border border-marigold/20 shadow-2xl relative bg-[#111]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.627622934062!2d74.72149591456248!3d26.55018608226058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be1a0c841bb2f%3A0x6b4038a8bbf4083a!2sBagh%20Baan%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1683058882000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bagh Baan Family Restaurant Map"
            className="absolute inset-0 grayscale-[50%] hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
          ></iframe>
        </div>

      </div>

      {/* Premium Footer */}
      <div className="w-full bg-[#111] text-ivory/50 text-center py-8 md:py-10 px-4 font-inter text-xs md:text-sm border-t border-marigold/10 relative z-10">
        <p className="uppercase tracking-widest mb-2">Bagh Baan Family Restaurant</p>
        <p>© {new Date().getFullYear()} All rights reserved. 100% Pure Veg.</p>
        <p className="mt-2 opacity-50">NH-8, Ajmer-Jaipur Highway · Gagwana, Ajmer</p>
      </div>

    </section>
  );
};

export default Section7UI;
