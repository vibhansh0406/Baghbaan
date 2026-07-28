import React from 'react';
import { motion } from 'framer-motion';

const Section6UI = () => {
  const reviews = [
    {
      author: "Rahul S.",
      text: "Best stop on the Ajmer-Jaipur highway! The Rajasthani 100% pure veg thali is authentic and absolutely delicious. Highly recommend for families.",
      source: "Google"
    },
    {
      author: "Priya M.",
      text: "We were surprised to find such great wood-fired vegetarian pizza along with amazing Indian food. Ample parking and very clean.",
      source: "Tripadvisor"
    },
    {
      author: "Ankit K.",
      text: "Warm hospitality in a beautiful orchard setting. Perfect place to relax and eat during a long drive.",
      source: "Google"
    }
  ];

  return (
    <section className="min-h-screen w-full relative flex flex-col justify-center items-center py-20 bg-charcoal border-t border-marigold/5">

      <div className="text-center mb-16 relative z-10">
        <span className="text-marigold font-inter tracking-[0.2em] uppercase text-sm mb-4 block">Testimonials</span>
        <h3 className="font-cormorant text-5xl md:text-6xl text-ivory mb-4">Guest Experiences</h3>
        <p className="font-inter text-ivory/70 max-w-lg mx-auto">See what our visitors have to say about their journey through our orchard.</p>

        {/* Replacing the 3D medallion with a high-end 2D badge */}
        <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border border-marigold/30 mt-8 bg-wood-brown/20 shadow-lg">
          <span className="font-tempting text-4xl text-marigold">4.6★</span>
          <span className="text-[10px] text-ivory/60 uppercase tracking-widest mt-1">TripAdvisor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl w-full">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-[#1F3B2C]/40 border border-ivory/10 p-10 rounded-sm hover:border-marigold/30 transition-all duration-300 shadow-xl"
          >
            <div className="text-marigold text-4xl mb-4 font-cormorant leading-none">"</div>
            <p className="font-inter text-ivory/90 mb-8 leading-relaxed italic text-lg">
              {review.text}
            </p>
            <div className="flex justify-between items-center border-t border-marigold/20 pt-4">
              <span className="font-semibold text-marigold tracking-wide">{review.author}</span>
              <span className="text-xs text-ivory/50 uppercase tracking-wider">{review.source}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section6UI;
