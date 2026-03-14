import { useState } from "react";
import { motion } from "motion/react";
import ImagePreview from "./ImagePreview";

const works = [
  {
    id: 1,
    title: "Neon Nights Festival",
    category: "Concert",
    image: "https://github.com/user-attachments/assets/4bcc8441-2678-41cc-9482-6790720ea127",
    className: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Sarah & James",
    category: "Wedding",
    image: "https://github.com/user-attachments/assets/8b761e3a-0990-4c26-89a2-f9e83469eb09",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title: "Class of '24",
    category: "Graduation",
    image: "https://github.com/user-attachments/assets/b90236d6-e003-46c8-810d-899f8a824795",
    className: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Tech Summit 2025",
    category: "Corporate",
    image: "https://github.com/user-attachments/assets/cf6750ca-e465-4e44-98d9-4a372b56953c",
    className: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 5,
    title: "Golden Hour Elopement",
    category: "Wedding",
    image: "https://github.com/user-attachments/assets/ef2f1bf3-1e9e-4f46-af6b-4621ac7c006b",
    className: "col-span-1 row-span-1"
  },
  {
    id: 6,
    title: "Summer Vibes Party",
    category: "Event",
    image: "https://github.com/user-attachments/assets/8473af8d-4f78-4909-bae4-6f7304dadfed",
    className: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 7,
    title: "Live at the Arena",
    category: "Concert",
    image: "https://github.com/user-attachments/assets/9db7322f-f07d-45c6-9d20-5b58ff3accd1",
    className: "col-span-1 row-span-1"
  },
  {
    id: 8,
    title: "Urban Portraits",
    category: "Portrait",
    image: "https://github.com/user-attachments/assets/53dfd87f-dbee-4e60-abaf-90c0fa56d048",
    className: "col-span-1 md:col-span-3 row-span-1"
  }
];

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="work" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold mb-4"
            >
              SELECTED WORKS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 dark:text-zinc-400"
            >
              A glimpse into our visual storytelling.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border-2 border-zinc-900 dark:border-white font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer ${work.className}`}
              onClick={() => setSelectedWork(work)}
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-3 border border-white/30">
                    {work.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white">{work.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedWork && (
        <ImagePreview 
          image={selectedWork.image}
          title={selectedWork.title}
          category={selectedWork.category}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </section>
  );
}
