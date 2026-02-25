import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Unlock, Zap, Ghost, Skull, Users, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SecretUniverse({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (password.toLowerCase() === "batman") {
      setIsUnlocked(true);
      setError(false);
      confetti({
        particleCount: 200,
        spread: 120,
        colors: ['#bc13fe', '#00d2ff', '#ff0000']
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-batman-black/95 backdrop-blur-2xl" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.8, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.8, rotateY: -90 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-2xl glass neon-border p-12 text-center"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white">
          <X size={24} />
        </button>

        {!isUnlocked ? (
          <div className="space-y-8">
            <div className="w-20 h-20 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={40} className="text-neon-purple" />
            </div>
            <h2 className="text-4xl font-black tracking-tighter">সংরক্ষিত এলাকা</h2>
            <p className="text-white/50 text-sm">ভেতরের মহলের অন্ধকার রহস্য উন্মোচন করতে গোপন পাসওয়ার্ড দিন।</p>
            
            <div className="relative max-w-xs mx-auto">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="পাসওয়ার্ড দিন..."
                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 outline-none focus:border-neon-purple transition-all text-center font-mono`}
                onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              />
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest"
                >
                  অ্যাক্সেস ডিনাইড। "batman" ট্রাই করুন
                </motion.p>
              )}
            </div>

            <button
              onClick={handleUnlock}
              className="px-12 py-4 bg-neon-purple text-white font-black rounded-full hover:bg-neon-purple/80 transition-colors"
            >
              রহস্য উন্মোচন করুন
            </button>
          </div>
        ) : (
       <div className="space-y-8">
  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
    <Unlock size={40} className="text-green-500" />
  </div>
  <h2 className="text-4xl font-black tracking-tighter neon-text">গোপন ব্যাটকেভে স্বাগতম 🦇</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
    
    <SecretItem 
      icon={<Zap size={16} />} 
      title="অভিমান ফাইল" 
      desc="বারিউল ৭ মিনিট রাগ করে ছিল শুধু 'হুম' রিপ্লাই দেওয়ার জন্য। ঘটনাটি এখনো তদন্তাধীন।" 
    />

    <SecretItem 
      icon={<Ghost size={16} />} 
      title="ফোন রহস্য" 
      desc="তনয়কে ফোন দিলে 'নেটওয়ার্কের বাইরে' পাওয়া যায়, কিন্তু অনলাইনে সক্রিয় থাকে।" 
    />

    <SecretItem 
      icon={<Skull size={16} />} 
      title="ট্রিট কেলেঙ্কারি" 
      desc="আরাফাতের পকেটে টাকা থাকলেও সে নিজেকে আর্থিকভাবে বিপর্যস্ত ঘোষণা করে।" 
    />

    <SecretItem 
      icon={<Lock size={16} />} 
      title="গোপন পরিসংখ্যান" 
      desc="আতিফের চেকা খাওয়ার সংখ্যা এখন অফিসিয়ালি ৩+। নিশ্চিত নয়, সে নিজেও গুনে হারিয়ে ফেলেছে।" 
    />

    <SecretItem 
      icon={<Users size={16} />} 
      title="ভদ্রতার কিংবদন্তি" 
      desc="মারুফ এখনো গ্রুপের একমাত্র সদস্য যে সত্যিকারের ট্রিট দিতে ভয় পায় না।" 
    />

    <SecretItem 
      icon={<MessageSquare size={16} />} 
      title="ভাইব রিপোর্ট" 
      desc="নাহিদ আড্ডায় ১০ মিনিট না থাকলে পরিবেশ ৪০% কম এনার্জেটিক হয়ে যায়।" 
    />

  </div>

  <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] pt-8">
    ব্যাটম্যান গোপন নথি – বাইরে ফাঁস করলে ট্রিট দিতে হবে।
  </p>
</div>
        )}
      </motion.div>
    </motion.div>
  );
}

function SecretItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-4 glass border-white/5 rounded-xl">
      <div className="flex items-center gap-2 text-neon-blue mb-2">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
      </div>
      <p className="text-sm text-white/60 italic">"{desc}"</p>
    </div>
  );
}
