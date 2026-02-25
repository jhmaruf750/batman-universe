import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-batman-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="text-8xl font-black tracking-tighter neon-text">
          BATMAN
        </div>
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-4 bg-neon-purple/20 blur-3xl rounded-full -z-10"
        />
      </motion.div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 font-mono text-xs tracking-widest text-white/50 uppercase"
      >
        বিশৃঙ্খলার প্রস্তুতি চলছে... {progress}%
      </motion.div>

      <div className="absolute bottom-10 text-[10px] text-white/20 font-mono">
        স্থাপিত ২০২৬ // রোস্টের কিংবদন্তিরা
      </div>
    </motion.div>
  );
}
