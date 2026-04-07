"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-black via-warm-black/95 to-warm-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.78 0.15 75 / 0.15), transparent 50%),
                              radial-gradient(circle at 80% 20%, oklch(0.65 0.18 75 / 0.1), transparent 40%)`,
          }}
        />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-amber/80 text-sm tracking-[0.3em] uppercase font-medium">
            <span className="w-8 h-[1px] bg-amber/40" />
            Bay City&apos;s South End
            <span className="w-8 h-[1px] bg-amber/40" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
        >
          <span className="text-cream">CHET&apos;S</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-amber text-lg sm:text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-8"
        >
          Corner Bar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-cream/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Named after a father. Built for the neighborhood.
          <br className="hidden sm:block" />
          Coldest drinks, loudest laughs & the best corner in Bay City since 2013.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-amber text-warm-black font-semibold text-base rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-amber/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4" />
              Get Directions
            </span>
            <div className="absolute inset-0 bg-amber-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a
            href="#events"
            className="px-8 py-4 border border-cream/20 text-cream/80 hover:text-amber hover:border-amber/40 font-medium text-base rounded-lg transition-all"
          >
            What&apos;s On This Week
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-6 text-sm text-cream/50"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-3.5 h-3.5 ${i < 4 ? "text-amber" : "text-amber/40"}`}
                />
              ))}
            </div>
            <span className="text-cream/70 font-medium">4.4</span>
            <span>on Google</span>
          </div>
          <span className="text-cream/20">|</span>
          <span>342+ Reviews</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown className="w-5 h-5 text-amber/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
