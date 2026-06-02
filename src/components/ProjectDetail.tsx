/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';

interface ProjectDetailProps {
  onBack: () => void;
}

export default function ProjectDetail({ onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-[#CCFF00] selection:text-black antialiased pt-24 pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#050505] -z-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] -z-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] -z-10 pointer-events-none opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#CCFF00] transition-colors mb-12 cursor-none interactive-hover"
        >
          <ArrowLeft size={20} />
          <span className="font-mono text-sm tracking-wider">返回作品集</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />
            <span className="text-[#CCFF00] font-mono text-xs tracking-widest">营销策划</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
            <span className="text-[#CCFF00]">品牌营销</span>作品集
          </h1>
          <p className="text-neutral-400 mt-4 text-lg max-w-2xl">
            包含完整广告方案与种草内容
          </p>
        </motion.div>

        {/* Advertising Pitch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-[#090909] border border-neutral-900 rounded-3xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#CCFF00]/10 rounded-xl border border-[#CCFF00]/20">
                    <FileText size={24} className="text-[#CCFF00]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">瑞幸咖啡 × 2025成都世界运动会营销方案</h2>
                    <p className="text-neutral-500 text-sm">advertising pitch.pdf</p>
                  </div>
                </div>
                <a
                  href="/marketing/advertising pitch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#CCFF00] text-black font-bold rounded-xl hover:bg-white transition-all cursor-none interactive-hover"
                >
                  <ExternalLink size={16} />
                  <span>查看PDF</span>
                </a>
              </div>
              <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base">主题口号：</h3>
                  <p>“幸运在握”——将咖啡杯转化为连接全球运动能量与个人掌控感的符号。</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base">线上线下联动机制：</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span><strong className="text-[#F0F0F0]">线上UGC活动：</strong>用户通过咖啡杯上的二维码参与“最佳能量故事”投稿，“得票最高的内容将被汇编成一部专题纪录片”，并在成都春熙路巨屏及瑞幸官方平台展映。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span><strong className="text-[#F0F0F0]">线下即时奖励：</strong>参与者凭社交媒体打卡截图到任意门店可兑换“世界运动会限量版徽章”及地域化体验“瑞幸地图”。地图将有中英双语构成，将标明成都著名文化景点，帮助蓉城文化走向世界。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>杯套设计将融合世运会场馆、各赛区运动简介、成都景点地图与区域限定杯身设计，实现 “为你燃动整个成都！”</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base">品牌战略价值：</h3>
                  <p>塑造“生活连接器”与“文化沟通桥梁”形象，打入运动能量市场，提升国际影响力及企业社会责任。</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900/50 p-8 border-t border-neutral-900">
              <iframe
                src="/marketing/advertising pitch.pdf#toolbar=1"
                className="w-full h-[600px] rounded-xl border border-neutral-900"
                title="Advertising Pitch"
              />
            </div>
          </div>
        </motion.div>

        {/* Tangle Angel Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Tangle Angel 品牌内容种草</h2>
            <div className="w-32 h-px bg-gradient-to-r from-[#CCFF00]/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="bg-[#090909] border border-neutral-900 rounded-3xl overflow-hidden group">
              <div className="p-4 border-b border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={18} className="text-[#CCFF00]" />
                    <span className="text-sm font-semibold">小红书种草规划</span>
                  </div>
                  <a
                    href="/marketing/TA/1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    <span>查看原图</span>
                  </a>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  产品与内容置换维持品牌热度，种草线与舆情线双线运营
                </p>
              </div>
              <a
                href="/marketing/TA/1.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/marketing/TA/1.png"
                  alt="小红书种草规划"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>

            {/* Image 2 */}
            <div className="bg-[#090909] border border-neutral-900 rounded-3xl overflow-hidden group">
              <div className="p-4 border-b border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={18} className="text-[#CCFF00]" />
                    <span className="text-sm font-semibold">竞品分析</span>
                  </div>
                  <a
                    href="/marketing/TA/2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    <span>查看原图</span>
                  </a>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  四大品牌账号运营分析与竞品对比研究
                </p>
              </div>
              <a
                href="/marketing/TA/2.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/marketing/TA/2.png"
                  alt="竞品分析"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>

            {/* Image 3 */}
            <div className="bg-[#090909] border border-neutral-900 rounded-3xl overflow-hidden group">
              <div className="p-4 border-b border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={18} className="text-[#CCFF00]" />
                    <span className="text-sm font-semibold">内容策略</span>
                  </div>
                  <a
                    href="/marketing/TA/44caca7a3381b99f63a677d99b1f4ba1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    <span>查看原图</span>
                  </a>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  围绕产品功能、颜值、情绪价值等特性展开的种草策划
                </p>
              </div>
              <a
                href="/marketing/TA/44caca7a3381b99f63a677d99b1f4ba1.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/marketing/TA/44caca7a3381b99f63a677d99b1f4ba1.png"
                  alt="内容策略"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>

            {/* PDF Brief */}
            <div className="bg-[#090909] border border-neutral-900 rounded-3xl overflow-hidden">
              <div className="p-4 border-b border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-[#CCFF00]" />
                    <span className="text-sm font-semibold">内容种草brief</span>
                  </div>
                  <a
                    href="/marketing/TA/Tangle Angel 内容种草brief.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    <span>查看PDF</span>
                  </a>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  围绕种草方向展开的内容创作brief文档
                </p>
              </div>
              <div className="p-6">
                <iframe
                  src="/marketing/TA/Tangle Angel 内容种草brief.pdf#toolbar=1"
                  className="w-full h-[400px] rounded-xl border border-neutral-900"
                  title="Tangle Angel 内容种草brief"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-mono">
          <span>© 2026 DENG YUANUAN PORTFOLIO</span>
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            <ArrowLeft size={14} />
            <span>返回</span>
          </button>
        </div>
      </div>
    </div>
  );
}
