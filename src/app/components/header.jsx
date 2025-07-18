"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Palette,
  ChevronsUpDown,
} from "lucide-react";

/**
 * Animated, themable Header component for Next.js (App Router friendly).
 *
 * Features:
 * - Light / Dark theme toggle (uses <html class="dark"> pattern; requires Tailwind darkMode:"class").
 * - Quick theme accent switcher (blue, violet, emerald) to demo color changes.
 * - Active link highlighting based on current path.
 * - Accessible keyboard navigation for mobile menu.
 * - Framer Motion entrance + hover / tap animations.
 * - Sticky header w/ subtle backdrop blur when scrolled.
 *
 * Usage:
 *   import Header from "@/components/Header";
 *   export default function Page(){
 *     return (
 *       <>
 *         <Header />
 *         <main className="pt-20">...</main>
 *       </>
 *     )
 *   }
 *
 * Tailwind setup notes:
 * - In tailwind.config.js set `darkMode: "class"`.
 * - Add the color CSS variables in globals.css (see snippet below) *or* swap in Tailwind classes inline.
 *
 * Minimal CSS vars example (globals.css):
 *   :root{ --accent: 37 99% 52%; }
 *   .theme-violet{ --accent: 262 83% 58%; }
 *   .theme-emerald{ --accent: 152 76% 40%; }
 *   .theme-blue{ --accent: 217 91% 60%; }
 *   .dark{ color-scheme: dark; }
 *
 * Then use `text-[hsl(var(--accent))]` etc.
 */

const THEMES = [
  { id: "blue", label: "Blue" },
  { id: "violet", label: "Violet" },
  { id: "emerald", label: "Emerald" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // avoid hydration mismatch
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("blue");
  const pathname = usePathname();

  // hydrate theme prefs from localStorage
  useEffect(() => {
    setMounted(true);
    const storedDark = window.localStorage.getItem("pref-dark") === "true";
    const storedTheme = window.localStorage.getItem("pref-theme") || "blue";
    setDarkMode(storedDark);
    setTheme(storedTheme);
    applyDocumentClasses(storedDark, storedTheme);
  }, []);

  function applyDocumentClasses(isDark, themeId) {
    const root = document.documentElement; // <html>
    // dark
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    // theme accent classes
    THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${themeId}`);
  }

  function toggleDark() {
    const next = !darkMode;
    setDarkMode(next);
    window.localStorage.setItem("pref-dark", String(next));
    applyDocumentClasses(next, theme);
  }

  function cycleTheme() {
    const idx = THEMES.findIndex((t) => t.id === theme);
    const nextTheme = THEMES[(idx + 1) % THEMES.length].id;
    setTheme(nextTheme);
    window.localStorage.setItem("pref-theme", nextTheme);
    applyDocumentClasses(darkMode, nextTheme);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // sticky header w/ scroll state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Guard for SSR: don't render animated icons until mounted to avoid mismatch
  if (!mounted) {
    return (
      <header className="fixed w-full top-0 z-50 h-16 bg-white dark:bg-neutral-900 shadow-sm" />
    );
  }

  return (
    <header
      className={[
        "fixed w-full top-0 z-50 transition-colors duration-300",
        scrolled
          ? "backdrop-blur bg-white/80 dark:bg-neutral-900/80 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-[hsl(var(--accent))]"
        >
          MyLogo
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={[
                    "relative font-medium transition-colors",
                    active
                      ? "text-[hsl(var(--accent))]"
                      : "text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--accent))]",
                  ].join(" ")}
                >
                  {link.name}
                  {/* animated underline */}
                  <span
                    className={[
                      "absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 bg-[hsl(var(--accent))] transition-transform duration-200",
                      "group-hover:scale-x-100",
                      active ? "scale-x-100" : "",
                    ].join(" ")}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* Theme Controls */}
          <div className="flex items-center space-x-2 pl-4 border-l border-gray-200 dark:border-gray-700 ml-2">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDark}
              className="p-1 rounded hover:scale-110 active:scale-95 transition-transform"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              aria-label="Cycle accent color"
              onClick={cycleTheme}
              className="p-1 rounded hover:scale-110 active:scale-95 transition-transform"
            >
              <Palette size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white dark:bg-neutral-900 shadow-md border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        "block w-full py-2 text-lg font-medium transition-colors",
                        active
                          ? "text-[hsl(var(--accent))]"
                          : "text-gray-800 dark:text-gray-200 hover:text-[hsl(var(--accent))]",
                      ].join(" ")}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 flex items-center space-x-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                <button
                  onClick={toggleDark}
                  className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}<span>Theme</span>
                </button>
                <button
                  onClick={cycleTheme}
                  className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <ChevronsUpDown size={18} /><span>Accent</span>
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
