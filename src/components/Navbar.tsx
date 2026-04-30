/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, PenTool, LayoutDashboard, Menu, X, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Asosiy', icon: GraduationCap },
    { path: '/info', label: "Ma'lumot", icon: BookOpen },
    { path: '/practice', label: 'Testlar', icon: PenTool },
    { path: '/resources', label: 'Resurslar', icon: LayoutDashboard },
    { path: '/about', label: 'Biz haqimizda', icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-red-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-red-800 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-red-200">
               <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">SAT<span className="text-red-700">PREP</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2.5 text-sm font-bold tracking-tight transition-all hover:text-red-700 ${
                    isActive ? 'text-red-700' : 'text-slate-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-red-50 rounded-full -z-10 border border-red-100/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
            <div className="ml-4 h-6 w-px bg-slate-200 mx-2" />
            <button className="bg-red-800 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-900 transition-colors shadow-md shadow-red-100">
              Kirish
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
