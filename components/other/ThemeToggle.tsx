"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import Button from "../Button";

type ThemeMode = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const COOKIE_KEY = "theme";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === "system" ? getSystemTheme() : mode;
}

function syncTheme(mode: ThemeMode) {
  const theme = resolveTheme(mode);
  const root = document.documentElement;

  root.dataset.themeMode = mode;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
}

function persistTheme(mode: ThemeMode) {
  localStorage.setItem(STORAGE_KEY, mode);
  document.cookie = `${COOKIE_KEY}=${mode}; path=/; max-age=31536000; samesite=lax`;
}

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return "dark";
}

function getNextTheme(mode: ThemeMode): ThemeMode {
  if (mode === "dark") {
    return "light";
  }

  if (mode === "light") {
    return "system";
  }

  return "dark";
}

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getPreferredTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    syncTheme(themeMode);
    persistTheme(themeMode);

    if (themeMode !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => syncTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  const toggle = () => {
    setThemeMode((currentTheme) => getNextTheme(currentTheme));
  };

  const resolvedTheme = themeMode === "system" ? getSystemTheme() : themeMode;
  const icon =
    themeMode === "system" ? (
      <Monitor size={20} />
    ) : resolvedTheme === "dark" ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    );
  const nextTheme = getNextTheme(themeMode);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button
        onClick={() => {}}
        variant="onlyIcon"
        radius="999px"
        backgroundOpacity={0}
        icon={<div style={{ width: 20, height: 20 }} />} // Placeholder
        aria-pressed={false}
        aria-label="Loading theme toggle"
        title="Loading theme toggle"
      />
    );
  }

  return (
    <Button
      onClick={toggle}
      variant="onlyIcon"
      radius="999px"
      backgroundOpacity={0}
      icon={icon}
      aria-pressed={resolvedTheme === "dark"}
      aria-label={`Theme: ${themeMode}. Switch to ${nextTheme}.`}
      title={`Theme: ${themeMode}`}
    />
  );
}
