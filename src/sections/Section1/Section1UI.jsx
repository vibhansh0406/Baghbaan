import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Section1UI = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Attempt to autoplay muted on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="min-h-[100svh] md:h-screen w-full flex flex-col justify-center items-center relative bg-charcoal sticky top-0 -z-10 bg-cover-center overflow-hidden"
    >

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-[1.1] brightness-90 z-0"
        src="/resturant.mp4"
        poster="/gallery/SnapInsta.to_672310439_18078221936284851_8366033340647186944_n.jpg"
        autoPlay
        loop
        playsInline
        muted={isMuted}
      />

      {/*
        Deep cinematic overlay to keep the moody premium feel
        while showing the gorgeous restaurant video underneath.
      */}
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[1px] z-[1]"></div>

      {/* Vintage Effect Overlays */}
      <div className="absolute inset-0 bg-[#3b2d1d] mix-blend-color z-[2] opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-[2] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Vignette bridging to the bright Ivory section below */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sage-dark/20 to-transparent pointer-events-none z-[2]"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none z-[2]"></div>


      {/* Video Controls (Positioned high up) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 right-8 z-30 flex gap-4"
      >
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-ivory/30 bg-charcoal/40 backdrop-blur-md flex items-center justify-center text-ivory hover:bg-ivory hover:text-charcoal transition-all duration-300"
        >
          {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current translate-x-[1px]" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full border border-ivory/30 bg-charcoal/40 backdrop-blur-md flex items-center justify-center text-ivory hover:bg-ivory hover:text-charcoal transition-all duration-300"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </motion.div>

      {/* Logo & Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-6 z-20 relative w-full max-w-4xl flex flex-col items-center justify-center pt-10 pb-32 pointer-events-none"
      >

        {/* Strictly the Tree Logo, purely centered, tinted to sage so it matches brand without being a flat background */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          src="/logo_tree_only.png"
          alt="Bagh Baan Logo"
          className="w-40 sm:w-48 md:w-56 h-auto object-contain mb-8 mx-auto sepia contrast-125 hue-rotate-15 brightness-110 drop-shadow-2xl"
          style={{ filter: "brightness(0) saturate(100%) invert(71%) sepia(10%) saturate(763%) hue-rotate(30deg) brightness(87%) contrast(85%)" }} // Forces it to Sage color (#9E9C89)
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-inter text-sage uppercase text-[10px] md:text-xs mb-2 block tracking-[0.25em]"
        >
          A UNIT OF ZW GROUP
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-philosopher text-6xl sm:text-7xl md:text-[8rem] text-ivory mb-2 md:mb-4 leading-none tracking-wide"
        >
          Bagh<span className="mx-1 md:mx-3 text-sage text-3xl md:text-6xl align-middle">•</span>Baan
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-[1px] bg-sage-dark/40 mx-auto mt-6 mb-8 md:my-8"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-playfair text-2xl sm:text-3xl md:text-4xl text-ivory mb-3 tracking-[0.4em] uppercase font-light"
        >
          Restaurant
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-inter text-xs sm:text-sm text-sage/70 max-w-md mx-auto mt-4 uppercase tracking-[0.15em]"
        >
          100% Pure Veg • Highway Fine Dining
        </motion.p>
      </motion.div>

    </section>
  );
};

export default Section1UI;
