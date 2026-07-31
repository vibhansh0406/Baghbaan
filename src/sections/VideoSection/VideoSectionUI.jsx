import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSectionUI = () => {
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
    <section className="relative w-full h-[80vh] md:h-screen bg-charcoal overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 z-[15] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

      {/*
        Vintage Effect Overlays
        1. Sepia/Warm filter via CSS blend mode
        2. Film grain noise
        3. Vignette
      */}
      <div className="absolute inset-0 bg-[#3b2d1d] mix-blend-color z-10 opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(17,17,17,0.8)_100%)] z-10 pointer-events-none"></div>

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-[1.1] brightness-90"
        src="/video/restaurant.mp4"
        loop
        playsInline
        muted={isMuted}
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-16">

        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-start"
        >
          <p className="font-cormorant text-2xl md:text-4xl text-ivory/90 italic tracking-wide drop-shadow-lg">
            A Glimpse Into Our World
          </p>
        </motion.div>

        {/* Bottom Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-between items-end"
        >
          <div className="flex gap-4">
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
          </div>

          <p className="font-inter text-xs tracking-[0.2em] uppercase text-ivory/60">
            Cinematic Experience
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoSectionUI;
