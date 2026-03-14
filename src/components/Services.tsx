import { motion } from "motion/react";
import { Camera, Video, Sparkles } from "lucide-react";

const services = [
  {
    title: "Wedding Cinema",
    description: "Cinematic storytelling of your special day, capturing every tear, laugh, and dance move with Hollywood-grade equipment.",
    icon: <Camera className="w-8 h-8" />,
    color: "from-neon-pink to-sunset-orange"
  },
  {
    title: "Concert Coverage",
    description: "High-energy, dynamic shots that make you feel the bass. We thrive in low-light, fast-paced environments.",
    icon: <Video className="w-8 h-8" />,
    color: "from-electric-blue to-acid-green"
  },
  {
    title: "Event Photography",
    description: "From corporate galas to intimate graduations, we document the essence of your gatherings with a modern editorial style.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-sunset-orange to-electric-blue"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            OUR EXPERTISE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Specialized in capturing high-end visuals across diverse environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-xl overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glowing background effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
