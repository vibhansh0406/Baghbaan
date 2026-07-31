import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5UI = () => {
  const scrollContainerRef = useRef();
  const wrapRef = useRef();

  useEffect(() => {
    if (!wrapRef.current || !scrollContainerRef.current) return;

    // Only apply GSAP horizontal scroll pinning on desktop (min-width: 768px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      let totalScroll = scrollContainerRef.current.scrollWidth - window.innerWidth;

      gsap.to(scrollContainerRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => "+=" + totalScroll,
          pin: true,
          scrub: 1,
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const photos = [
    'SnapInsta.to_670867522_18078221891284851_8695517073263434859_n.jpg',
    'SnapInsta.to_670971345_18078221927284851_4943897329291805121_n.jpg',
    'SnapInsta.to_671254544_18078221882284851_6740273168744760907_n.jpg',
    'SnapInsta.to_671804809_18078221909284851_3039663238816489581_n.jpg',
    'SnapInsta.to_672310439_18078221936284851_8366033340647186944_n.jpg',
    'SnapInsta.to_673119064_18078221918284851_3803302254053532087_n.jpg',
    'SnapInsta.to_673159396_18078221957284851_5532973771754436603_n.jpg',
    'SnapInsta.to_673880830_18078221945284851_2043286918831100065_n.jpg'
  ];

  return (
    <section
      ref={wrapRef}
      className="min-h-screen md:h-screen w-full relative overflow-hidden parallax-bg pt-24 md:pt-20 pb-16 md:pb-0 border-t border-marigold/10 flex flex-col md:block"
      style={{ backgroundImage: `url('/gallery/SnapInsta.to_671254544_18078221882284851_6740273168744760907_n.jpg')` }}
    >

      <div className="absolute inset-0 bg-[#111]/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-transparent opacity-80 pointer-events-none"></div>

      <div className="relative md:absolute md:top-12 left-0 w-full text-center z-20 mb-8 md:mb-0">
        <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-marigold mb-2">The Courtyard</h3>
        <p className="font-inter text-ivory/70 tracking-widest uppercase text-xs md:text-sm">Ambiance & Atmosphere</p>
      </div>

      <div className="flex-1 md:h-full w-full flex items-center overflow-hidden">
        {/* On mobile: Native horizontal scrolling (overflow-x-auto, snap). On desktop: GSAP pinned scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-12 px-6 md:px-[15vw] h-[50vh] md:h-[60vh] items-center w-full md:w-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar"
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative h-full w-[85vw] md:w-[45vw] shrink-0 overflow-hidden border border-marigold/20 group shadow-2xl bg-[#111] snap-center"
            >
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img
                src={`/gallery/${src}`}
                alt="Restaurant Courtyard"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section5UI;
