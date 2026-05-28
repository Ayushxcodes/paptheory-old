"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 h-[72px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/web_logo.png"
            alt="Paper Theory Logo"
            width={280}
            height={60}
            className="h-17 md:h-20 w-auto"
          />
        </a>

        {/* Desktop Nav links shifted to right */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 relative">
          <a href="/" className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Homepage</a>
          <a href="/works" className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">OurWork</a>
          <a href="/genz" className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Social corner</a>
          <a href="/contact" className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Contact Us</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-4 space-y-4">
            <a href="/" className="block py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Homepage</a>
            <a href="/works" className="block py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">OurWork</a>
            <a href="/genz" className="block py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Social corner</a>
            <a href="/contact" className="block py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setOpen(false), 150); // 150ms delay
    setTimeoutId(id);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 hover:text-neutral-900 transition">
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 mt-[1px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-48 rounded-xl border border-neutral-200 bg-white shadow-lg">
          <ul className="py-2">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={
                    item.toLowerCase() === 'homepage' ? '/' :
                    item.toLowerCase() === 'our works' ? '/works' :
                    `/${item.toLowerCase()}`
                  }
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2 text-sm text-neutral-700 hover:text-neutral-900"
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pl-4 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item}>
              <a
                href={
                  item.toLowerCase() === 'homepage' ? '/' :
                  item.toLowerCase() === 'our works' ? '/works' :
                  `/${item.toLowerCase()}`
                }
                className="block py-1 text-sm text-neutral-600 hover:text-neutral-900"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
