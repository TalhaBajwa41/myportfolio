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

const THEMES = [
  { id: "blue", label: "Blue" },
  { id: "violet", label: "Violet" },
  { id: "emerald", label: "Emerald" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("blue");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Apps", href: "/mobile-app" },
        { name: "UI/UX Design", href: "/ui-ux-design" },
        { name: "Consulting", href: "/consulting" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const storedDark = window.localStorage.getItem("pref-dark") === "true";
    const storedTheme = window.localStorage.getItem("pref-theme") || "blue";
    setDarkMode(storedDark);
    setTheme(storedTheme);
    applyDocumentClasses(storedDark, storedTheme);
  }, []);

  function applyDocumentClasses(isDark, themeId) {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
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

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-[hsl(var(--accent))]"
        >
          MyLogo
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");

            // Services dropdown
            if (link.name === "Services" && link.subLinks) {
              return (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={[
                      "flex items-center gap-1 font-medium transition-colors",
                      isActive
                        ? "text-[hsl(var(--accent))]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--accent))]",
                    ].join(" ")}
                  >
                    {link.name}
                    <ChevronsUpDown
                      size={16}
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-white dark:bg-neutral-800 shadow-lg rounded-lg z-50"
                      >
                        {link.subLinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Regular links
            return (
              <Link
                key={link.name}
                href={link.href}
                className={[
                  "font-medium transition-colors",
                  isActive
                    ? "text-[hsl(var(--accent))]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--accent))]",
                ].join(" ")}
              >
                {link.name}
              </Link>
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

        {/* Mobile Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>
    </header>
  );
}
