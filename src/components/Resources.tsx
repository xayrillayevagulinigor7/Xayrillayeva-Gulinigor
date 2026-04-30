/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { ExternalLink, Book, Download, Youtube, ChevronRight } from 'lucide-react';

export default function Resources() {
  const externalResources = [
    {
      title: "Khan Academy SAT Prep",
      description: "College Board bilan rasmiy hamkorlikda yaratilgan eng yaxshi bepul tayyorgarlik kursi.",
      url: "https://www.khanacademy.org/sat",
      icon: Book,
      color: "bg-red-50 text-red-700"
    },
    {
      title: "College Board Official Site",
      description: "Testga ro'yxatdan o'tish, markazlarni topish va rasmiy test namunalarini yuklab olish.",
      url: "https://www.collegeboard.org/",
      icon: Download,
      color: "bg-slate-100 text-slate-800"
    },
    {
      title: "SAT Prep YouTube",
      description: "Qiyin masalalar va test topshirish strategiyalari bo'yicha video darsliklar.",
      url: "https://www.youtube.com/results?search_query=sat+prep",
      icon: Youtube,
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tighter">
            FOYDALI <span className="text-red-800">RESURSLAR</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 font-medium">
            O'rganishni davom ettirish uchun eng yaxshi manbalar jamlanmasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {externalResources.map((res, idx) => (
            <motion.a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-red-200/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${res.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-sm`}>
                <res.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-red-800 transition-colors tracking-tight">
                {res.title}
              </h3>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                {res.description}
              </p>
              <div className="flex items-center text-red-800 font-black text-sm uppercase tracking-widest">
                Kirish <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-24 p-10 sm:p-20 bg-red-950 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-red-900/40">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 border-8 border-white rounded-full" />
            <div className="absolute bottom-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-2xl">
             <div className="inline-block px-4 py-1.5 bg-red-800 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Bog'lanish
             </div>
             <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter leading-tight">
               SAVOLLAR <br /> TUG'ILDIMI?
             </h3>
             <p className="text-red-200 text-xl mb-10 leading-relaxed font-medium">
               SAT bo'yicha maslahatlar yoki professional mentorlik xizmati kerak bo'lsa, mutaxassislarimiz sizga yordam berishga tayyor.
             </p>
             <button className="px-10 py-5 bg-white text-red-950 font-black text-lg rounded-2xl hover:bg-red-50 transition-all active:scale-95 shadow-xl">
               Bepul maslahat olish
             </button>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-800/20 blur-3xl rounded-full" 
          />
        </div>
      </div>
    </div>
  );
}
