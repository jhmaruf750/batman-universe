import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Member, ROASTS } from '../data/members';
import { X, ShieldAlert, Award, AlertTriangle, MessageSquareQuote, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const [currentRoast, setCurrentRoast] = useState(member.roasts[0]);

  const generateRoast = () => {
    const allRoasts = [...member.roasts, ...ROASTS];
    const random = allRoasts[Math.floor(Math.random() * allRoasts.length)];
    setCurrentRoast(random);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bc13fe', '#00d2ff']
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-batman-black/90 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl glass neon-border overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left: Image & Basic Info */}
        <div className="w-full md:w-2/5 relative">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-batman-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h2 className="text-5xl font-black tracking-tighter mb-2">{member.name}</h2>
            <p className="text-neon-blue font-mono tracking-widest uppercase text-sm">{member.nickname}</p>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Stats Section */}
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldAlert size={14} /> ব্যক্তিত্ব বিশ্লেষণ
              </h3>
              <div className="space-y-4">
                {Object.entries(member.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="capitalize">{key === 'chaos' ? 'বিশৃঙ্খলা' : key === 'rizz' ? 'রিজ' : key === 'laziness' ? 'অলসতা' : key === 'brainCells' ? 'বুদ্ধি' : key === 'drama' ? 'নাটক' : key === 'reality' ? 'বাস্তবতা' : key === 'calm' ? 'শান্ত' : key === 'food' ? 'খাবার' : key === 'strategy' ? 'কৌশল' : key === 'energy' ? 'এনার্জি' : key === 'speaker' ? 'বক্তা' : key}</span>
                      <span className="text-neon-blue">{value}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        className="h-full bg-neon-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award size={14} /> মজার পুরস্কার
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.awards.map((award, i) => (
                  <span key={i} className="px-3 py-1 glass text-[10px] font-bold rounded-full border-white/5">
                    🏆 {award}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Crime List */}
          <div className="mb-12">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
              <AlertTriangle size={14} /> অপরাধ তালিকা
            </h3>
            <div className="space-y-2">
              {member.crimes.map((crime, i) => (
                <div key={i} className="p-4 glass border-white/5 flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">
                    {i + 1}
                  </div>
                  <p className="text-sm text-white/80 italic">"{crime}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roast Generator */}
          <div className="p-6 bg-neon-purple/5 rounded-2xl border border-neon-purple/20">
            <h3 className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-4 flex items-center gap-2">
              <MessageSquareQuote size={14} /> রোস্ট চেম্বার
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoast}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-xl font-medium italic mb-6 text-white/90"
              >
                "{currentRoast}"
              </motion.p>
            </AnimatePresence>
            <button
              onClick={generateRoast}
              className="flex items-center gap-2 px-6 py-2 bg-neon-purple text-white rounded-full text-xs font-bold hover:bg-neon-purple/80 transition-colors"
            >
              <RefreshCw size={14} /> এলোমেলো রোস্ট বাটন
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
