import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={HERO_IMAGES[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-batman-black/60 via-batman-black/40 to-batman-black" />
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 glass border-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-white/60"
        >
          কিংবদন্তি বন্ধুদের আড্ডা
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 leading-none">
          BATMAN <br />
          <span className="neon-text">কিংবদন্তি রোস্ট ইউনিভার্স</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
          ৬ বন্ধু। সীমাহীন বিশৃঙ্খলা। <span className="italic">অসীম স্মৃতি।</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#members"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-batman-black font-bold rounded-full flex items-center gap-2 group"
          >
            রোস্ট শুরু করো 😈
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#police"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border-white/10 font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            অপরাধ তালিকা দেখুন
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
