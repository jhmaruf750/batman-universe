import React from 'react';
import { motion } from 'motion/react';
import { MEMBERS, Member } from '../data/members';
import { cn } from '../lib/utils';
import { ShieldAlert, Zap, Ghost, Brain } from 'lucide-react';

export default function Members({ onSelectMember }: { onSelectMember: (m: Member) => void }) {
  return (
    <section id="members" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">স্কোয়াড</h2>
        <p className="text-white/50">কিংবদন্তিদের পতন দেখতে ক্লিক করুন।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEMBERS.map((member, index) => (
          <MemberCard 
            key={member.id} 
            member={member} 
            index={index} 
            onClick={() => onSelectMember(member)}
          />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member, index, onClick }: { member: Member; index: number; onClick: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative glass p-6 h-full flex flex-col">
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-batman-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="text-3xl font-black tracking-tighter">{member.name}</div>
            <div className="text-xs font-mono text-neon-blue uppercase tracking-widest">{member.nickname}</div>
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white/40 uppercase">রোস্ট মিটার</span>
            <span className="text-neon-purple font-bold">{member.roastLevel}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${member.roastLevel}%` }}
              className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <StatItem icon={<Zap size={14} />} label="Chaos" value={member.stats.chaos} />
            <StatItem icon={<Ghost size={14} />} label="Laziness" value={member.stats.laziness} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-neon-blue">{icon}</div>
      <div>
        <div className="text-[10px] text-white/40 uppercase tracking-tighter">{label}</div>
        <div className="text-sm font-bold">{value}</div>
      </div>
    </div>
  );
}
