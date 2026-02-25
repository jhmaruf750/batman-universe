import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, RotateCcw, Trophy, Users, Zap, MessageSquare } from 'lucide-react';
import { MEMBERS, ROASTS } from '../data/members';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

export default function GameZone() {
  const [activeGame, setActiveGame] = useState<'roast' | 'likely' | 'wheel' | 'quiz'>('roast');

  return (
    <section id="games" className="py-24 px-4 bg-batman-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 glass rounded-full text-[10px] font-bold tracking-widest text-neon-blue uppercase mb-4">
            <Gamepad2 size={12} /> ইন্টারেক্টিভ এরিনা
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">গেম জোন</h2>
          <p className="text-white/50">যেখানে বন্ধুত্ব শেষ হয় (হাস্যকরভাবে)।</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <GameTab active={activeGame === 'roast'} onClick={() => setActiveGame('roast')} icon={<MessageSquare size={16} />} label="এলোমেলো রোস্ট মেশিন 💀" />
          <GameTab active={activeGame === 'likely'} onClick={() => setActiveGame('likely')} icon={<Users size={16} />} label="সবচেয়ে বেশি কে এমন করবে?" />
          <GameTab active={activeGame === 'wheel'} onClick={() => setActiveGame('wheel')} icon={<RotateCcw size={16} />} label="চ্যালেঞ্জ চাকা ঘোরাও 🎯" />
          <GameTab active={activeGame === 'quiz'} onClick={() => setActiveGame('quiz')} icon={<Trophy size={16} />} label="কে কাকে বেশি চেনে?" />
        </div>

        <div className="glass neon-border p-8 min-h-[400px] flex items-center justify-center">
          {activeGame === 'roast' && <RoastGenerator />}
          {activeGame === 'likely' && <MostLikelyTo />}
          {activeGame === 'wheel' && <SpinWheel />}
          {activeGame === 'quiz' && <FriendshipQuiz />}
        </div>
      </div>
    </section>
  );
}

function GameTab({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
        active 
          ? 'bg-white text-batman-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
          : 'glass text-white/60 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function RoastGenerator() {
  const [targetName, setTargetName] = useState(MEMBERS[0].name);
  const [intensity, setIntensity] = useState<'mild' | 'savage'>('mild');
  const [roast, setRoast] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastRoast, setLastRoast] = useState("");
  const [roastCount, setRoastCount] = useState(0);

  const emojis = ["😈", "💀", "😂", "🔥", "😭", "🤖", "🦇"];
  const endings = [
    "এখন গিয়ে মুখ লুকান।",
    "ব্যাটম্যানও আপনাকে বাঁচাতে পারবে না।",
    "সবার সামনে মান-সম্মান শেষ!"
  ];

  const generate = () => {
    setIsTyping(true);
    setRoast("");
    
    const member = MEMBERS.find(m => m.name === targetName);
    if (!member) return;

    let possibleRoasts = [...member.roasts];
    // Filter out last roast to avoid consecutive repeats
    if (possibleRoasts.length > 1) {
      possibleRoasts = possibleRoasts.filter(r => r !== lastRoast);
    }

    const baseRoast = possibleRoasts[Math.floor(Math.random() * possibleRoasts.length)];
    setLastRoast(baseRoast);

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
    
    let finalRoast = baseRoast;
    if (intensity === 'savage') {
      finalRoast = `${baseRoast} ${randomEmoji} ${randomEnding}`;
    }

    // Simulate typing delay
    setTimeout(() => {
      setRoast(finalRoast);
      setRoastCount(prev => prev + 1);
      setIsTyping(false);
      confetti({
        particleCount: intensity === 'savage' ? 100 : 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: intensity === 'savage' ? ['#bc13fe', '#ff0000'] : ['#00d2ff', '#ffffff']
      });
    }, 1200);
  };

  return (
    <div className="text-center max-w-xl w-full">
      <h3 className="text-2xl font-bold mb-6">এআই রোস্ট অ্যানালাইজার 🤖</h3>
      
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex gap-4">
          <select 
            value={targetName}
            onChange={(e) => setTargetName(e.target.value)}
            className="flex-1 bg-batman-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all text-white font-sans font-semibold cursor-pointer hover:border-neon-purple/50"
          >
            {MEMBERS.map(m => (
              <option key={m.id} value={m.name} className="bg-batman-black text-white">
                {m.name}
              </option>
            ))}
          </select>

          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setIntensity('mild')}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                intensity === 'mild' ? "bg-neon-blue text-batman-black shadow-[0_0_10px_rgba(0,210,255,0.5)]" : "text-white/40 hover:text-white"
              )}
            >
              MILD
            </button>
            <button 
              onClick={() => setIntensity('savage')}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                intensity === 'savage' ? "bg-neon-purple text-white shadow-[0_0_10px_rgba(188,19,254,0.5)]" : "text-white/40 hover:text-white"
              )}
            >
              SAVAGE
            </button>
          </div>
        </div>

        <button 
          onClick={generate}
          disabled={isTyping}
          className={cn(
            "w-full py-4 rounded-xl font-black text-lg tracking-widest transition-all transform active:scale-95",
            intensity === 'savage' 
              ? "bg-gradient-to-r from-neon-purple to-red-600 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]" 
              : "bg-gradient-to-r from-neon-blue to-indigo-600 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]",
            isTyping && "opacity-50 cursor-not-allowed"
          )}
        >
          {isTyping ? "অ্যানালাইজ করা হচ্ছে..." : "রোস্ট করো 💀"}
        </button>
      </div>

      <div className="min-h-[160px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isTyping ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-2"
            >
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </motion.div>
          ) : roast ? (
            <motion.div
              key={roast}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={cn(
                "p-8 glass border-2 w-full relative overflow-hidden",
                intensity === 'savage' ? "bg-neon-purple/10 border-neon-purple/30 shadow-[0_0_20px_rgba(188,19,254,0.2)]" : "bg-neon-blue/10 border-neon-blue/30 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
              )}
            >
              {/* Animated Glow Border Effect */}
              <div className={cn(
                "absolute inset-0 opacity-20 animate-pulse",
                intensity === 'savage' ? "bg-gradient-to-r from-neon-purple via-transparent to-neon-purple" : "bg-gradient-to-r from-neon-blue via-transparent to-neon-blue"
              )} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
                    Roast #{roastCount}
                  </span>
                  <Zap size={12} className={intensity === 'savage' ? "text-neon-purple" : "text-neon-blue"} />
                </div>
                <p className="text-2xl font-bold leading-relaxed">
                  <span className={intensity === 'savage' ? "text-neon-purple" : "text-neon-blue"}>{targetName}</span>, {roast}
                </p>
              </div>
            </motion.div>
          ) : (
            <p className="text-white/20 italic">রোস্ট করার জন্য বাটনটি চাপুন...</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MostLikelyTo() {
  const quizQuestions = [
    { question: "কথায় কথায় সবচেয়ে বেশি অভিমান করে কে?", correctAnswer: "বারিউল" },
    { question: "টাকা থাকলেও 'টাকা নাই' বলে সবচেয়ে বেশি কে?", correctAnswer: "আরাফাত" },
    { question: "মেয়েদের সাথে সবচেয়ে বেশি গল্প করে কে?", correctAnswer: "আরাফাত" },
    { question: "ফোন দিলে সবচেয়ে বেশি পাওয়া যায় না কে?", correctAnswer: "তনয়" },
    { question: "খামখেয়ালি সিদ্ধান্ত নেওয়ার জন্য পরিচিত কে?", correctAnswer: "তনয়" },
    { question: "সবার আগে ট্রিট দেয় কে?", correctAnswer: "মারুফ" },
    { question: "সবচেয়ে ভদ্র এবং শান্ত স্বভাবের কে?", correctAnswer: "মারুফ" },
    { question: "একটু লুচু টাইপ আচরণ করে কে?", correctAnswer: "নাহিদ" },
    { question: "মনটা ভালো কিন্তু বাইরে একটু দুষ্টু কে?", correctAnswer: "নাহিদ" },
    { question: "সবচেয়ে বেশি কিপ্টামি করে কে?", correctAnswer: "আতিফ" },
    { question: "বারবার চেকা খাওয়ার রেকর্ড কার?", correctAnswer: "আতিফ" },
    { question: "রাগ করে কিন্তু পরে নিজেই ঠিক হয়ে যায় কে?", correctAnswer: "বারিউল" },
    { question: "অভিনয় করে পরিস্থিতি সামলাতে পারে কে?", correctAnswer: "আরাফাত" },
    { question: "নিজেকে নেতা ভাবতে ভালোবাসে কে?", correctAnswer: "তনয়" },
    { question: "গ্রুপে সবচেয়ে dependable মানুষ কে?", correctAnswer: "মারুফ" },
    { question: "সবচেয়ে বেশি নাটকীয় রিঅ্যাক্ট করে কে?", correctAnswer: "বারিউল" },
    { question: "ট্রিট এড়ানোর নতুন অজুহাত বানাতে পারে কে?", correctAnswer: "আরাফাত" },
    { question: "সবচেয়ে আলাদা টাইপ চিন্তা করে কে?", correctAnswer: "আতিফ" },
    { question: "আড্ডায় ভাইব সবচেয়ে বেশি কে তৈরি করে?", correctAnswer: "নাহিদ" },
    { question: "গ্রুপে সবচেয়ে unpredictable কে?", correctAnswer: "তনয়" }
  ];

  const [currentQIndex, setCurrentQIndex] = useState(() => Math.floor(Math.random() * quizQuestions.length));
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });
  const [isLocked, setIsLocked] = useState(false);

  const handleAnswer = (selectedName: string) => {
    if (isLocked) return;
    
    const currentQ = quizQuestions[currentQIndex];
    const isCorrect = selectedName === currentQ.correctAnswer;
    setIsLocked(true);

    if (isCorrect) {
      setFeedback({ type: 'success', message: "সঠিক উত্তর! 🔥" });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bc13fe', '#00d2ff', '#00ff00']
      });
      // Play soft success sound simulation (visual feedback is primary)
    } else {
      setFeedback({ type: 'error', message: `ভুল উত্তর 😈 সঠিক উত্তর ছিল: ${currentQ.correctAnswer}` });
    }

    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * quizQuestions.length);
      } while (nextIndex === currentQIndex);
      
      setCurrentQIndex(nextIndex);
      setFeedback({ type: null, message: "" });
      setIsLocked(false);
    }, 3000);
  };

  return (
    <div className="text-center w-full max-w-2xl">
      <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
        <Users className="text-neon-blue" size={24} /> Who Is Most Likely To?
      </h3>
      
      <motion.div 
        key={currentQIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "p-8 glass mb-8 transition-all duration-500 border-2",
          feedback.type === 'success' ? "border-green-500/50 bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.2)]" : 
          feedback.type === 'error' ? "border-red-500/50 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-shake" : 
          "border-white/10"
        )}
      >
        <p className="text-2xl font-bold text-white leading-relaxed">
          {quizQuestions[currentQIndex].question}
        </p>
        
        {feedback.message && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
              "mt-4 font-bold text-lg",
              feedback.type === 'success' ? "text-green-400" : "text-red-400"
            )}
          >
            {feedback.message}
          </motion.div>
        )}
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {MEMBERS.map(m => (
          <button 
            key={m.id}
            disabled={isLocked}
            onClick={() => handleAnswer(m.name)}
            className={cn(
              "p-5 glass transition-all rounded-2xl text-lg font-bold border border-white/5",
              !isLocked && "hover:bg-white/10 hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] active:scale-95",
              isLocked && m.name === quizQuestions[currentQIndex].correctAnswer && "bg-green-500/20 border-green-500/50 text-green-400",
              isLocked && feedback.type === 'error' && m.name !== quizQuestions[currentQIndex].correctAnswer && "opacity-50"
            )}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      setSpinning(false);
      setResult(MEMBERS[Math.floor(Math.random() * MEMBERS.length)].name);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
    }, 2000);
  };

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-8">চ্যালেঞ্জ চাকা ঘোরাও 🎯</h3>
      <div className="relative w-48 h-48 mx-auto mb-8">
        <motion.div
          animate={spinning ? { rotate: 3600 } : { rotate: 0 }}
          transition={{ duration: 2, ease: "circOut" }}
          className="w-full h-full rounded-full border-4 border-white/20 border-t-neon-blue flex items-center justify-center"
        >
          <Zap size={48} className="text-neon-blue" />
        </motion.div>
      </div>
      <button 
        disabled={spinning}
        onClick={spin}
        className="px-12 py-4 bg-white text-batman-black font-black rounded-full hover:scale-105 transition-transform disabled:opacity-50"
      >
        {spinning ? "ঘুরছে..." : "চাকা ঘোরাও"}
      </button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-3xl font-black neon-text"
        >
          নির্বাচিত: {result}
        </motion.div>
      )}
    </div>
  );
}

function FriendshipQuiz() {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">কে কাকে বেশি চেনে? 🧠</h3>
      <p className="text-white/50 mb-8">আপনার ইগো ধ্বংস করতে শীঘ্রই আসছে।</p>
      <div className="flex justify-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center animate-bounce">
          <Trophy size={24} className="text-yellow-500" />
        </div>
      </div>
    </div>
  );
}
