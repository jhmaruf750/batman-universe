import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import Members from './sections/Members';
import MemberModal from './components/MemberModal';
import GameZone from './sections/GameZone';
import MemoryVault from './sections/MemoryVault';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import SecretUniverse from './components/SecretUniverse';
import { Member } from './data/members';
import { ShieldAlert } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CursorGlow />
          
          <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-batman-black/50 backdrop-blur-md border-b border-white/5">
            <div className="text-2xl font-black tracking-tighter neon-text">BATMAN</div>
            <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase text-white/60">
              <a href="#members" className="hover:text-white transition-colors">স্কোয়াড</a>
              <a href="#games" className="hover:text-white transition-colors">গেম জোন</a>
              <a href="#vault" className="hover:text-white transition-colors">স্মৃতি ভল্ট</a>
              <a href="#police" className="hover:text-white transition-colors">পুলিশ</a>
            </div>
            <button 
              onClick={() => setShowSecret(true)}
              className="px-4 py-2 glass border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              গোপন ইউনিভার্স
            </button>
          </nav>

          <main>
            <Hero />
            <Members onSelectMember={setSelectedMember} />
            <GameZone />
            <MemoryVault />
            
            {/* Friendship Police Section */}
            <section id="police" className="py-24 px-4 bg-gradient-to-b from-batman-black to-batman-purple/20">
              <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
                  <ShieldAlert size={12} /> সংরক্ষিত অ্যাক্সেস
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">বন্ধুত্ব পুলিশ</h2>
                <div className="p-12 glass border-red-500/20 rounded-[40px] max-w-3xl mx-auto relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
                  <p className="text-xl text-white/60 mb-8 font-light italic">
                    "BATMAN-এর প্রত্যেক সদস্যের একটি অপরাধমূলক রেকর্ড আছে। কেউ নির্দোষ নয়। কেউ নিরাপদ নয়।"
                  </p>
                  <button 
                    onClick={() => setShowSecret(true)}
                    className="px-10 py-4 bg-red-600 text-white font-black rounded-full hover:bg-red-500 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                  >
                    সম্পূর্ণ ডাটাবেস দেখুন
                  </button>
                </div>
              </div>
            </section>
          </main>

          <Footer />

          <AnimatePresence>
            {selectedMember && (
              <MemberModal 
                member={selectedMember} 
                onClose={() => setSelectedMember(null)} 
              />
            )}
            {showSecret && (
              <SecretUniverse onClose={() => setShowSecret(false)} />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
