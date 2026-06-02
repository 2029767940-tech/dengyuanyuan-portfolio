/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, FileText, BarChart3 } from 'lucide-react';

interface DataAnalysisDetailProps {
  onBack: () => void;
}

export default function DataAnalysisDetail({ onBack }: DataAnalysisDetailProps) {
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
            <span className="text-[#CCFF00] font-mono text-xs tracking-widest">数据分析</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
            <span className="text-[#CCFF00]">营销数据</span>分析案例
          </h1>
          <p className="text-neutral-400 mt-4 text-lg max-w-2xl">
            Templates Today 用户行为与交易数据分析
          </p>
        </motion.div>

        {/* Data Analysis Section */}
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
                    <h2 className="text-2xl font-bold">Templates Today营销数据分析报告</h2>
                    <p className="text-neutral-500 text-sm">Templates Today营销数据分析.pdf</p>
                  </div>
                </div>
                <a
                  href="/data analyse/Templates Today营销数据分析.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#CCFF00] text-black font-bold rounded-xl hover:bg-white transition-all cursor-none interactive-hover"
                >
                  <ExternalLink size={16} />
                  <span>查看PDF</span>
                </a>
              </div>
              
              {/* Analysis Content */}
              <div className="space-y-6 text-neutral-400 text-sm leading-relaxed">
                <p className="text-base">
                  TemplatesToday 是一家知识交流公司，专注于弥合学术营销与营销实践之间的差距。针对学术出版周期冗长、落地性差的问题，他们通过组织营销课程、社交活动、研讨会（含线下、线上及虚拟现实会议），为全球营销人员与营销研究者提供交流平台，致力于成为营销领域首选的学习供应商。
                </p>
                <p className="text-base">
                  该文档基于Templates Today的用户行为与交易数据，围绕下载—转化关系、内容偏好、地域分布及用户分群四个维度展开分析：
                </p>

                {/* Section 1: Content & Product Performance */}
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base flex items-center gap-2">
                    <BarChart3 size={18} />
                    1、内容与产品表现
                  </h3>
                  <ul className="space-y-2 pl-4 border-l-2 border-[#CCFF00]/20">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>白皮书下载量不代表最终购买量（图1），但购买量高的地区通常下载量也更大（图2），说明下载是<strong className="text-[#F0F0F0]">必要非充分条件</strong>。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>下载量最高的内容类型为<strong className="text-[#CCFF00]">"方法论"</strong>、<strong className="text-[#CCFF00]">"营销情报"</strong>及<strong className="text-[#CCFF00]">"2022年营销趋势"</strong>（图3）。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>不同市场中，<strong className="text-[#CCFF00]">"营销策略模板"</strong>与<strong className="text-[#CCFF00]">"数据智能课程"</strong>为最畅销的服务产品（图4）。</span>
                    </li>
                  </ul>
                </div>

                {/* Section 2: Core Market */}
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base flex items-center gap-2">
                    <BarChart3 size={18} />
                    2、核心市场锁定
                  </h3>
                  <ul className="space-y-2 pl-4 border-l-2 border-[#CCFF00]/20">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span><strong className="text-[#F0F0F0]">意大利</strong>消费者购买服务的比例达<strong className="text-[#CCFF00]">91%</strong>（图5），是该品牌最具价值的目标市场，后续策略应向其倾斜。</span>
                    </li>
                  </ul>
                </div>

                {/* Section 3: User Segmentation */}
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base flex items-center gap-2">
                    <BarChart3 size={18} />
                    3、用户分群与行为差异
                  </h3>
                  <ul className="space-y-2 pl-4 border-l-2 border-[#CCFF00]/20">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>用户可划分为三类：<strong className="text-[#CCFF00]">IT从业者</strong>、<strong className="text-[#CCFF00]">中层管理者</strong>、<strong className="text-[#CCFF00]">旅行爱好者</strong>。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span><strong className="text-[#F0F0F0]">旅行类用户</strong>页面停留时间最长，但<strong className="text-[#F0F0F0]">IT与中层管理者</strong>消费能力更强，更倾向于直接交易（图6-8）。</span>
                    </li>
                  </ul>
                </div>

                {/* Section 4: User Portrait */}
                <div className="space-y-3">
                  <h3 className="text-[#CCFF00] font-bold text-base flex items-center gap-2">
                    <BarChart3 size={18} />
                    4、典型画像与痛点
                  </h3>
                  <ul className="space-y-2 pl-4 border-l-2 border-[#CCFF00]/20">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span>以旅行类用户为例（<strong className="text-[#F0F0F0]">25岁，德国，本科</strong>），追求性价比与视觉内容。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✦</span>
                      <span><strong className="text-[#F0F0F0]">痛点</strong>：信息碎片化、政策变动快，期望通过模板工具实现高效规划。</span>
                    </li>
                  </ul>
                </div>

                {/* Strategy Recommendations */}
                <div className="space-y-4 mt-8 pt-8 border-t border-neutral-800">
                  <h3 className="text-[#CCFF00] font-bold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CCFF00] rounded-full" />
                    策略建议
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                      <p className="text-xs font-mono text-neutral-500 mb-2">意大利市场</p>
                      <p className="text-sm">采用本地语言，在WhatsApp、Facebook、Instagram上联合KOL投放。</p>
                    </div>
                    <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                      <p className="text-xs font-mono text-neutral-500 mb-2">旅行用户</p>
                      <p className="text-sm">推出低价轻量化产品，降低决策门槛。</p>
                    </div>
                    <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                      <p className="text-xs font-mono text-neutral-500 mb-2">IT与中层管理用户</p>
                      <p className="text-sm">通过邮件推荐高频购买服务并提供"一键订阅"功能，压缩交易时间成本。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* PDF Preview */}
            <div className="bg-neutral-900/50 p-8 border-t border-neutral-900">
              <iframe
                src="/data analyse/Templates Today营销数据分析.pdf#toolbar=1"
                className="w-full h-[600px] rounded-xl border border-neutral-900"
                title="Templates Today营销数据分析"
              />
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
