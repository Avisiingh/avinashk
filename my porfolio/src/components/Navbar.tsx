"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Notes", href: "/notes" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoize the scroll handler for better performance
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    // Add passive option for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 ${
        scrolled 
          ? "bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Avinash Kumar
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle scrolled={scrolled} />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle scrolled={scrolled} />
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-scale origin-top">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 