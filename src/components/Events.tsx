"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMusic, FaMicrophone, FaBrain, FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    day: "Wednesday",
    title: "Live Music Night",
    desc: "Local bands and solo artists bring the house down every Wednesday evening.",
    icon: FaMusic,
    time: "Evenings",
    accent: "from-amber/20 to-transparent",
  },
  {
    day: "Thursday",
    title: "Karaoke Night",
    desc: "Grab the mic and belt out your favorites. No judgment, just good times and cold beers.",
    icon: FaMicrophone,
    time: "Evenings",
    accent: "from-amber/15 to-transparent",
  },
  {
    day: "Thursday",
    title: "Trivia Night",
    desc: "Test your knowledge with friends. Teams welcome, bragging rights guaranteed.",
    icon: FaBrain,
    time: "Evenings",
    accent: "from-amber/10 to-transparent",
  },
  {
    day: "Saturday",
    title: "Live Music",
    desc: "End your week right with live performances and the best crowd in Bay City.",
    icon: FaMusic,
    time: "Evenings",
    accent: "from-amber/20 to-transparent",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="py-24 sm:py-32 relative"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
            Weekly Lineup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            Something Fun <span className="text-amber">Every Week</span>
          </h2>
          <p className="text-cream/55 max-w-xl mx-auto">
            There&apos;s always a reason to swing by. From live music to karaoke to trivia,
            Chet&apos;s keeps the calendar full and the good times rolling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={`${event.day}-${event.title}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-amber/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.accent}`}
              />
              <div className="flex items-center gap-2 mb-4">
                <FaCalendarAlt className="w-3 h-3 text-amber/60" />
                <span className="text-amber/80 text-xs font-medium tracking-wider uppercase">
                  {event.day}
                </span>
              </div>
              <event.icon className="w-10 h-10 text-amber/80 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-cream font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{event.desc}</p>
              <div className="mt-4 text-amber/60 text-xs font-medium">{event.time}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-cream/40 text-sm">
            Follow us on{" "}
            <a
              href="https://www.facebook.com/chetscornerbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-amber-light underline underline-offset-2 transition-colors"
            >
              Facebook
            </a>{" "}
            for this week&apos;s artists and special events.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
