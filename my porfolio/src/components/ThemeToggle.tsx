"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface ThemeToggleProps {
  scrolled?: boolean;
}

export function ThemeToggle({ scrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`rounded-full p-2 transition-all duration-300 ${
        scrolled
          ? "hover:bg-gray-100 dark:hover:bg-gray-800"
          : "hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
} 