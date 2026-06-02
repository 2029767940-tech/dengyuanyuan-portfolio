/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProfileData } from './types';

export const profileData: ProfileData = {
  name: "邓源媛",
  englishName: "Yuanuan Deng",
  title: "品牌策划 & 市场营销专家",
  subtitle: "",
  phone: "19382120785",
  email: "2029767940@qq.com",
  cities: ["上海","成都", "杭州", "深圳"],
  avatar: "/photos/IMG_6376.JPG",
  stats: [
    { label: "年级综测排名", value: "Top 10%" },
    { label: "头部互联网、4A公司实习", value: "3 段" },
    { label: "达人合作爆文", value: "8+ 条" },
    { label: "学生组织工作经历", value: "12 年" }
  ],
  education: {
    school: "成都大学 & 英国斯特灵大学",
    degree: "网络与新媒体 (中外合作办学) · 本科",
    period: "2022.09 - 2026.06",
    ranking: "年级综测排名年级前 10%",
    courses: [
      "广告学概论", "大众传播学", "新媒体短视频创作", 
      "新媒体产品设计与项目管理", "新媒体艺术", 
      "商业分析与市场营销", "数据可视化方法与实践"
    ],
    awards: [
      "国家励志奖学金",
      "第九届中国数据新闻大赛 四川省二等奖 & 全国优秀奖",
      "第十五届蓝桥杯视觉艺术设计大赛 视频赛道优秀奖",
      "成都大学优秀学生干部",
      "成都大学三好学生"
    ]
  },
  experiences: [
    {
      id: "exp-1",
      period: "2025.08 - 2025.09",
      company: "蓝色光标 (BlueFocus)",
      role: "市场营销助理",
      tags: ["SWOT分析", "竞品4P", "KOL建联", "SOP沉淀"],
      bulletPoints: [
        "参与云南白药天颐清一清品牌推广项目，对 40+ 竞品进行 4P（产品、价格、渠道、推广）及 SWOT 分析，高效输出分析报告",
        "根据品牌特色与转化需求调配资源，筛选并建联匹配的 KOC/KOL，独立撰写 Brief 并审核作品，把控达人合作全链路",
        "复盘 9 月 116 条种草内容，洞察发现测评类互动高出均值 15%，上调占比并沉淀图文达人运营 SOP"
      ]
    },
    {
      id: "exp-2",
      period: "2025.06 - 2025.08",
      company: "上海璞康数据科技有限公司",
      role: "小红书营销策划",
      tags: ["FOFOS", "爆文孵化", "品牌人设", "玄学桃花梳"],
      bulletPoints: [
        "负责新锐宠物品牌 FOFOS 在小红书的 KOL 选号、对接及复盘。孵化 7 条小红书爆文、1 条抖音 200w+ 播放量爆文，销量转化显著",
        "主导雀巢品牌小红书人设号（出镜拍摄、文案等），打造独特人设，月度阅读量突破 1.3w+",
        "深度参与 Tangle Angel（天使梳）Q3 营销，针对七夕情感诉求提出「玄学桃花梳」创意营销，完成小红书推广闭环"
      ]
    },
    {
      id: "exp-3",
      period: "2025.02 - 2025.04",
      company: "网易传媒科技有限公司",
      role: "新媒体运营与增长",
      tags: ["从0到1", "MBTI职场", "曝光增长", "社群引流"],
      bulletPoints: [
        "结合网易旗下小蜜蜂 APP 特色内容，从 0 搭建高粘度个人自媒体矩阵，为 APP 提供高质量私域引流",
        "狙击小红书高热话题，提炼「MBTI 极速职场黑客」定位，通过选题结构分析和场景痛点拆解，探索差异化成长方向",
        "通过多维数据复盘锁定流量黄金时段，首周作品自然曝光量 3.1w+，互动率大幅领跑，达成目标考核 146%"
      ]
    },
    {
      id: "exp-4",
      period: "2025.03 - 2025.05",
      company: "快手互联网信息有限公司",
      role: "商业化广告运营",
      tags: ["高频风控", "正确率 98%", "案例库建设", "流程加速"],
      bulletPoints: [
        "秒级掌握平台商业广告投放合规政策与核心机制，短时间内全盘熟悉内容安全与转化审核全套链路",
        "归纳业务高频盲区，自发搭建「行业敏感风控词库 + 经典判例库」，促使全组双周内审核提效且准确率增幅达 28%",
        "单日流畅处理商业广告视频/图文 800+ 条，保持平均 98% 的极高审核正确率，有力支撑高强度大盘投放"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      period: "2024.09 - 2024.12",
      name: "第九届中国数据新闻大赛",
      role: "团队队长",
      achievements: [
        "主导《中国医疗资源差异化下的中转桥梁——数说中国双向转诊制度》硬核数据可视化报道",
        "完成 1062 组结构化数据清洗治理，并就 300 份实地及线上患者问卷进行全流程调研分析，确立患者诉求导向",
        "在学界赛道 2000 多支名校角逐中脱颖而出，一举斩获四川省二等奖、全国总决赛优秀奖（Top 10% 顶尖序列）"
      ]
    },
    {
      id: "proj-2",
      period: "2023.06 - 2023.08",
      name: "第31届世界大学生运动会",
      role: "语言联络官",
      achievements: [
        "作为语言类志愿者服务于国际大体联成员，为来自英国、荷兰等地区的3名国际大体联成员提供接机、入住安排及日常行程协调等全方位服务，包含专业翻译、行程预定及事务协助等工作",
        "作为文化交流桥梁，向国际大体联成员介绍蓉城历史文化背景，增强其在赛会期间的归属感与文化体验，因表现突出获得优秀志愿者表彰"
      ]
    },
    {
      id: "proj-3",
      period: "2024.09 - 2024.12",
      name: "成都大学易班工作站宣传口",
      role: "工作站活动部主席",
      achievements: [
        "全面负责学校思政校园活动与易班自媒体内容发布，领导百人规模的学生运营与文创团队",
        "颠覆性引入当下流行的「沉浸式剧本杀」线下实景模式，举办多场新型红色思政实景活动，活动综合满意度高达 98.9%"
      ]
    }
  ],
  skills: [
    {
      name: "营销策划",
      description: "具备敏锐的行业敏感度，熟练掌握4P与SWOT模型，具备成熟的Brief撰写与KOL矩阵运营方法论。点击查看品牌营销案例。",
      imagePlaceholder: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=600&h=400",
      targetUrl: "#",
      isClickable: true
    },
    {
      name: "数据分析",
      description: "基于EXCEL Vlookup等函数快速进行数据分析，擅长将复杂的学术与社会报告图形化表达。点击查看营销数据分析案例。",
      imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
      targetUrl: "#",
      isClickable: true
    },
    {
      name: "内容创作",
      description: "精通新媒体创意内容创作，具备视频创作、新媒体运营、海报设计能力，熟练使用剪映、可画、Figma等设计软件。点击查看完整内容案例。",
      imagePlaceholder: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400",
      targetUrl: "#",
      isClickable: true
    }
  ],
  socials: [
    { platform: "邮箱", username: "2029767940@qq.com", url: "mailto:2029767940@qq.com" },
    { platform: "简历电话", username: "19382120785", url: "tel:19382120785" }
  ],
  bentoItems: [
    {
      id: "bento-1",
      title: "个人优势",
      type: "advantages",
      content: "",
      highlight: false,
      advantages: [
        {
          title: "专业优势",
          items: [
            {
              title: "良好的数据运用、分析能力",
              description: "能熟练使用Excel进行数据整理，曾参加第九届数据新闻大赛，通过历年获奖作品分析与流程拆解最终获得四川省二等奖、全国总决赛优秀奖"
            },
            {
              title: "较强的媒介营销、运营素养",
              description: "具备Tangle Angel、云南白药等品牌营销推广经验，对热点内容敏感，熟悉平台内容创作要求，具备良好的撰稿、图文编辑、视频剪辑能力"
            }
          ]
        },
        {
          title: "个人优势",
          items: [
            {
              title: "良好的主观能动性、学习力、执行力",
              description: "自发性组建团队参加视觉艺术设计大赛等10+视频类专业性赛事，基于获奖作品分析设立团队目标并进行创作流程规划，获得省级及以上奖项3项，具备清晰的目标规划与执行力"
            },
            {
              title: "强责任心、良好的交流沟通、团队合作能力",
              description: "14年学生组织工作经验，担任校级部门活动口主席，曾完成10+校级活动策划，影响1000余人，擅长跨部门沟通、协作与多项目管理"
            }
          ]
        }
      ]
    },
    {
      id: "bento-2",
      title: "意向城市",
      type: "city",
      content: "上海 · 杭州 · 深圳",
      subtitle: "愿意拥抱最具活力与创意思维的超级都市，即刻到岗",
      highlight: true
    },
    {
      id: "bento-3",
      title: "年级排名",
      type: "metric",
      content: "Top 10%",
      subtitle: "连续数年学年排名。严谨的学术思维搭配出众的实地投放把控",
      highlight: false
    },
    {
      id: "bento-4",
      title: "专业课程",
      type: "metric",
      content: "广告学概论，大众传播学，新媒体短视频创作，新媒体产品设计与项目管理，新媒体艺术，商业分析与市场营销，数据可视化方法与实践",
      subtitle: "",
      highlight: false
    },
    {
      id: "bento-5",
      title: "荣誉奖项",
      type: "text",
      content: "国家励志奖学金，第九届中国数据新闻大赛四川省二等奖，成都大学优秀学生干部，成都大学三好学生",
      highlight: true
    }
  ]
};
