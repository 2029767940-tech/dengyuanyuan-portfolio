/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

interface HeroProps {
  data: ProfileData;
}

export default function Hero({ data }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-6 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* 1. Header/Navbar */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-center justify-between w-full z-10 py-4"
        id="home"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-wider text-neutral-400">作品集｜</span>
          <span className="font-bold text-lg tracking-widest text-[#CCFF00] font-sans">
            邓源媛
          </span>
        </div>
        
        {/* Navigation Elements */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest font-semibold text-neutral-400 font-sans">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            个人简介
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            工作经历
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            作品集与专业技能
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            联系方式
          </button>
        </nav>

        {/* Call to action button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-5 py-2.5 rounded-full bg-[#CCFF00] text-black font-sans font-bold text-xs tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-none interactive-hover"
        >
          联系我
        </button>
      </motion.header>

      {/* 2. Main Hero Content Layout */}
      <div className="flex flex-col items-center text-center my-auto py-12 z-10 max-w-5xl mx-auto gap-8">
        
        {/* Circular Avatar Layout with Neon Backglow - Centered at the top */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 cursor-none interactive-hover rounded-full transition-all duration-300"
          >
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-[#CCFF00]/10 rounded-full blur-2xl opacity-60 group-hover:bg-[#CCFF00]/15 transition-all duration-700" />
            
            {/* Outer Rotating / Pulsing Border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-0 border border-dashed border-[#CCFF00]/20 rounded-full p-2 whitespace-nowrap"
            />

            {/* Portrait Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border border-neutral-800 bg-neutral-950/60 backdrop-blur-md flex items-center justify-center p-1.5 ring-4 ring-[#CCFF00]/10 group-hover:ring-[#CCFF00]/20 transition-all duration-500 shadow-2xl">
              <img
                src={data.avatar}
                alt={data.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Badges/Pins around Avatar */}
            <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-[#050505]/95 text-[9px] text-[#CCFF00] px-3 py-1 rounded-full border border-neutral-800 shadow-lg font-mono tracking-wider backdrop-blur-sm whitespace-nowrap z-10">
              ✨ PORTRAIT IN VOID
            </div>
          </motion.div>
        </div>

        {/* Centered Typography Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Huge Name Layout */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#F0F0F0] leading-none mb-2">
            {data.name}
            <span className="text-neutral-500 block text-2xl sm:text-3xl font-mono tracking-widest uppercase mt-4">
              {data.englishName}
            </span>
          </h1>

          {/* Job Subtitles */}
          <p className="text-xl sm:text-2xl text-neutral-300 font-sans font-light tracking-wide leading-relaxed border-y border-dashed border-neutral-800 py-2.5 px-6">
            品牌策划 <span className="text-[#CCFF00]">/</span> 市场营销 <span className="text-[#CCFF00]">/</span> 内容运营
          </p>

          <p className="text-sm text-neutral-400 font-mono tracking-wide max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>

          {/* Quick Contact Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-400 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 rounded border border-neutral-800">
              <Mail size={12} className="text-[#CCFF00]" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 rounded border border-neutral-800">
              <Phone size={12} className="text-[#CCFF00]" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 rounded border border-neutral-800">
              <MapPin size={12} className="text-[#CCFF00]" />
              <span>成都 · 上海 · 深圳 · 杭州</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. Hero Bottom Quick Statistics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-900 z-10">
        {data.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
            className="flex flex-col gap-1 border-r border-neutral-950/50 last:border-0"
          >
            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#CCFF00] font-mono">
              {stat.value}
            </span>
            <span className="text-2xs font-mono uppercase tracking-widest text-[#F0F0F0]/50">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
