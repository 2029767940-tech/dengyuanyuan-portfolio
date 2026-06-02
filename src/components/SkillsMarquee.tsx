/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ProfileData, SkillItem } from '../types';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

interface SkillsMarqueeProps {
  data: ProfileData;
  onSkillClick?: (skill: SkillItem) => void;
}

export default function SkillsMarquee({ data, onSkillClick }: SkillsMarqueeProps) {
  const handleClick = (skill: SkillItem, e: React.MouseEvent) => {
    if (skill.isClickable && onSkillClick) {
      e.preventDefault();
      onSkillClick(skill);
    }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto border-t border-neutral-900 overflow-hidden">
      <div className="px-6 mb-14">
        <span className="font-mono text-2xs tracking-widest text-[#CCFF00]">03 / PORTFOLIO & SKILLS</span>
        <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] mt-2 tracking-tight">
          作品集与专业技能
        </h2>
        <p className="text-neutral-500 text-sm mt-2 max-w-xl font-mono">
          点击查看作品详情
        </p>
      </div>

      {/* Grid of Work Thumbnails/Cards (Pre-reserved custom thumbnails) */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {data.skills.map((skill, index) => (
          skill.isClickable ? (
            <motion.div
              key={skill.name}
              onClick={(e) => handleClick(skill, e)}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-[#090909] border border-neutral-900 overflow-hidden flex flex-col justify-between cursor-none interactive-hover min-h-[380px]"
            >
              {/* Image Placeholder Layer */}
              <div className="relative w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-900">
                <div className="absolute inset-0 bg-neutral-950/45 group-hover:bg-neutral-950/20 transition-all duration-500 z-10" />
                
                <img
                  src={skill.imagePlaceholder}
                  alt={skill.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dynamic Overlay badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 background-blur bg-black/60 rounded-full border border-white/10 text-3xs font-mono tracking-widest text-[#CCFF00] flex items-center gap-1">
                  <span>VERIFIED</span>
                  <Sparkles size={8} />
                </div>

                {/* Grid Lines Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              </div>

              {/* Narrative Info Box */}
              <div className="p-6 flex-1 flex flex-col justify-between relative">
                {/* Card Aura on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F0F0F0] group-hover:text-[#CCFF00] transition-colors duration-300 flex items-center justify-between">
                    {skill.name}
                    <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-950 flex items-center justify-between text-4xs font-mono text-neutral-600">
                  <span>INDEX / 2026</span>
                  <span className="text-[#CCFF00] flex items-center gap-1 font-bold">
                    点击查看详情 <Layers size={10} />
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.a
              key={skill.name}
              href={skill.targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-[#090909] border border-neutral-900 overflow-hidden flex flex-col justify-between cursor-none interactive-hover min-h-[380px]"
            >
              {/* Image Placeholder Layer */}
              <div className="relative w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-900">
                <div className="absolute inset-0 bg-neutral-950/45 group-hover:bg-neutral-950/20 transition-all duration-500 z-10" />
                
                <img
                  src={skill.imagePlaceholder}
                  alt={skill.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dynamic Overlay badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 background-blur bg-black/60 rounded-full border border-white/10 text-3xs font-mono tracking-widest text-[#CCFF00] flex items-center gap-1">
                  <span>VERIFIED</span>
                  <Sparkles size={8} />
                </div>

                {/* Grid Lines Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              </div>

              {/* Narrative Info Box */}
              <div className="p-6 flex-1 flex flex-col justify-between relative">
                {/* Card Aura on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F0F0F0] group-hover:text-[#CCFF00] transition-colors duration-300 flex items-center justify-between">
                    {skill.name}
                    <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-950 flex items-center justify-between text-4xs font-mono text-neutral-600">
                  <span>INDEX / 2026</span>
                  <span className="text-[#CCFF00] flex items-center gap-1 font-bold">
                    点击查看源站 <Layers size={10} />
                  </span>
                </div>
              </div>
            </motion.a>
          )
        ))}
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative py-8 bg-neutral-950 border-y border-neutral-900 select-none overflow-hidden max-w-[100vw]">
        {/* Shadow overlays for smooth fade-out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-[marquee_20s_linear_infinite]">
          {/* Loop 1 */}
          <div className="flex justify-around min-w-full shrink-0 text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900">
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              剪辑摄影 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              内容运营 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              营销策划 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              数据分析 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              UI设计 <span className="text-[#CCFF00]">·</span>
            </span>
          </div>

          {/* Loop 2 */}
          <div className="flex justify-around min-w-full shrink-0 text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900">
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              剪辑摄影 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              内容运营 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              营销策划 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              数据分析 <span className="text-[#CCFF00]">·</span>
            </span>
            <span className="flex items-center gap-4 hover:text-[#CCFF00] transition-colors duration-300 cursor-none interactive-hover">
              UI设计 <span className="text-[#CCFF00]">·</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
