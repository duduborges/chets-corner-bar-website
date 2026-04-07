"use client";

import { FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber font-bold text-xl tracking-tight">
                CHET&apos;S
              </span>
              <span className="text-cream/40 text-xs tracking-widest uppercase">
                Corner Bar
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Named after a father, built for the neighborhood. Bay City&apos;s South End
              since 2013.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4">Hours</h4>
            <div className="space-y-2 text-cream/50 text-sm">
              <p>Mon - Sat: 9AM - 2AM</p>
              <p>Sunday: 12PM - 2AM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+19894391539"
                className="flex items-center gap-2 text-cream/50 text-sm hover:text-amber transition-colors"
              >
                <FaPhone className="w-3 h-3" />
                (989) 439-1539
              </a>
              <div className="flex items-start gap-2 text-cream/50 text-sm">
                <FaMapMarkerAlt className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>
                  1001 S Madison Ave
                  <br />
                  Bay City, MI 48708
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4">Follow Us</h4>
            <a
              href="https://www.facebook.com/chetscornerbar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/50 text-sm hover:text-amber transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs">
            &copy; {new Date().getFullYear()} Chet&apos;s Corner Bar. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Bay City, Michigan
          </p>
        </div>
      </div>
    </footer>
  );
}
