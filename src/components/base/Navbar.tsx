"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          aria-label="Go home"
        >
          <Image
            src="/web_logo.png"
            alt="Paper Theory Logo"
            width={280}
            height={60}
            className="h-17 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav links shifted to right */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 relative">
          <Link
            href="/communications"
            className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
          >
            Communications
          </Link>
          <Link
            href="/creative"
            className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
          >
            Creative
          </Link>
          <Link
            href="/media"
            className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
          >
            Media
          </Link>
          <Link
            href="/technology"
            className="transition-colors duration-200 text-neutral-700 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
          >
            Technology
          </Link>
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-600 transition-colors"
          >
            Start a Project
          </Link>
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
            <Link
              href="/communications"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
            >
              Communications
            </Link>
            <Link
              href="/creative"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
            >
              Creative
            </Link>
            <Link
              href="/media"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
            >
              Media
            </Link>
            <Link
              href="/technology"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
            >
              Technology
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-neutral-700 transition-colors duration-200 hover:text-[#f99216] focus:text-[#f99216] active:text-[#f99216]"
            >
              Start a Project
            </Link>
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
                <Link
                  href={
                    item.toLowerCase() === 'homepage' ? '/' :
                    item.toLowerCase() === 'our works' ? '/works' :
                    `/${item.toLowerCase()}`
                  }
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition"
                >
                  {item}
                </Link>
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
              <Link
                href={
                  item.toLowerCase() === 'homepage' ? '/' :
                  item.toLowerCase() === 'our works' ? '/works' :
                  `/${item.toLowerCase()}`
                }
                className="block py-1 text-sm text-neutral-600 hover:text-neutral-900"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

