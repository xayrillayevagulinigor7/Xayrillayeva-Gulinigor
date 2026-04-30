/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-1/2 h-[1000px] bg-red-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-1/3 h-[800px] bg-slate-100 rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:text-center lg:col-span-7 lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-bold mb-8 border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Yangi: 2026-yilgi Digital SAT Testlari
            </div>
            
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl xl:text-8xl text-slate-900 leading-[0.9]">
              ORZUDAGI <br />
              <span className="text-red-800 italic">KELAJAKKA</span> <br />
              YO'L OCHING.
            </h1>
            
            <p className="mt-8 text-lg text-slate-600 sm:text-xl lg:max-w-xl leading-relaxed">
              O'zbekistonning eng zamonaviy SAT tayyorgarlik platformasi. 
              Biz bilan 1550+ ball to'plash endi yanada oson va qulay.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:justify-center lg:justify-start">
              <Link
                to="/practice"
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-black rounded-2xl text-white bg-red-800 hover:bg-black transition-all hover:-translate-y-1 shadow-2xl shadow-red-200"
              >
                Hozir boshlang
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/info"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-slate-900 bg-white border-2 border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
              >
                Ma'lumot olish
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-red-800 font-black text-2xl">10k+</span>
                <span className="text-sm">Foydalanuvchilar</span>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className="text-red-800 font-black text-2xl">500+</span>
                <span className="text-sm">Rasmiy Savollar</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 lg:mt-0 lg:col-span-5 relative"
          >
            <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(139,0,0,0.3)] border border-red-50/50">
               <div className="rounded-[1.8rem] overflow-hidden aspect-[4/5] bg-red-950 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    alt="Students studying"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <p className="text-white font-bold text-lg leading-tight italic">
                        "Ushbu sayt orqali 1520 ball oldim. Hammaga tavsiya qilaman!"
                      </p>
                      <p className="text-red-300 text-sm mt-2 font-bold">— Ahmadjonov S.</p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Floating card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-black text-white p-6 rounded-3xl shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-800 rounded-xl flex items-center justify-center font-black text-xl">
                  A+
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">O'rtacha natija</p>
                  <p className="text-2xl font-black">1480+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
