import { motion } from "motion/react";

const services = [
  "Wedding",
  "Concerts",
  "Graduations",
  "Corporate Events",
  "Gatherings",
  "Music Videos",
  "Commercials"
];

export default function Marquee() {
  return (
    <div className="py-12 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 overflow-hidden relative shadow-2xl z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
                {service}
              </span>
              <span className="text-acid-green dark:text-neon-pink text-4xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
