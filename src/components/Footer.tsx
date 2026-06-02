/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../types';
import { Check, Copy, Phone } from 'lucide-react';

interface FooterProps {
  data: ProfileData;
}

export default function Footer({ data }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative bg-neutral-950 border-t border-neutral-900 pt-24 pb-12 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Major Academic Projects Showcase */}
        <div className="mb-24">
          <span className="font-mono text-2xs tracking-widest text-[#CCFF00]">04 / CRITICAL PROJECTS</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] mt-2 tracking-tight">
            校园项目经历
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-[#090909]/60 border border-neutral-900 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-3xs text-neutral-600 font-semibold">{proj.period}</span>
                    <span className="text-[10px] text-[#CCFF00] font-mono px-2.5 py-0.5 rounded-full bg-[#CCFF00]/5 border border-[#CCFF00]/10">
                      LEADERSHIP
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F0F0F0] font-sans tracking-wide mb-1 leading-snug">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-[#CCFF00] font-mono mb-4">{proj.role}</p>

                  <ul className="space-y-3 text-2xs text-neutral-400 font-sans leading-relaxed">
                    {proj.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-1 h-1 bg-[#CCFF00] rounded-full mt-1.5 flex-shrink-0" />
                        <p>{ach}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Contact Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-12 border-t border-neutral-900 mb-20">
          
          <div className="lg:col-span-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-2xl bg-[#CCFF00] text-black font-bold font-sans text-sm flex items-center justify-center gap-2 cursor-none interactive-hover hover:opacity-95 transition-all shadow-[0_4px_20px_rgba(204,255,0,0.15)] magnetic-item"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? '邮箱已复制到剪贴板！' : '点击复制联系邮箱'}</span>
              </button>

              <a
                href={`tel:${data.phone}`}
                className="px-6 py-4 rounded-2xl bg-neutral-900 text-[#F0F0F0] border border-neutral-800 font-bold font-sans text-sm flex items-center justify-center gap-2 cursor-none interactive-hover hover:bg-neutral-850 transition-all magnetic-item"
              >
                <Phone size={16} className="text-[#CCFF00]" />
                <span>直呼简历电话</span>
              </a>
            </div>
          </div>

        </div>

        {/* Section 3: Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-3xs font-mono text-neutral-600 gap-4">
          <span>
            © {new Date().getFullYear()} DENG YUANUAN PORTFOLIO. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors cursor-none interactive-hover">
              BACK TO TOP ↑
            </a>
            <span>
              DESIGNED BY AWARD-WINNING VIBE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
