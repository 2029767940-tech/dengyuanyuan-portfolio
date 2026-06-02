/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  tags: string[];
  bulletPoints: string[];
}

export interface Project {
  id: string;
  period: string;
  name: string;
  role: string;
  achievements: string[];
}

export interface SkillItem {
  name: string;
  description: string;
  imagePlaceholder: string; // generated visual art or visual link
  targetUrl: string; // project detail link or mock detail behavior
  isClickable?: boolean; // whether clicking opens internal detail page
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

export interface AdvantageCategory {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface ProfileData {
  name: string;
  englishName: string;
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  cities: string[];
  avatar: string;
  stats: {
    label: string;
    value: string;
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
    ranking: string;
    courses: string[];
    awards: string[];
  };
  experiences: Experience[];
  projects: Project[];
  skills: SkillItem[];
  socials: SocialLink[];
  bentoItems: {
    id: string;
    title: string;
    type: 'metric' | 'text' | 'visual' | 'city' | 'advantages';
    content: string;
    subtitle?: string;
    highlight?: boolean;
    advantages?: AdvantageCategory[];
  }[];
}
