'use client';
import React from 'react';

import { TypewriterEffectSmoothDemo } from './TypewriterEffectSmoothDemo';
import Machinelife from './Machinelife';
import Whychooseus from './Whychooseus';
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo';
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
export  const Home = () => {
  return (
    <div>
      <TypewriterEffectSmoothDemo />
      <Machinelife />
      <Whychooseus />
      <InfiniteMovingCardsDemo />
      <AnimatedTestimonialsDemo/>
      <StickyScrollRevealDemo/>
    </div>
  );
};
