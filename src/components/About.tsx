/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Aniq Maqsad",
      description: "O'zbekistonlik yoshlarga jahon darajasidagi ta'lim maskanlariga kirishda ko'maklashish."
    },
    {
      icon: Zap,
      title: "Tezkor O'rganish",
      description: "Eng so'nggi Digital SAT formatidagi savollar va metodikalar."
    },
    {
      icon: ShieldCheck,
      title: "Ishonchli Manba",
      description: "College Board standartlari asosida tayyorlangan rasmiy ma'lumotlar."
    },
    {
      icon: Users,
      title: "Hamjamiyat",
      description: "Minglab talabalar bilan birga tajriba almashish va birgalikda o'sish."
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-800 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Platforma haqida
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              KELAJAKNI <br />
              <span className="text-red-800">BIRGALIKDA</span> <br />
              QURAMIZ.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              SAT Prep Uzbekistan — bu shunchaki testlar to'plami emas. Bu O'zbekistondagi iqtidorli yoshlarni xalqaro ta'lim standartlariga tayyorlovchi zamonaviy ekotizimdir. 
              Bizning maqsadimiz — har bir talabaga o'z potentsialini to'liq namoyon etish uchun sifatli resurslarni taqdim etish.
            </p>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
               <p className="text-slate-900 font-bold italic leading-relaxed">
                 "Ta'lim — bu dunyoni o'zgartirish uchun ishlata olishingiz mumkin bo'lgan eng qudratli quroldir."
               </p>
               <p className="mt-4 text-red-800 font-black">— Nelson Mandela</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="aspect-square bg-red-50 rounded-[3rem] relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                 alt="Team working"
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-red-950/50 to-transparent" />
            </div>
            {/* Floating info */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl border border-red-50 hidden sm:block">
               <p className="text-5xl font-black text-red-800 tracking-tighter">100%</p>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Bepul Resurslar</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-red-200 hover:shadow-xl hover:shadow-red-200/20 transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-800 group-hover:text-white transition-colors group-hover:rotate-6">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-6">Yaratuvchi Haqida</h3>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Ushbu platforma O'zbekistonning ta'lim sohasini raqamlashtirishni maqsad qilgan professional jamoa tomonidan yaratildi. 
            Biz har bir talabaning muvaffaqiyati bizning eng katta yutug'imiz deb bilamiz.
          </p>
          <div className="mt-12 flex justify-center gap-6 items-center">
             <div className="w-20 h-20 rounded-full bg-red-800 flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-red-200 border-4 border-white">
               G
             </div>
             <div className="text-left py-1">
               <p className="font-black text-slate-900 text-2xl tracking-tight">Xayrillayeva Gulinigor</p>
               <p className="text-red-700 font-black text-sm uppercase tracking-[0.2em] mt-1">Loyiha Rahbari</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
