import React from 'react';
import { motion } from 'framer-motion';

const Section7UI = () => {
  return (
    <section className="min-h-screen w-full relative z-10 flex flex-col justify-end pointer-events-none">

      <div className="w-full bg-[#1F3B2C]/95 backdrop-blur-xl border-t-2 border-marigold/30 p-8 md:p-16 pointer-events-auto mt-auto flex flex-col md:flex-row gap-12 items-center">

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="font-cormorant text-5xl text-marigold">Visit Bagh Baan</h2>
          <p className="font-inter text-ivory/90 text-lg leading-relaxed">
            Whether you're breaking a long drive on the highway or looking for a special dinner with the family, our 100% Pure Veg orchard doors are always open.
          </p>

          <div className="flex flex-col gap-4 mt-4 text-ivory/80 font-inter">
            <div className="flex items-start gap-4">
              <span className="text-marigold text-xl">📍</span>
              <p>
                <strong>Bagh Baan Family Restaurant</strong><br/>
                NH-8, Ajmer–Jaipur Expressway,<br/>
                Gagwana, Ajmer, Rajasthan 305023, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-marigold text-xl">🕒</span>
              <p>Open Daily | Highway travelers welcome</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-marigold text-xl">🚗</span>
              <p>Ample secure parking available</p>
            </div>
          </div>

          <motion.a
            href="https://goo.gl/maps/bHjZ6NbxFjMFRzQv6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-marigold text-[#1F3B2C] font-bold font-inter py-3 px-8 rounded-full self-start shadow-[0_0_15px_rgba(232,169,59,0.5)] transition-shadow hover:shadow-[0_0_25px_rgba(232,169,59,0.8)]"
          >
            Get Directions
          </motion.a>
        </div>

        <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden border-2 border-terracotta shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.627622934062!2d74.72149591456248!3d26.55018608226058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be1a0c841bb2f%3A0x6b4038a8bbf4083a!2sBagh%20Baan%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1683058882000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bagh Baan Family Restaurant Map"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-marigold/10"></div>
        </div>

      </div>

      <div className="w-full bg-[#111] text-ivory/50 text-center py-6 font-inter text-sm border-t border-marigold/20 pointer-events-auto">
        <p>© {new Date().getFullYear()} Bagh Baan Family Restaurant. All rights reserved.</p>
        <p className="mt-2 text-xs">NH-8, Ajmer–Jaipur Highway · Gagwana, Ajmer</p>
      </div>

    </section>
  );
};

export default Section7UI;
