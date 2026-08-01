import React, { useEffect } from 'react';
import Section1UI from './sections/Section1/Section1UI';
import Section2UI from './sections/Section2/Section2UI';
import Section3UI from './sections/Section3/Section3UI';
import Section4UI from './sections/Section4/Section4UI';
import Section5UI from './sections/Section5/Section5UI';
import Section6UI from './sections/Section6/Section6UI';
import Section7UI from './sections/Section7/Section7UI';

function App() {
  return (
    <div className="w-full text-ivory font-inter bg-[#111] min-h-screen relative isolate">
      <div className="noise-overlay pointer-events-none"></div>

      {/*
        In 2D mode, we render standard stacked sections.
        We can use background images/gradients to simulate the orchard path depth,
        rather than a literal 3D fly-through.
      */}
      <Section1UI />
      <Section2UI />
      <Section3UI />
      <Section4UI />
      <Section5UI />
      <Section6UI />
      <Section7UI />
    </div>
  );
}

export default App;
