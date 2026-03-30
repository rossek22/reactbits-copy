"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  backdropClassName?: string;
  align?: "top" | "center";
  showClose?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  className = "",
  backdropClassName = "",
  align = "top",
  showClose = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
}: ModalProps) {
  const titleId = useId();
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeOnEscape, onClose]);

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className={`fixed inset-0 z-50 flex ${
            align === "center" ? "items-center" : "items-start"
          } justify-center bg-black/40 px-4 ${backdropClassName}`}
          onClick={(event) => {
            if (closeOnBackdrop && event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            className={`mt-20 w-full max-w-md rounded-2xl bg-white p-5 text-black shadow-2xl transition-colors duration-500 dark:bg-black dark:text-white ${className}`}
          >
            {(title || showClose) && (
              <div className="mb-5 flex items-center justify-between">
                {title ? (
                  <span id={titleId} className="text-lg font-semibold">
                    {title}
                  </span>
                ) : (
                  <span />
                )}
                {showClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="rounded-full p-1 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    <X />
                  </button>
                )}
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
