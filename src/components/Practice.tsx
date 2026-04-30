/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRACTICE_QUESTIONS } from '../constants';
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

export default function Practice() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = PRACTICE_QUESTIONS[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < PRACTICE_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-red-100/50 space-y-8 border border-red-50"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-3xl text-red-800 rotate-6">
             <CheckCircle2 className="h-12 w-12" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Imtihon yakunlandi!</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-slate-500 text-sm font-bold uppercase">To'g'ri javob</p>
              <p className="text-3xl font-black text-red-800">{score}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-slate-500 text-sm font-bold uppercase">Umumiy</p>
              <p className="text-3xl font-black text-slate-900">{PRACTICE_QUESTIONS.length}</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full py-5 bg-red-800 hover:bg-red-900 text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-red-200 active:scale-95"
          >
            Yana bir bor urinib ko'ring
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-red-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-sm font-bold text-slate-600">
            Savol {currentQuestionIdx + 1} / {PRACTICE_QUESTIONS.length}
          </span>
        </div>
        <div className="flex gap-1.5">
          {PRACTICE_QUESTIONS.map((_, idx) => (
             <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentQuestionIdx ? 'w-10 bg-red-800' : 
                idx < currentQuestionIdx ? 'w-4 bg-red-200' : 'w-4 bg-slate-100'
              }`}
             />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-2xl shadow-red-200/20 border border-red-50 relative overflow-hidden"
        >
          {/* Subtle background icon */}
          <HelpCircle className="absolute -top-10 -right-10 w-40 h-40 text-red-50/50 -rotate-12 pointer-events-none" />

          <div className="uppercase tracking-[0.2em] text-[10px] font-black text-red-700 mb-6 px-4 py-1.5 bg-red-50 w-fit rounded-full border border-red-100">
            {question.type === 'math' ? 'MATEMATIKA' : question.type === 'reading' ? "O'QISH" : 'YOZISH'}
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10 leading-tight tracking-tight relative z-10">
            {question.question}
          </h3>

          <div className="space-y-4 relative z-10">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let variantStyle = 'border-slate-200 hover:border-red-400 hover:bg-red-50/50';
              if (selectedOption !== null) {
                if (isCorrect) variantStyle = 'border-green-600 bg-green-50 ring-2 ring-green-600/20';
                else if (isSelected) variantStyle = 'border-red-600 bg-red-50 ring-2 ring-red-600/20';
                else variantStyle = 'border-slate-100 opacity-40 cursor-not-allowed';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full flex items-center justify-between p-6 border-2 rounded-[1.5rem] transition-all duration-300 group text-left ${variantStyle}`}
                  disabled={selectedOption !== null}
                >
                  <span className="flex items-center gap-6">
                    <span className={`w-10 h-10 flex items-center justify-center rounded-xl border-2 font-black text-lg transition-transform group-hover:scale-110 ${
                      isSelected || isCorrect ? 'bg-red-800 text-white border-transparent shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-slate-900 font-bold text-lg">{option}</span>
                  </span>
                  {selectedOption !== null && isCorrect && <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle2 className="text-green-600 h-6 w-6" /></div>}
                  {selectedOption !== null && isSelected && !isCorrect && <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><XCircle className="text-red-700 h-6 w-6" /></div>}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedOption !== null && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-10 overflow-hidden"
              >
                <div className="h-px bg-slate-100 w-full mb-8" />
                <button
                   onClick={() => setShowExplanation(!showExplanation)}
                   className="flex items-center gap-2 text-red-800 hover:text-red-950 font-black mb-6 transition-colors tracking-tight underline underline-offset-4"
                >
                  <HelpCircle className="h-5 w-5" />
                  {showExplanation ? "Tushuntirishni yashirish" : "Yechimini bilmoqchimisiz?"}
                </button>
                {showExplanation && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-8 bg-red-950 text-red-50 rounded-[2rem] border border-red-900 shadow-xl leading-relaxed"
                  >
                    <p className="font-black mb-3 text-red-400 uppercase tracking-widest text-xs">Rasmiy izoh:</p>
                    <p className="text-lg font-medium">{question.explanation}</p>
                  </motion.div>
                )}

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-3 px-12 py-5 bg-red-800 text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl shadow-red-200 active:scale-95"
                  >
                    {currentQuestionIdx === PRACTICE_QUESTIONS.length - 1 ? 'Natijani ko\'rish' : 'Keyingi savol'}
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
