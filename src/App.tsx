/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import BentoAbout from './components/BentoAbout';
import Experience from './components/Experience';
import SkillsMarquee from './components/SkillsMarquee';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import DataAnalysisDetail from './components/DataAnalysisDetail';
import ContentCreationDetail from './components/ContentCreationDetail';
import { profileData } from './data';
import { SkillItem } from './types';

export type DetailType = 'marketing' | 'data' | 'content' | null;

export default function App() {
  const [detailType, setDetailType] = useState<DetailType>(null);

  const handleSkillClick = (skill: SkillItem) => {
    if (skill.name === '营销策划') {
      setDetailType('marketing');
      window.scrollTo(0, 0);
    } else if (skill.name === '数据分析') {
      setDetailType('data');
      window.scrollTo(0, 0);
    } else if (skill.name === '内容创作') {
      setDetailType('content');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setDetailType(null);
    setTimeout(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (detailType === 'marketing') {
    return <ProjectDetail onBack={handleBack} />;
  }

  if (detailType === 'data') {
    return <DataAnalysisDetail onBack={handleBack} />;
  }

  if (detailType === 'content') {
    return <ContentCreationDetail onBack={handleBack} />;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-[#CCFF00] selection:text-black cursor-none overflow-x-hidden antialiased noise">
      {/* Visual Ambient Elements & Grid Overlays to represent "Liquid Void" */}
      <div className="fixed inset-0 bg-[#050505] -z-20 pointer-events-none" />
      
      {/* Mesh Noise overlay gradient background style */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] -z-10 pointer-events-none" />

      {/* Grid Pattern overlays */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] -z-10 pointer-events-none opacity-40" />

      {/* Subtle floating animated neon light balls */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Master Interactive Cursor */}
      <CustomCursor />

      {/* Portfolio Layout Sections */}
      <Hero data={profileData} />
      
      <BentoAbout data={profileData} />
      
      <Experience data={profileData} />
      
      <SkillsMarquee data={profileData} onSkillClick={handleSkillClick} />
      
      <Footer data={profileData} />
    </div>
  );
}
