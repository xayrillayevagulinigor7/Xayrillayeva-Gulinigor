/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SATInfo from './components/SATInfo';
import Practice from './components/Practice';
import Resources from './components/Resources';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/info" element={<SATInfo />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter">SAT<span className="text-red-700">PREP</span></span>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} SAT Prep Uzbekistan. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-8 text-sm text-slate-900 font-bold">
              <a href="#" className="hover:text-red-700 transition-colors uppercase tracking-widest text-[10px]">Telegram</a>
              <a href="#" className="hover:text-red-700 transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
              <a href="#" className="hover:text-red-700 transition-colors uppercase tracking-widest text-[10px]">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
