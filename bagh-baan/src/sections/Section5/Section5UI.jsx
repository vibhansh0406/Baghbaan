import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5UI = () => {
  const scrollContainerRef = useRef();
  const wrapRef = useRef();

  useEffect(() => {
    if (!wrapRef.current || !scrollContainerRef.current) return;

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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
    <section ref={wrapRef} className="h-screen w-full relative z-10 pointer-events-none overflow-hidden pt-20">

      <div className="absolute top-10 w-full text-center pointer-events-auto z-20">
        <h3 className="font-cormorant text-4xl md:text-5xl text-marigold mb-2">The Courtyard</h3>
        <p className="font-inter text-ivory/80">Spacious seating under the stars.</p>
      </div>

      <div className="h-full w-full flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 px-10 md:px-[20vw] pointer-events-auto h-[60vh]"
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative h-full w-[80vw] md:w-[45vw] shrink-0 rounded-xl overflow-hidden border border-marigold/30 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-dusk-plum/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img
                src={`/gallery/${src}`}
                alt="Restaurant Courtyard"
                className="w-full h-full object-cover"
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
