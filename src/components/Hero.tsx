import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F9FA] dark:to-[#0A0A0A] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop" 
          alt="Wedding Photography" 
          className="w-full h-full object-cover opacity-40 dark:opacity-30 blur-sm scale-105"
        />
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/30 dark:bg-neon-pink/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/30 dark:bg-electric-blue/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-acid-green animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase">Available for Worldwide Booking</span>
        </motion.div>

        <motion.h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          CAPTURING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-sunset-orange to-electric-blue">
            MASTERPIECES
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Elevating events, weddings, and concerts through a cinematic lens. We don't just take photos; we freeze time.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group flex items-center gap-4 px-6 py-4 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-zinc-900 dark:text-white ml-1" />
            </div>
            <span className="font-medium">Play Showreel</span>
          </button>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div 
          className="absolute left-10 top-1/3 hidden lg:flex flex-col gap-1 p-4 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
        >
          <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-electric-blue to-acid-green">100+</span>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Weddings</span>
        </motion.div>

        <motion.div 
          className="absolute right-10 bottom-1/4 hidden lg:flex flex-col gap-1 p-4 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
        >
          <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-neon-pink to-sunset-orange">50+</span>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Concerts</span>
        </motion.div>

      </div>
    </section>
  );
}
