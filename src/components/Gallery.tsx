"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBeer,
  FaMusic,
  FaTableTennis,
  FaDice,
  FaGlassCheers,
  FaGamepad,
} from "react-icons/fa";

const galleryItems = [
  {
    icon: FaBeer,
    title: "The Bar",
    desc: "Neatly framed beer signs, a carefully arranged backbar, and stools worn in by the best regulars in Bay City.",
    span: "col-span-1 sm:col-span-2 row-span-1",
    gradient: "from-amber/15 via-amber/5 to-transparent",
  },
  {
    icon: FaMusic,
    title: "Live Stage",
    desc: "Local bands and solo artists bring the corner to life every Wednesday and Saturday night.",
    span: "col-span-1 row-span-1",
    gradient: "from-amber/10 to-transparent",
  },
  {
    icon: FaTableTennis,
    title: "Pool Table",
    desc: "The pool table gets competitive. Free pool on select nights.",
    span: "col-span-1 row-span-1",
    gradient: "from-amber/10 to-transparent",
  },
  {
    icon: FaDice,
    title: "Shuffleboard",
    desc: "Our legendary shuffleboard table has a slight lean. We call it a feature, not a bug.",
    span: "col-span-1 row-span-1",
    gradient: "from-amber/12 to-transparent",
  },
  {
    icon: FaGlassCheers,
    title: "The Crowd",
    desc: "Jeopardy watchers by day, craft beer crowd by night. All welcome, all the time.",
    span: "col-span-1 row-span-1",
    gradient: "from-amber/10 to-transparent",
  },
  {
    icon: FaGamepad,
    title: "Darts & Games",
    desc: "Dartboard on the wall, games on the TV. There's always something to play.",
    span: "col-span-1 sm:col-span-2 row-span-1",
    gradient: "from-amber/15 via-amber/5 to-transparent",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
            Inside Chet&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            The Corner <span className="text-amber">Experience</span>
          </h2>
          <p className="text-cream/55 max-w-xl mx-auto">
            It might look like a hole in the wall from outside, but step through the door
            and you&apos;ll find the best-kept secret in Bay City&apos;s South End.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} group relative bg-card border border-border rounded-xl p-8 hover:border-amber/30 transition-all duration-300 overflow-hidden min-h-[200px] flex flex-col justify-end`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <item.icon className="w-10 h-10 text-amber/60 mb-4 group-hover:text-amber group-hover:scale-110 transition-all" />
                <h3 className="text-cream font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
