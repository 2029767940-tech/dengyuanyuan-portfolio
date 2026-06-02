/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ProfileData } from '../types';
import { Award, BookOpen, GraduationCap, MapPin, Stars, CheckCircle2 } from 'lucide-react';

interface BentoAboutProps {
  data: ProfileData;
}

export default function BentoAbout({ data }: BentoAboutProps) {
  // We can arrange bento items inside dynamic boxes
  const introItem = data.bentoItems.find(item => item.id === 'bento-1');
  const cityItem = data.bentoItems.find(item => item.id === 'bento-2');
  const rankItem = data.bentoItems.find(item => item.id === 'bento-3');
  const satItem = data.bentoItems.find(item => item.id === 'bento-4');
  const philosophyItem = data.bentoItems.find(item => item.id === 'bento-5');

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="mb-14">
        <span className="font-mono text-2xs tracking-widest text-[#CCFF00]">01 / 个人简介</span>
        <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] mt-2 tracking-tight">
          个人简介
        </h2>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[220px]">
        
        {/* Box 1: 个人优势 (Big text) (Span 7, Row 2) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-7 md:row-span-2 bg-[#0C0C0C]/80 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl group-hover:bg-[#CCFF00]/10 transition-all duration-500" />
          <div className="flex items-start justify-between">
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800">
              <Stars size={18} className="text-[#CCFF00]" />
            </div>
            <span className="font-mono text-[10px] text-neutral-600 tracking-wider">01 / ADVANTAGES</span>
          </div>

          <div className="space-y-5 overflow-y-auto max-h-[280px] pr-2">
            <h3 className="text-xl font-bold text-[#F0F0F0] font-sans tracking-wide">
              {introItem?.title}
            </h3>
            
            {introItem?.advantages?.map((category, catIdx) => (
              <div key={catIdx} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#CCFF00] font-mono text-xs font-semibold tracking-wider">
                    {category.title}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#CCFF00]/30 to-transparent" />
                </div>
                
                <div className="space-y-2.5">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 group/item">
                      <CheckCircle2 size={14} className="text-[#CCFF00] mt-0.5 flex-shrink-0" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-[#F0F0F0] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-500">
            <span>双轨合作办学 · 网络与新媒体</span>
            <span className="text-[#CCFF00]">CDU & UoS</span>
          </div>
        </motion.div>

        {/* Box 2: Degree Credentials (Span 5, Row 1) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-5 md:row-span-1 bg-gradient-to-br from-[#0C0C0C] to-[#121212] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#CCFF00]/10 rounded-lg">
              <GraduationCap size={16} className="text-[#CCFF00]" />
            </div>
            <div>
              <h4 className="text-xs text-neutral-500 font-mono">EDUCATION BACKGROUND</h4>
              <p className="text-sm font-bold text-[#F0F0F0] mt-0.5">{data.education.school}</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-neutral-400 font-sans">
              本科中外合作办学 | {data.education.period}
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
              <p className="text-xs font-mono text-[#CCFF00] font-semibold">{data.education.degree}</p>
            </div>
          </div>
        </motion.div>

        {/* Box 3: Target Cities (Span 5, Row 1) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-5 md:row-span-1 bg-[#CCFF00] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group cursor-none interactive-hover"
        >
          <div className="absolute -right-8 -bottom-8 opacity-10 text-neutral-950 group-hover:scale-110 transition-transform duration-500">
            <MapPin size={180} />
          </div>
          
          <div className="flex items-start justify-between text-black">
            <div className="p-2.5 bg-black/5 rounded-xl border border-black/10">
              <MapPin size={16} />
            </div>
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#050505]/70">02 / DESTINATIONS</span>
          </div>

          <div className="text-black">
            <h4 className="text-[10px] font-bold tracking-widest text-neutral-800 uppercase">意向就业城市</h4>
            <div className="text-2xl font-black tracking-tight mt-1">
              {cityItem?.content}
            </div>
            <p className="text-3xs font-mono font-medium opacity-80 mt-1">
              {cityItem?.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Box 4: Stat Grade Rank (Span 4, Row 1) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 md:row-span-1 bg-[#090909]/90 border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur"
        >
          <div className="flex items-start justify-between">
            <div className="p-2 bg-neutral-900 rounded-lg">
              <Award size={16} className="text-neutral-400" />
            </div>
            <span className="font-mono text-[10px] text-neutral-600">03 / PERFORMANCE</span>
          </div>

          <div>
            <span className="text-4xl font-extrabold tracking-tighter text-[#CCFF00] font-mono">
              {rankItem?.content}
            </span>
            <p className="text-xs text-[#F0F0F0] font-bold mt-1">{rankItem?.title}</p>
            <p className="text-3xs text-neutral-500 font-mono mt-0.5">{rankItem?.subtitle}</p>
          </div>
        </motion.div>

        {/* Box 5: Academic Honors & Courses (Span 4, Row 1) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 md:row-span-1 bg-[#090909]/90 border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur"
        >
          <div className="flex items-start justify-between">
            <div className="p-2 bg-neutral-900 rounded-lg">
              <BookOpen size={16} className="text-neutral-400" />
            </div>
            <span className="font-mono text-[10px] text-neutral-600">04 / TRACK</span>
          </div>

          <div className="space-y-3 mt-3">
            <p className="text-sm font-bold text-[#F0F0F0] font-sans">{satItem?.title}</p>
            <div className="space-y-1.5">
              {satItem?.content.split('，').map((course, idx) => (
                <p key={idx} className="text-xs text-neutral-400 leading-relaxed font-sans flex items-start gap-1.5">
                  <span className="w-1 h-1 bg-[#CCFF00] rounded-full mt-1.5 flex-shrink-0" />
                  <span>{course}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Box 6: Brand Philosophy (Span 4, Row 1) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 md:row-span-1 bg-[#0F0F0F] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/5 rounded-full blur-xl" />
          <div className="flex items-start justify-between">
            <span className="text-xs font-mono text-[#CCFF00] font-semibold">05 / HONORS</span>
            <span className="font-mono text-[10px] text-neutral-600">AWARDS</span>
          </div>

          <div className="mt-2 space-y-2">
            <p className="text-sm font-bold text-[#F0F0F0]">{philosophyItem?.title}</p>
            <div className="space-y-1">
              {philosophyItem?.content.split('，').map((award, idx) => (
                <p key={idx} className="text-xs text-neutral-400 leading-relaxed flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full mt-1.5 flex-shrink-0" />
                  <span>{award}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
