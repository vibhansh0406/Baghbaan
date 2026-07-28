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
    <section className="min-h-screen w-full relative z-10 flex flex-col justify-center items-center pointer-events-none py-20">

      <div className="text-center mb-16 pointer-events-auto mt-20">
        <h3 className="font-cormorant text-4xl md:text-5xl text-marigold mb-2">Guest Experiences</h3>
        <p className="font-inter text-ivory/80 max-w-lg mx-auto">See what our visitors have to say about their journey through our orchard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl w-full pointer-events-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(232, 169, 59, 0.15)"
            }}
            className="bg-[#2A1F3D]/80 backdrop-blur-md border-2 border-[#B5502E]/40 rounded-lg p-8 relative overflow-hidden"
            style={{ transformPerspective: 1000 }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{
                   backgroundImage: `radial-gradient(#E8A93B 2px, transparent 2px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <div className="relative z-10">
              <div className="text-marigold text-3xl mb-4">"</div>
              <p className="font-inter text-ivory mb-6 leading-relaxed">
                {review.text}
              </p>
              <div className="flex justify-between items-center border-t border-marigold/20 pt-4">
                <span className="font-bold text-marigold">{review.author}</span>
                <span className="text-xs text-ivory/60 uppercase tracking-wider">{review.source}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section6UI;
