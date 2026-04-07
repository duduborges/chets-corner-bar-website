"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBeer, FaMusic, FaUsers, FaHistory } from "react-icons/fa";

const highlights = [
  {
    icon: FaHistory,
    title: "Est. 2013",
    desc: "A historic corner since 1893, reborn as Chet's by Matt Czerwinski in honor of his father.",
  },
  {
    icon: FaBeer,
    title: "Coldest Pours",
    desc: "Draft beers, craft bottles & cocktails at prices that keep regulars coming back every day.",
  },
  {
    icon: FaMusic,
    title: "Live Entertainment",
    desc: "Live music Wednesdays & Saturdays, karaoke Thursdays, trivia nights & more.",
  },
  {
    icon: FaUsers,
    title: "Your Neighborhood",
    desc: "From morning beers to last call, a place where everybody knows your name.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-6 leading-tight">
              More Than a Bar.
              <br />
              <span className="text-amber">A Family Legacy.</span>
            </h2>
            <div className="space-y-4 text-cream/65 text-base leading-relaxed">
              <p>
                The corner of Madison and 10th in Bay City&apos;s South End has poured
                drinks since 1893. Through six different names and over a century of
                history, it&apos;s always been the neighborhood&apos;s gathering place.
              </p>
              <p>
                In 2013, Matt Czerwinski gave it new life and a name that matters:
                <span className="text-cream/90 font-medium"> Chet&apos;s</span>,
                after his late father Michael &quot;Chet&quot; Czerwinski. With no bartending
                experience but all the heart in the world, Matt built something
                special. As he puts it:
              </p>
              <blockquote className="border-l-2 border-amber/40 pl-4 italic text-cream/75">
                &quot;I&apos;m getting better every day. The patrons make me successful.&quot;
              </blockquote>
              <p>
                Today, with Uncle Tom behind the bar and a loyal crew of regulars, Chet&apos;s
                Corner Bar is everything a neighborhood bar should be: affordable,
                friendly, and always a good time.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-amber/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-amber mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-cream font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
