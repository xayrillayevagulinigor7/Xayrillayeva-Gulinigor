/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: string;
  type: 'math' | 'reading' | 'writing';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SATData {
  title: string;
  sections: {
    title: string;
    description: string;
    content: string[];
  }[];
}
