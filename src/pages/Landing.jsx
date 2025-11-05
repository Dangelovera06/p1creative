import React from "react";

import Hero from "../components/landing/Hero";
import HardTruth from "../components/landing/HardTruth";
import WhatHappens from "../components/landing/WhatHappens";
import SocialProof from "../components/landing/SocialProof";
import VideoSlider from "../components/landing/VideoSlider";
import EmotionalCore from "../components/landing/EmotionalCore";
import Blueprint from "../components/landing/Blueprint";
import FinalClose from "../components/landing/FinalClose";
import Testimonials from "../components/landing/Testimonials";
import WhatYouGet from "../components/landing/WhatYouGet";

export default function Landing() {

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Floating Navigation Header - Visible Throughout Site */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            {/* Logo and Name */}
            <div className="flex items-center gap-2">
              <img src="/Momento Logo1.svg" alt="Momento" className="h-10 w-auto sm:h-12" />
              <span className="text-xl sm:text-2xl font-normal tracking-wide text-white">Momento</span>
            </div>
            
            {/* Offer Text */}
            <div className="text-xs sm:text-sm font-normal tracking-widest text-white/60 uppercase">
              This Offer Will Close
            </div>
          </div>
        </div>
      </header>

      <Hero />
      <WhatYouGet />
      <Testimonials />
      <HardTruth />
      <WhatHappens />
      <SocialProof />
      <VideoSlider />
      <EmotionalCore />
      <Blueprint />
      <FinalClose />

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 font-display font-bold text-white">
            Momento
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning your audience into a profitable business
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 Momento. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}