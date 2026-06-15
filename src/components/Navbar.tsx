"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Collections", href: "/collections" },
  { name: "Bridal Jewellery", href: "/bridal" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#eeddae] shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col items-start select-none group">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#1C1917] group-hover:text-gold-600 transition-colors">
              SRI LAKSHMI
            </span>
            <span className="text-xs tracking-[0.3em] font-light text-gold-600 uppercase">
              JEWELLERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-sans text-sm tracking-widest uppercase transition-colors py-2 ${
                    isActive
                      ? "text-gold-600 font-medium"
                      : "text-[#1C1917]/85 hover:text-gold-500"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact#book-appointment"
              className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-sans text-xs tracking-widest uppercase rounded-sm border border-gold-600 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1C1917] hover:text-gold-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAF6F0] border-b border-[#eeddae] shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-sm text-base tracking-widest uppercase transition-colors ${
                      isActive
                        ? "bg-[#eeddae]/20 text-gold-700 font-semibold"
                        : "text-[#1C1917]/85 hover:bg-[#eeddae]/10 hover:text-gold-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#eeddae]/40 px-3">
                <Link
                  href="/contact#book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gold-600 hover:bg-gold-700 text-white font-sans text-sm tracking-widest uppercase rounded-sm font-medium transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
