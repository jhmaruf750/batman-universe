import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, ExternalLink, MessageSquareWarning, UserPlus } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6 neon-text">BATMAN</div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              বারিউল, আরাফাত, তনয়, মারুফ, আতিফ এবং নাহিদের কিংবদন্তি রোস্ট ইউনিভার্স।
              ভালোবাসা, নিষ্ঠুর রোস্ট এবং জিরো রিগ্রেট দিয়ে তৈরি।
            </p>
            <div className="flex gap-4">
              <FooterAction icon={<MessageSquareWarning size={16} />} label="বন্ধুকে রিপোর্ট করুন" />
              <FooterAction icon={<Shield size={16} />} label="অপরাধ জমা দিন" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#members" className="hover:text-neon-blue transition-colors">স্কোয়াড</a></li>
              <li><a href="#games" className="hover:text-neon-blue transition-colors">গেম এরিনা</a></li>
              <li><a href="#vault" className="hover:text-neon-blue transition-colors">স্মৃতি ভল্ট</a></li>
              <li><a href="#police" className="hover:text-neon-blue transition-colors">পুলিশ ডাটাবেস</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">মিশন</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2 text-white/60">
                <UserPlus size={14} /> পরবর্তী মিশনে যোগ দিন
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <FileText size={14} /> রোস্ট অ্যাডমিন
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <ExternalLink size={14} /> গোপন ইউনিভার্স
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          <div>© ২০২৬ BATMAN ইউনিভার্স // সর্বস্বত্ব সংরক্ষিত</div>
          <div className="flex items-center gap-1">
            Crafted & Developed by <span className="text-neon-purple font-bold hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] transition-all cursor-default">JH MaRuF</span>
          </div>
          <div className="neon-text font-black">BATMAN চিরজীবী – বিশৃঙ্খলা চলবেই 😎🔥</div>
        </div>
      </div>
    </footer>
  );
}

function FooterAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 glass border-white/5 rounded-lg text-xs font-bold hover:bg-white/5 transition-colors"
    >
      {icon}
      {label}
    </motion.button>
  );
}
