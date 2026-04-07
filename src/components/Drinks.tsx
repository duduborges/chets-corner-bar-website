"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBeer, FaWineBottle, FaCocktail, FaTag } from "react-icons/fa";

const drinkCategories = [
  {
    icon: FaBeer,
    title: "Draft Beers",
    items: [
      { name: "Bud / Bud Light", detail: "Shell & Pint" },
      { name: "Killian's Irish Red", detail: "Shell & Pint" },
      { name: "Redd's Apple Ale", detail: "Shell & Pint" },
      { name: "Rotating Craft Tap", detail: "Ask your bartender" },
    ],
  },
  {
    icon: FaWineBottle,
    title: "Bottles & Cans",
    items: [
      { name: "Hamm's", detail: "The best deal in town" },
      { name: "Domestic Cans", detail: "Wide selection" },
      { name: "Craft Bottles", detail: "Rotating selection" },
      { name: "Import Bottles", detail: "Ask for availability" },
    ],
  },
  {
    icon: FaCocktail,
    title: "Mixed Drinks",
    items: [
      { name: "Manhattan", detail: "Classic cocktail" },
      { name: "Whiskey Sour", detail: "Well or premium" },
      { name: "Rum & Coke", detail: "A staple" },
      { name: "House Specials", detail: "Ask the bartender" },
    ],
  },
];

export default function Drinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="drinks" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
            What We Pour
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            Cold Drinks, <span className="text-amber">Honest Prices</span>
          </h2>
          <p className="text-cream/55 max-w-xl mx-auto">
            No $18 cocktails here. Just cold beers, strong pours, and prices that let you
            stay all night without checking your wallet.
          </p>
        </motion.div>

        {/* Price callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-amber/10 via-amber/5 to-amber/10 border border-amber/20 rounded-xl p-6 text-center"
        >
          <FaTag className="w-5 h-5 text-amber mx-auto mb-3" />
          <p className="text-cream/80 text-lg font-medium">
            &quot;Maybe the cheapest bar beer in town&quot;
          </p>
          <p className="text-cream/50 text-sm mt-1">
            Prices go up just 25 cents after 6 PM. That&apos;s our version of &quot;happy hour ending.&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {drinkCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-amber/30 transition-all"
            >
              <div className="p-6 border-b border-border">
                <cat.icon className="w-8 h-8 text-amber mb-3" />
                <h3 className="text-cream font-semibold text-xl">{cat.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline gap-2">
                    <span className="text-cream/80 font-medium text-sm">{item.name}</span>
                    <span className="text-cream/40 text-xs flex-shrink-0">{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-cream/35 text-sm mt-8"
        >
          No kitchen, but you&apos;re welcome to order delivery from local restaurants right to the bar.
        </motion.p>
      </div>
    </section>
  );
}
