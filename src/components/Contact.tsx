"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaFacebook,
  FaDirections,
  FaWheelchair,
  FaCreditCard,
} from "react-icons/fa";

const hours = [
  { days: "Monday - Saturday", time: "9:00 AM - 2:00 AM" },
  { days: "Sunday", time: "12:00 PM - 2:00 AM" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase font-medium">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            Your Corner <span className="text-amber">Awaits</span>
          </h2>
          <p className="text-cream/55 max-w-xl mx-auto">
            On the corner of Madison and 10th in Bay City&apos;s South End.
            Pull up a stool, we&apos;ll pour you a cold one.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Address</h3>
                  <p className="text-cream/60 text-sm">1001 S Madison Ave</p>
                  <p className="text-cream/60 text-sm">Bay City, MI 48708</p>
                  <a
                    href="https://www.google.com/maps/dir//Chet's+Corner+Bar,+1001+S+Madison+Ave,+Bay+City,+MI+48708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber text-sm mt-2 hover:text-amber-light transition-colors"
                  >
                    <FaDirections className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+19894391539"
                    className="text-cream/60 text-sm hover:text-amber transition-colors"
                  >
                    (989) 439-1539
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-4 h-4 text-amber" />
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-semibold mb-3">Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm">
                        <span className="text-cream/60">{h.days}</span>
                        <span className="text-cream/80 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5">
                <FaWheelchair className="w-3.5 h-3.5 text-amber/60" />
                <span className="text-cream/60 text-sm">Wheelchair Accessible</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5">
                <FaCreditCard className="w-3.5 h-3.5 text-amber/60" />
                <span className="text-cream/60 text-sm">Cards Accepted</span>
              </div>
              <a
                href="https://www.facebook.com/chetscornerbar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 hover:border-amber/30 transition-all"
              >
                <FaFacebook className="w-3.5 h-3.5 text-amber/60" />
                <span className="text-cream/60 text-sm">Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-xl overflow-hidden min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.5!2d-83.8876!3d43.5812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8823e1036cdce20b%3A0x899e380a2d6f4e99!2sChet&#39;s%20Corner%20Bar!5e0!3m2!1sen!2sus!4f13.1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, filter: "invert(90%) hue-rotate(180deg) brightness(1.1) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chet's Corner Bar location on Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
