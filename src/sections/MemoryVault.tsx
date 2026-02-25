import React from 'react';
import { motion } from 'motion/react';
import { Camera, History, Heart } from 'lucide-react';

export default function MemoryVault() {
  const memories = [
    { id: 1, title: "স্কুলের ১২ বছর পূর্তি পুনর্মিলনী অনুষ্ঠান", year: "২০২৬", image: "/images/group1.jpg", desc: "পুনর্মিলনী অনুষ্ঠানে আমরা সবাই উপস্থিত থাকতে পারলেও আতিফ উপস্থিত থাকতে পারেনি। কাজের প্রয়োজনে তাকে ঢাকা থেকে যেতে হয়েছিল। দিনটি ছিল অত্যন্ত সুন্দর ও স্মরণীয়।" },
    { id: 2, title: "তনয়ের রাজশাহী ভ্রমণ", year: "২০২৫", image: "/images/group2.jpg", desc: "তনয়কে নিয়ে আমরা রিকশায় করে কাটাখালীতে কালাভুনা খেতে গিয়েছিলাম।" },
    { id: 3, title: "পঞ্চবটিতে আড্ডা", year: "২০২৫", image: "/images/group3.jpg", desc: "আরাফাত মামা তার গার্লফ্রেন্ডের সঙ্গে ঝগড়া করে ছবি না তোলার সিদ্ধান্ত নিয়েছিল, তাই আমরা বিষয়টি নিয়ে হাসাহাসি করছিলাম।" },
    { id: 4, title: "আতিফ রাজশাহীতে এসেছিল", year: "২০২৫", image: "/images/group4.jpg", desc: "আরাফাত মামা আতিফকে তার নিজস্ব গার্লফ্রেন্ড উপহার হিসেবে দিয়েছিল… সেই খুশিতে খেতে যাওয়ার মুহূর্ত।" },
    { id: 5, title: "বৃষ্টিবিলাস", year: "২০২৪", image: "/images/group5.jpg", desc: "মেয়ে দেখার জন্য গিয়ে আমরা বৃষ্টিতে ভিজে গিয়েছিলাম।" },
    { id: 6, title: "সেদিনের কথা", year: "২০২৫", image: "/images/group6.jpg", desc: "মারুফের কাছ থেকে জোর করে ট্রিট নিয়েছিল আরাফাত আর বারিউল।" },
    { id: 7, title: "নদীবিলাসে ইফতার", year: "২০২৩", image: "/images/group7.jpg", desc: "আরাফাত মামার জন্মদিন উপলক্ষে আমরা তাকে ট্রিট দিয়েছিলাম।" },
    { id: 8, title: "BATMAN চিরজীবী", year: "২০২৩", image: "/images/group8.jpg", desc: " বন্ধু মানেই জীবনের অবিচ্ছেদ্য অংশ।" },
    { id: 9, title: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে আমরা", year: "২০২৫", image: "/images/group9.jpg", desc: "বিশৃঙ্খলা চলবেই, স্মৃতি বাড়বে অসীম।" },
    { id: 10, title: "গ্রুপ ফটো ফেইল", year: "২০২৫", image: "/images/group10.jpg", desc: "পরবর্তী রোস্ট মিশনের পরিকল্পনা চলছে।" },
    { id: 11, title: "বিজয় উল্লাস", year: "২০২৫", image: "/images/group11.jpg", desc: "নাহিদ খাবারের বিল দিবে শুনে আমরা অত্যন্ত খুশি হয়েছিলাম।" },
    { id: 12, title: "মেট্রোরেলের ভ্রমণ", year: "২০২৫", image: "/images/group12.jpg", desc: "সেদিন আমরা সবাই মেট্রোরেলে চড়েছিলাম… এটি ছিল এক অদ্ভুত এবং স্মরণীয় মুহূর্ত।" },
    { id: 13, title: "একই ড্রেসে", year: "২০১৮", image: "/images/group13.jpg", desc: "আমরা সবাই একই ধরনের টি-শার্ট বানিয়েছিলাম।" },
    { id: 14, title: "আতিফ নেই", year: "২০১৮", image: "/images/group14.jpg", desc: "আমাদের বেশির ভাগ প্রোগ্রামে আতিফ থাকে না।" },
    { id: 15, title: "আমরা", year: "২০২৩", image: "/images/group15.jpg", desc: "সেদিন মারুফের জীবনের বিশেষ একজনের জন্মদিন ছিল… সেই উপলক্ষ্যে সে আমাদের সবাইকে কাটাখালীতে ট্রিট দিয়েছিল।" },
  ];

  return (
    <section id="vault" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-neon-purple font-mono text-xs tracking-widest uppercase mb-2">
              <Camera size={14} /> আর্কাইভ
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">স্মৃতি ভল্ট</h2>
          </div>
          <p className="text-white/40 max-w-md text-right font-light">
            বছরের পর বছর ধরে নেওয়া ভুল সিদ্ধান্ত এবং কিংবদন্তি ভ্রাতৃত্বের একটি সিনেমাটিক যাত্রা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {memories.map((mem, i) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={mem.image} 
                  alt={mem.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-batman-black/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-xs font-bold">
                  {mem.year}
                </div>
              </div>
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors">{mem.title}</h3>
                  <p className="text-white/50 text-sm italic">"{mem.desc}"</p>
                </div>
                <div className="p-3 glass rounded-full text-white/20 group-hover:text-red-500 transition-colors">
                  <Heart size={20} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 p-8 glass rounded-3xl border-white/5">
            <div className="text-left">
              <div className="text-4xl font-black neon-text">৮+ বছর</div>
              <div className="text-xs font-mono text-white/40 uppercase tracking-widest">অকৃত্রিম বিশৃঙ্খলা</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-left">
              <div className="text-4xl font-black text-white">১০০০+</div>
              <div className="text-xs font-mono text-white/40 uppercase tracking-widest">ডেলিভার করা রোস্ট</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
