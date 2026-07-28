import React from 'react';
import { motion } from 'framer-motion';

const Section4UI = () => {
  return (
    <section className="py-32 w-full relative bg-charcoal px-6 md:px-20 border-t border-marigold/5">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center relative z-10">

        {/* Typographic Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h4 className="text-terracotta font-inter tracking-[0.2em] uppercase text-sm mb-4">Highway Comforts</h4>
          <h3 className="font-cormorant text-5xl md:text-6xl text-ivory mb-6 leading-tight">
            Wood-Fired <br/><span className="text-marigold italic">Perfection</span>
          </h3>
          <p className="font-inter text-ivory/80 leading-relaxed mb-8 text-lg">
            A delightful twist for modern travelers. Our authentic wood-fired pizzas bring a taste of Italy right to the heart of Rajasthan, baked fresh to order using 100% Pure Veg ingredients and locally sourced produce.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-marigold shrink-0"></div>
              <div>
                <h5 className="font-cormorant text-2xl text-ivory mb-1">Classic Margherita</h5>
                <p className="font-inter text-sm text-ivory/60">Fresh basil, mozzarella, and our signature tomato sauce.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-marigold shrink-0"></div>
              <div>
                <h5 className="font-cormorant text-2xl text-ivory mb-1">Farmhouse Veggie Supreme</h5>
                <p className="font-inter text-sm text-ivory/60">Bell peppers, olives, mushrooms, and sweet corn.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-terracotta shrink-0"></div>
              <div>
                <h5 className="font-cormorant text-2xl text-ivory mb-1">Tandoori Paneer Pizza</h5>
                <p className="font-inter text-sm text-ivory/60">A fusion classic with marinated cottage cheese and mint drizzle.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Abstract / Graphic Representation instead of 3D */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-80 h-80 rounded-full border border-marigold/30 flex items-center justify-center relative bg-wood-brown/20"
          >
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-terracotta/20 animate-[spin_60s_linear_infinite]"></div>
            <h3 className="font-tempting text-5xl text-marigold opacity-80 text-center">Freshly<br/>Baked</h3>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Section4UI;
