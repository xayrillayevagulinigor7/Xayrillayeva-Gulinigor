/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';

export const SAT_INFO = {
  title: "SAT Imtihoni Haqida",
  intro: "SAT (Scholastic Assessment Test) - AQSH va boshqa ko'plab mamlakatlar universitetlariga kirish uchun topshiriladigan standartlashtirilgan testdir.",
  sections: [
    {
      id: "structure",
      title: "Test Tuzilishi",
      description: "SAT 2 ta asosiy bo'limdan iborat:",
      items: [
        "Evidence-Based Reading and Writing (O'qish va Yozish)",
        "Math (Matematika)",
        "Umumiy ball: 400 dan 1600 gacha"
      ]
    },
    {
      id: "registration",
      title: "Ro'yxatdan O'tish",
      description: "Ro'yxatdan o'tish College Board sayti orqali amalga oshiriladi.",
      items: [
        "Sana tanlash",
        "Test markazini tanlash (O'zbekistonda bir nechta markaz bor)",
        "To'lovni amalga oshirish"
      ]
    },
    {
      id: "tips",
      title: "Tayyorgarlik Maslahatlari",
      description: "Muvaffaqiyatga erishish uchun quyidagilarga e'tibor bering:",
      items: [
        "Har kuni kamida 1 soat shug'ullanish",
        "Khan Academy resurslaridan foydalanish",
        "Vaqtni boshqarishni o'rganish"
      ]
    }
  ]
};

export const PRACTICE_QUESTIONS: Question[] = [
  {
    id: 'm1',
    type: 'math',
    question: "If 3x + 6 = 18, what is the value of x - 2?",
    options: ["2", "4", "6", "8"],
    correctAnswer: 0,
    explanation: "3x + 6 = 18 => 3x = 12 => x = 4. Then x - 2 = 4 - 2 = 2."
  },
  {
    id: 'r1',
    type: 'reading',
    question: "As used in the passage, 'directly' most nearly means...",
    options: ["frankly", "immediately", "without mediation", "linearly"],
    correctAnswer: 2,
    explanation: "In SAT context, 'directly' often means without something else getting in the way or through mediation."
  },
  {
    id: 'm2',
    type: 'math',
    question: "What is the slope of the line represented by the equation 2y - 4x = 8?",
    options: ["-2", "2", "4", "8"],
    correctAnswer: 1,
    explanation: "Rewrite in y = mx + b form: 2y = 4x + 8 => y = 2x + 4. The slope (m) is 2."
  }
];
