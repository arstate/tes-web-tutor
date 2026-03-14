import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ImagePreviewProps {
  image: string;
  title: string;
  category: string;
  onClose: () => void;
}

export default function ImagePreview({ image, title, category, onClose }: ImagePreviewProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={onClose}
        >
          <X className="w-8 h-8" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />
          <div className="mt-6 text-center text-white">
            <span className="text-electric-blue font-medium tracking-widest uppercase text-sm">{category}</span>
            <h2 className="text-4xl font-display font-bold mt-2">{title}</h2>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
