"use client";

import React from "react";
import MagicRings from "./MagicRings";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar className="absolute top-0 left-0 w-full z-20" />{" "}
      <div className="absolute inset-0 z-0 rotate-0 overflow-auto">
        <MagicRings
          color="#DA7349"
          colorTwo="#ffffff"
          ringCount={15}
          speed={1.5}
          attenuation={12}
          lineThickness={2}
          baseRadius={0.25}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.5}
          blur={0}
          noiseAmount={0.1}
          rotation={12}
          ringGap={1.5}
          fadeIn={1}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.1}
          hoverScale={1.1}
          parallax={0.05}
          clickBurst={false}
        />
      </div>
      <div className="relative z-10 flex flex-row justify-center gap-10 w-screen pointer-events-none -mt-20">
        {" "}
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden sm:block" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden md:block" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden lg:block" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden xl:block" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden 2xl:block" />
        <div className="w-64 h-screen backdrop-blur-[5px] border-x border-white/5 hidden 2xl:block" />
      </div>
    </div>
  );
}
