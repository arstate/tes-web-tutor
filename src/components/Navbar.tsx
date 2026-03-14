import { motion } from "motion/react";
import { Moon, Sun, Camera } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.02)]">
        
        <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-display font-bold text-xl tracking-tight">
          <Camera className="w-6 h-6 text-electric-blue" />
          <span>LENS<span className="text-neon-pink">&</span>LIGHT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {['Home', 'Work', 'Services'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-neon-pink dark:hover:text-electric-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-colors backdrop-blur-md"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-acid-green" />
          ) : (
            <Moon className="w-5 h-5 text-sunset-orange" />
          )}
        </button>

      </div>
    </motion.nav>
  );
}
