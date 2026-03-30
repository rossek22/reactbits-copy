import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

const ButtonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-white/15",
  {
    variants: {
      variant: {
        onlyIcon:
          "bg-[rgb(255_255_255/var(--button-bg-opacity))] text-black hover:bg-black/5 hover:shadow-[0_0_0_1px_#0000001a] dark:bg-[rgb(10_10_10/var(--button-bg-opacity))] dark:text-white dark:hover:bg-white/10 dark:hover:shadow-[0_0_0_1px_#ffffff1a]",
        dark:
          "bg-[rgb(245_245_245/var(--button-bg-opacity))] text-black shadow-[0_0_0_1px_#0000001a] hover:bg-neutral-200 dark:bg-[rgb(10_10_10/var(--button-bg-opacity))] dark:text-white dark:shadow-[0_0_0_1px_#ffffff1a] dark:hover:bg-[#121212] dark:hover:shadow-[0_0_0_1px_#ffffff33]",
        white:
          "bg-[rgb(0_0_0/var(--button-bg-opacity))] text-white hover:brightness-110 dark:bg-[rgb(255_255_255/var(--button-bg-opacity))] dark:text-black",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "dark",
      fullWidth: false,
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    text?: string;
    icon?: ReactNode;
    iconSide?: "left" | "right";
    radius?: number | string;
    backgroundOpacity?: number;
    backgroundClassName?: string;
    contentClassName?: string;
  };

const variantStyles = {
  onlyIcon: {
    paddingClassName: "p-2",
  },
  dark: {
    paddingClassName: "px-3 py-2",
  },
  white: {
    paddingClassName: "px-3 py-2",
  },
} as const;

function clampOpacity(value: number | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 1;
  }

  return Math.min(Math.max(value, 0), 1);
}

export default function Button({
  children,
  className,
  text,
  icon,
  iconSide = "left",
  radius = 12,
  variant = "dark",
  fullWidth = false,
  backgroundOpacity,
  backgroundClassName,
  contentClassName,
  style,
  type = "button",
  ...props
}: ButtonProps) {
  const variantStyle = variantStyles[variant ?? "dark"];
  const resolvedOpacity = clampOpacity(backgroundOpacity);
  const resolvedContent = children ?? text;
  const computedStyle = {
    ...style,
    borderRadius: radius,
    "--button-bg-opacity": resolvedOpacity,
  } as CSSProperties;

  return (
    <button
      type={type}
      className={cn(
        ButtonVariants({ variant, fullWidth }),
        variantStyle.paddingClassName,
        backgroundClassName,
        className,
      )}
      style={computedStyle}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center gap-2",
          contentClassName,
        )}
      >
        {icon && iconSide === "left" ? icon : null}
        {resolvedContent}
        {icon && iconSide === "right" ? icon : null}
      </span>
    </button>
  );
}
