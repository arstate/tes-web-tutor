import { motion } from "motion/react";
import { Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 text-white pt-32 pb-12 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] mt-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-blue/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-none mb-8"
          >
            LET'S CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-electric-blue">MAGIC</span>
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-10 py-5 bg-white text-zinc-900 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
          >
            Start a Project
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-t border-white/10 pt-12">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight mb-6">
              <span>LENS<span className="text-neon-pink">&</span>LIGHT</span>
            </div>
            <p className="text-zinc-400 max-w-sm">
              Capturing life's most beautiful moments with a modern, cinematic approach. Based in Los Angeles, available worldwide.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-4">
              {[Instagram, Twitter, Mail].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Lens & Light. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
