"use client";

import MagicRings from "../other/MagicRings";
import Navbar from "../Navbar";
import GradientText from "../other/GradientText";
import Link from "next/link";
import Button from "../Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { revealItem, revealStaggerContainer } from "@/lib/animations";

const gridColumns = [
  "",
  "",
  "hidden md:block",
  "hidden lg:block",
  "hidden xl:block",
  "hidden 2xl:block",
  "hidden 2xl:block",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Navbar className="absolute top-0 left-0 z-30 w-full" />

      <div className="absolute inset-0 z-0 overflow-hidden">
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
          parallax={0.08}
          clickBurst={false}
        />
      </div>

      <motion.div
        variants={revealStaggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full flex-row justify-center gap-3 px-3 -mt-12 pointer-events-none sm:gap-4 sm:px-4 md:gap-6 lg:gap-10"
      >
        {gridColumns.map((visibilityClass, index) => (
          <motion.div
            key={index}
            variants={revealItem}
            className={`h-screen w-[42vw] max-w-64 shrink-0 border-x border-black/5 backdrop-blur-[5px] transition-colors duration-500 sm:w-52 md:w-56 lg:w-64 dark:border-white/5 ${visibilityClass}`}
          />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 pb-10 pt-28 text-center sm:px-6 sm:pt-32">
        <motion.div
          variants={revealStaggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-5xl flex-col items-center justify-center gap-3 font-[Raleway] text-[2.75rem] font-semibold leading-[0.95] sm:gap-4 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <motion.div variants={revealItem}>
            <Link
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-[#0a0a0a]/50 px-3 py-1 text-left shadow-sm transition-all duration-300 backdrop-blur-sm hover:bg-[#0a0a0a]/80 cursor-pointer"
              href="/#pricing"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs text-white sm:text-sm">
                Trusted by 620+ developers
              </span>
            </Link>
          </motion.div>
          <div className="flex w-screen flex-col items-center justify-center">
            <motion.div
              variants={revealStaggerContainer}
              className="flex w-screen flex-col items-center justify-center gap-y-2 sm:gap-y-2.5"
            >
              <motion.div
                variants={revealItem}
                className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 max-[380px]:text-[2.35rem]"
              >
                <span>Build</span>
                <GradientText
                  colors={[
                    "#FF7A27",
                    "#FF8C3A",
                    "#FFA94D",
                    "#FFBF66",
                    "#E06A2C",
                    "#B85624",
                  ]}
                  className="font-semibold"
                >
                  memorable
                </GradientText>
                <span>products</span>
              </motion.div>
              <motion.span variants={revealItem} className="block w-full">
                faster than ever
              </motion.span>
            </motion.div>
            <motion.p
              variants={revealItem}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              React components, blocks, and templates designed for marketing
              pages, launches, and products that need to stand out.
            </motion.p>
            <motion.div
              variants={revealItem}
              className="pointer-events-auto mt-6 flex w-full flex-col items-stretch justify-center gap-3 text-base sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <Button
                text="Get Lifetime Access"
                variant="white"
                icon={<ChevronRight size={20} strokeWidth={2} />}
                iconSide="right"
                className="w-full font-semibold sm:w-auto"
              />
              <Button
                text="Browse Docs"
                variant="dark"
                icon={<ChevronRight size={20} strokeWidth={2} />}
                iconSide="right"
                backgroundOpacity={0.5}
                className="w-full font-semibold sm:w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
