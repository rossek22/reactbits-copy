"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sun, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar({ className = "" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex justify-center items-center text-black ${className}`}>
      {/* SVG LEFT */}
      <svg
        className="relative -top-5 rotate-180"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>

      {/* NAVBAR */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-row items-center justify-between w-full max-w-212.5 p-3 md:p-4 lg:p-5 rounded-b-2xl bg-black font-[Raleway] text-white/90"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-row items-center justify-between w-full"
        >
          {/* LEFT */}
          <motion.div variants={item}>
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-1">
                <svg viewBox="-11.5 -11.5 23 23" className="w-7">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span className="text-[20px] font-semibold">ReactBits</span>
                <span className="text-[14px] font-medium p-1 rounded-[8px] border border-white/5 bg-[#0a0a0a]">
                  Skeed
                </span>
              </div>
            </Link>
          </motion.div>

          {/* CENTER (скрывается на мобиле) */}
          <motion.div variants={item} className="hidden md:flex flex-row gap-5">
            <Link href={"/docs"}>Docs</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/roadmap"}>RoadMap</Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={item}
            className="flex flex-row gap-2.5 items-center"
          >
            {/* тема */}
            <button className="rounded-full py-2 px-2.5 cursor-pointer transition-all duration-300 hover:bg-[#0a0a0a] hover:shadow-[0_0_0_1px_#ffffff1a]">
              <Sun size={20} />
            </button>

            {/* desktop кнопки */}
            <div className="hidden md:flex flex-row gap-2.5">
              <button className="bg-[#0a0a0a] p-2 rounded-[12px] font-medium transition-all duration-300 shadow-[0_0_0_1px_#ffffff1a] hover:shadow-[0_0_0_1px_#ffffff33] hover:bg-[#121212]">
                Sign In
              </button>

              <button className="flex flex-row gap-2 items-center text-black font-medium bg-white p-2 rounded-[12px] transition-all duration-300 ">
                Get Lifetime Access
                <ChevronRight size={15} strokeWidth={1.5} />
              </button>
            </div>

            {/* BURGER */}
            <button onClick={() => setOpen(true)} className="md:hidden p-2">
              <Menu size={22} />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SVG RIGHT */}
      <svg
        className="relative -top-5 rotate-90"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>

      {/* 🔥 МОДАЛКА */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/40"
          >
            <motion.div
              initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-20 w-[90%] max-w-md bg-black rounded-2xl p-5 text-white"
            >
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4"
              >
                <motion.div variants={item}>
                  <Link href="/docs">Docs</Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link href="/pricing">Pricing</Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link href="/roadmap">RoadMap</Link>
                </motion.div>

                <motion.div variants={item}>
                  <button className="w-full bg-[#0a0a0a] p-2 rounded-[12px]">
                    Sign In
                  </button>
                </motion.div>

                <motion.div variants={item}>
                  <button className="w-full bg-white text-black p-2 rounded-[12px]">
                    Get Lifetime Access
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
