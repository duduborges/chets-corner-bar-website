"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook } from "react-icons/fa";

const reviews = [
  {
    text: "Every time I go to Chet's Corner Bar there's always something fun going on. It's always a fun time. Great service.",
    author: "Regular Customer",
    platform: "Google",
    icon: FaGoogle,
    stars: 5,
  },
  {
    text: "Hidden gem in Bay City. Looks like a hole in the wall from outside but it's really well-kept inside. Cheap drinks and friendly staff.",
    author: "First-time Visitor",
    platform: "Google",
    icon: FaGoogle,
    stars: 5,
  },
  {
    text: "Best neighborhood bar in the South End. The staff is incredibly friendly and the prices are unbeatable. You can't find cheaper drinks anywhere.",
    author: "Local Regular",
    platform: "Facebook",
    icon: FaFacebook,
    stars: 5,
  },
  {
    text: "Great little dive bar. Karaoke on Thursday is a blast. The bartenders are friendly and remember your drink. Love this place.",
    author: "Karaoke Regular",
    platform: "Google",
    icon: FaGoogle,
    stars: 4,
  },
  {
    text: "Laid-back atmosphere, cold beer, and good people. Chet's is what every neighborhood bar should be. No pretension, just good times.",
    author: "Bay City Local",
    platform: "Facebook",
    icon: FaFacebook,
    stars: 5,
  },
  {
    text: "Love the live music nights. Great way to spend a Wednesday or Saturday. The crowd is always friendly and the drinks are always cold.",
    author: "Music Lover",
    platform: "Google",
    icon: FaGoogle,
    stars: 5,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
            What People Say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            1,000+ Reviews <span className="text-amber">Can&apos;t Be Wrong</span>
          </h2>
          <p className="text-cream/55 max-w-xl mx-auto">
            With a 4.4-star Google rating and 94% recommendation rate on Facebook,
            the people of Bay City have spoken.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-amber/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <FaQuoteLeft className="w-6 h-6 text-amber/20" />
                <div className="flex items-center gap-1.5">
                  <review.icon className="w-3.5 h-3.5 text-cream/30" />
                  <span className="text-cream/30 text-xs">{review.platform}</span>
                </div>
              </div>
              <p className="text-cream/70 text-sm leading-relaxed mb-5 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-xs font-medium">{review.author}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className={`w-3 h-3 ${
                        j < review.stars ? "text-amber" : "text-cream/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
