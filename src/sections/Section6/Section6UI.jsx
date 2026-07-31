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
    <section
      className="py-24 md:py-40 w-full relative flex flex-col justify-center items-center bg-sage-light px-4 sm:px-6 md:px-8 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="text-center mb-16 relative z-10">
        <span className="text-sage-dark font-inter tracking-[0.2em] uppercase text-sm mb-4 block">Testimonials</span>
        <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4">Guest Experiences</h3>
        <p className="font-inter text-charcoal/70 max-w-lg mx-auto text-sm md:text-base px-4">See what our visitors have to say about their journey through our orchard.</p>

        {/* High-end 2D badge */}
        <div className="inline-flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full border border-sage-dark/30 mt-8 bg-ivory shadow-xl">
          <span className="text-marigold text-sm md:text-base tracking-widest mb-1">⭐⭐⭐⭐⭐</span>
          <span className="font-playfair text-3xl md:text-4xl text-charcoal font-bold">4.6</span>
          <span className="text-[9px] md:text-[10px] text-charcoal/60 uppercase tracking-widest mt-1">TripAdvisor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-ivory p-8 md:p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-300 shadow-lg relative z-10 flex flex-col border border-sage-dark/10"
          >
            <div className="text-marigold text-sm mb-4">⭐⭐⭐⭐⭐</div>
            <p className="font-playfair text-charcoal/90 mb-8 leading-relaxed italic text-base md:text-lg flex-grow">
              "{review.text}"
            </p>
            <div className="flex justify-between items-center border-t border-sage-dark/20 pt-4 mt-auto">
              <span className="font-inter font-semibold text-charcoal tracking-wide text-sm">{review.author}</span>
              <span className="text-[10px] md:text-xs text-charcoal/50 uppercase tracking-wider">{review.source}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section6UI;
