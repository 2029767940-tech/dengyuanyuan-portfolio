/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../types';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceProps {
  data: ProfileData;
}

export default function Experience({ data }: ExperienceProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="mb-14">
        <span className="font-mono text-2xs tracking-widest text-[#CCFF00]">02 / WORK EXPERIENCE</span>
        <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] mt-2 tracking-tight">
          工作经历
        </h2>
      </div>

      <div className="relative">
        {/* Continuous straight line to represent the timeline, statically positioned */}
        <div className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-neutral-900/80" />

        {/* Timeline Grid (Vertical flow without absolute overlapping cards) */}
        <div className="space-y-16">
          {data.experiences.map((exp, idx) => {
            const isHovered = hoveredId === exp.id;
            const isAnyHovered = hoveredId !== null;
            const isCurrentHovered = hoveredId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative pl-12 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 group transition-all duration-500 ease-out ${
                  isAnyHovered && !isCurrentHovered 
                    ? 'opacity-25 scale-[0.98] blur-[0.5px] saturate-50' 
                    : 'opacity-100 scale-100'
                }`}
              >
                {/* Timeline Marker dot perfectly aligned with the line */}
                <span className={`absolute left-4 md:left-6 -translate-x-1/2 top-2.5 w-3.5 h-3.5 rounded-full border-2 bg-black transition-all duration-300 z-10 ${
                  isHovered 
                    ? 'border-[#CCFF00] scale-125 shadow-[0_0_12px_#CCFF00] bg-[#CCFF00]' 
                    : 'border-neutral-700 group-hover:border-[#CCFF00]'
                }`} />

                {/* Left Column (col-span-4): Career metadata */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#CCFF00] text-3xs font-mono">
                    <Calendar size={10} />
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-2xl font-black text-[#F0F0F0] group-hover:text-[#CCFF00] transition-colors duration-300">
                    {exp.company}
                  </h3>

                  <p className="text-sm font-semibold font-sans text-neutral-300 flex items-center gap-2">
                    <Briefcase size={12} className="text-neutral-500" />
                    <span>{exp.role}</span>
                  </p>

                  {/* Sub-tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-4xs font-mono bg-neutral-900/80 text-neutral-400 px-2.5 py-0.5 rounded border border-neutral-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column (col-span-8): Professional Achievements Glass Box */}
                <div className="lg:col-span-8">
                  <div className={`p-6 rounded-2xl transition-all duration-500 bg-white/[0.02] border backdrop-blur-md relative overflow-hidden ${
                    isHovered 
                      ? 'border-[#CCFF00]/40 bg-white/[0.04] shadow-[0_10px_30px_rgba(204,255,0,0.02)]' 
                      : 'border-white/10'
                  }`}>
                    {/* Subtle decorative glowing corner */}
                    {isHovered && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-2xl pointer-events-none" />
                    )}

                    <ul className="space-y-4 text-xs text-neutral-400 leading-relaxed font-sans">
                      {exp.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mt-1.5 shrink-0" />
                          <p className="flex-1 group-hover:text-neutral-300 transition-colors duration-300">
                            {bp}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
