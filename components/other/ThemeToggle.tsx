"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Button from "../Button";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.style.colorScheme = theme;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <Button
      onClick={toggle}
      variant="onlyIcon"
      radius="999px"
      backgroundOpacity={0}
      icon={theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      aria-pressed={theme === "dark"}
      aria-label="Toggle theme"
    />
  );
}
