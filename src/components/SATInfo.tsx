/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { SAT_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';

export default function SATInfo() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tighter">
            {SAT_INFO.title}
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-red-800 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-slate-600 leading-relaxed font-medium">
            {SAT_INFO.intro}
          </p>
        </motion.div>

        <div className="space-y-8">
          {SAT_INFO.sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-red-100/20 border border-red-50 hover:border-red-200 transition-colors group"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-800 text-white text-xl font-black shadow-lg shadow-red-200 group-hover:rotate-6 transition-transform">
                  {idx + 1}
                </span>
                {section.title}
              </h3>
              <p className="text-lg text-slate-600 mb-8 font-medium">{section.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3 p-4 bg-red-50/50 rounded-2xl text-slate-700 font-bold border border-red-100/50">
                    <ChevronRight className="h-5 w-5 text-red-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
