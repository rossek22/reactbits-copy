"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Button from "./Button";
import ThemeToggle from "./other/ThemeToggle";
import {
  revealItem,
  revealPanel,
  revealStaggerContainer,
} from "@/lib/animations";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center justify-center px-3 text-black sm:px-4 dark:text-white ${className}`}
    >
      <svg
        className="relative -top-5 hidden rotate-180 text-white transition-colors duration-500 dark:text-black sm:block"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>

      <motion.div
        initial={revealPanel.initial}
        animate={revealPanel.animate}
        transition={revealPanel.transition}
        className="flex w-full max-w-212.5 flex-row items-center justify-between rounded-b-2xl bg-white px-3 py-3 font-[Raleway] text-black shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-colors duration-500 sm:px-4 md:p-4 lg:p-5 dark:bg-black dark:text-white/90 dark:shadow-none"
      >
        <motion.div
          variants={revealStaggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-row items-center justify-between w-full"
        >
          <motion.div variants={revealItem}>
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-1 sm:gap-1.5">
                <svg viewBox="-11.5 -11.5 23 23" className="w-6 sm:w-7">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span className="text-lg font-semibold sm:text-[20px]">
                  ReactBits
                </span>
                <span className="hidden rounded-[8px] border border-black/5 bg-white p-1 text-[14px] font-medium text-black min-[390px]:inline-flex dark:border-white/5 dark:bg-[#0a0a0a] dark:text-[#afafaf]">
                  Skeed
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="hidden md:flex flex-row gap-5"
          >
            <Link href={"/docs"}>Docs</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/roadmap"}>RoadMap</Link>
          </motion.div>

          <motion.div variants={revealItem} className="flex flex-row gap-2.5 items-center">
            <ThemeToggle />

            <div className="hidden md:flex flex-row gap-2.5">
              <Button text="Sign In" variant="dark" />

              <Button
                text="Get Lifetime Access"
                variant="white"
                icon={<ChevronRight size={20} strokeWidth={2} />}
                iconSide="right"
              />
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="p-2 md:hidden"
              aria-label="Open mobile menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <svg
        className="relative -top-5 hidden rotate-90 text-white transition-colors duration-500 dark:text-black sm:block"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Menu"
        className="mt-24"
      >
        <motion.div
          id="mobile-menu"
          variants={revealStaggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 text-center justify-center items-center font-[Raleway] text-lg"
        >
          <motion.div variants={revealItem}>
            <Link href="/docs" onClick={() => setOpen(false)}>
              Docs
            </Link>
          </motion.div>
          <motion.div variants={revealItem}>
            <Link href="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
          </motion.div>
          <motion.div variants={revealItem}>
            <Link href="/roadmap" onClick={() => setOpen(false)}>
              RoadMap
            </Link>
          </motion.div>

          <motion.div variants={revealItem}>
            <Button text="Sign In" variant="dark" fullWidth />
          </motion.div>

          <motion.div variants={revealItem}>
            <Button
              text="Get Lifetime Access"
              variant="white"
              fullWidth
              icon={<ChevronRight size={20} strokeWidth={2} />}
              iconSide="right"
            />
          </motion.div>
        </motion.div>
      </Modal>
    </div>
  );
}
