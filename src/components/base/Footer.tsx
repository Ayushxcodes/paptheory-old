"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      // Simulate API call for subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 border-t-2 border-[#e8500a] font-sans">
      {/* Top Footer Section */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand & Description Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <Link href="/" className="inline-block">
                <Image
                  src="/web_logo.png"
                  alt="Paper Theory Logo"
                  width={220}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="text-[#e8500a] font-serif text-xl font-bold tracking-wide leading-tight">
                Paper Theory Network
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              An independent network driving high-impact strategy, creative design, digital media, and technology innovations.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/papertheorynetwork-ptn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-neutral-950/60 text-neutral-400 hover:text-[#e8500a] hover:bg-neutral-800 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider">Disciplines</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/communications" className="hover:text-[#e8500a] transition-colors duration-200">
                  Communications
                </Link>
              </li>
              <li>
                <Link href="/creative" className="hover:text-[#e8500a] transition-colors duration-200">
                  Creative
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#e8500a] transition-colors duration-200">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-[#e8500a] transition-colors duration-200">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Option Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider">Subscribe</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Subscribe to our newsletter for insights and regular updates from our network.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex items-center relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-[#e8500a] text-white rounded-full px-5 py-3 pr-12 text-sm focus:outline-none transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1.5 p-2 rounded-full bg-[#e8500a] hover:bg-[#ff6221] text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {status === "success" && (
                <p className="text-xs text-green-500 mt-1.5">{message}</p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-500 mt-1.5">{message}</p>
              )}
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-10" />

        {/* Affiliation / Disclaimer Box */}
        

        {/* Bottom copyright and legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Paper Theory Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#e8500a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#e8500a] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#e8500a] transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

