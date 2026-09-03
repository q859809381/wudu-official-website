const SOLUTIONS = {
  shujuzhili: {
    file: "shujuzhili.html",
    title: "数据治理解决方案",
    tagline: "构建全生命周期数据治理体系",
    description: "为用户构建高质量产业数据底座，提供数据质量诊断、数据治理体系建设、数据标准化处理、数据管理平台建设的一站式数据治理服务，让数据“找得到、看得懂、用得上”。",
    visual: "governance",
    tabs: [
      ["背景痛点", "sjzl-background"],
      ["方案架构", "sjzl-architecture"],
      ["应用价值", "sjzl-value"]
    ],
    sections: [
      {
        id: "sjzl-background",
        label: "为什么需要数据治理",
        title: "在数字化转型的浪潮中，企业面临着数据管理的诸多挑战，需全面的数据治理解决方案",
        items: [
          ["数据分散难以整合", "数据分散于各业务系统，管理流程不规范，缺乏跨部门协同机制，形成数据孤岛，导致数据管理效率低下。", "data"],
          ["数据质量参差不齐", "数据标准不统一，数据格式、编码、命名规则不规范，数据质量差，缺乏体系化管理，导致数据难以利用。", "quality"],
          ["数据安全与合规风险", "数据安全隐患、隐私泄露风险、合规性挑战等问题日益突出，亟需建立完善的数据安全治理体系。", "shield"],
          ["数据价值难以释放", "数据与业务场景脱节，缺乏深度分析和挖掘能力，无法为业务决策提供有效支持，数据价值未被充分发挥。", "value"]
        ]
      },
      {
        id: "sjzl-architecture",
        label: "全面的数据治理解决方案",
        title: "提供端到端的数据治理解决方案，帮助企业构建完整的数据治理体系，实现数据价值最大化",
        items: [
          ["数据现状调研", "全面摸排数据现状，明确数据基本信息、归属主体及关联关系，梳理数据核心问题，输出数据盘点文档。", "survey"],
          ["治理体系设计", "搭建数据治理规范框架，明确数据标准、清洗、质量三大体系要求，制定配套规范文件，规范全流程数据管理。", "layers"],
          ["数据标准化", "对照治理体系要求，统一数据口径、格式及编码规则，规范数据分类分级，实现数据统一规范。", "standards"],
          ["数据治理核验", "围绕数据标准、数据质量两大核心维度开展全面核验，输出核验报告；对未达标数据实施整改，形成闭环管控；通过数据加工后落地应用、转化数据价值。", "check"]
        ]
      },
      {
        id: "sjzl-value",
        label: "数据治理的价值",
        title: "有效的数据治理为企业带来多方面的价值和收益",
        items: [
          ["提高数据可用性", "打破孤岛，实现数据 “找得到、看得懂、用得上”，构建统一规范的数据底座。", "available"],
          ["降低运营成本", "通过优化数据管理流程，减少数据重复存储和处理，降低数据管理成本和IT运维成本。", "cost"],
          ["降低合规风险", "建立完善的数据治理体系，确保数据合规使用，降低数据泄露和合规违规风险。", "safe"],
          ["赋能实体业务", "以实体业务流程及用数需求为映射，提升数据应用价值，赋能企业数字化转型升级，驱动企业经营生产提质增效。", "business"]
        ]
      }
    ]
  },
  chanyelian: {
    file: "chanyelian.html",
    title: "产业链上链解决方案",
    tagline: "构建可视化产业链，赋能产业精准分析与决策",
    description: "为用户提供产业链梳理、产业链图谱建设、企业标准上链服务，实现产业链从“不可见”到“可见”再到“可分析”，为产业规划、招商引资提供精准导航。",
    visual: "chain",
    tabs: [
      ["核心痛点", "core-pain-points"],
      ["解决方案", "solution"],
      ["核心模块", "core-modules"],
      ["方案价值", "solution-value"]
    ],
    sections: [
      {
        id: "core-pain-points",
        label: "核心痛点",
        title: "产业链信息割裂、协同效率低下，数据孤岛阻碍价值流转",
        items: [
          ["产业数据获取困难", "产业链数据分散在企业、知识产权、资质等多维度，缺乏统一标准梳理与整合，难以获取完整准确的产业链数据", "data"],
          ["数据更新效率低下", "传统人工调研无稳定更新机制，信息时效性差，数据难以支撑产业分析、招商决策、政策制定等实际应用", "refresh"],
          ["产业梳理专业不足", "缺乏对产业链上中下游结构、核心环节、行业规则进行深度拆解，无法为补链强链提供精准支撑。", "research"],
          ["产业链可视化缺失", "产业链环节、企业分布、关联逻辑等信息无直观可视化展示形式，数据可读性低，难以快速洞察产业全景、优势/弱势/断链环节", "network"]
        ]
      },
      {
        id: "solution",
        label: "解决方案",
        title: "搭建一体化区块链上链平台，打通全链路数据节点，实现信息可信共享",
        layout: "process",
        intro: "笃威尔依托全量数据基础、标准上链工具、专业产业研究、定制开发能力四大核心能力，打造从产业链数据梳理→标准化上链→产业图谱可视化展示→数据输出落库的全流程产业链上链定制化服务，以“标准化上链、可视化呈现、精准化应用”为核心目标，为客户构建统一、鲜活、专业的产业链数据体系。",
        items: [
          ["产业链深度梳理", "通过解构-识别-梳理三步闭环完成产业链深度梳理，锚定核心数据、明确关联关系、梳理产业逻辑", "research"],
          ["标准化上链", "通过标准化工具实现产业链全链路数据统一上链，形成规范数据底座，建立特定数据更新制度", "link"],
          ["可视化呈现", "输出产业图谱（基础版/定制版）、上链企业清单两大核心成果，实现产业数据多维度可视化呈现", "chart"],
          ["数据交付应用", "提供全场景数据交付与可视化系统开发两种交付方式，支持与客户现有系统对接", "export"]
        ],
        foundation: [
          ["全量数据基", "依托海量企业数据库，覆盖全国各地区、各行业企业信息，为产业链分析提供全面数据支撑。", "database"],
          ["标准化上链工具", "自主研发的产业链数据上链工具，实现数据标准化处理、关联关系构建和持续更新维护。", "tool"],
          ["专业产业研究", "拥有资深产业研究团队，深入理解各行业发展规律和产业链结构，提供专业的产业分析服务。", "research"],
          ["定制开发能力", "根据客户需求提供个性化解决方案，包括数据维度定制、可视化界面定制和系统集成开发。", "code"]
        ]
      },
      {
        id: "core-modules",
        label: "核心模块",
        title: "涵盖数据采集上链、可视化展示、模块适配等核心功能",
        modules: [
          ["产业链梳理", ["搭建“上游-中游-下游”通用框架，锚定各环节核心数据维度，细剖核心要素与关联关系", "开展产业环节深度调研，绘制产业关系图谱，识别关键数据项并生成标准化上链清单", "深挖行业通用规则，打通全链路数据关联逻辑, 形成可追溯、可验证、可管控的产业数据关联体系"], "network"],
          ["企业上链", ["产业链全链路数据（企业、知识产权、资质、政策等）标准化接入", "匹配上链规则生成目标产业企业清单并补充企业基础信息", "建立月度数据更新制度，保障数据持续鲜活，构建统一的产业链数据上链底座"], "link"],
          ["一图一库", ["支持按产业环节、区域、规模等通用维度可视化，节点可下钻至细分层级，提供基础交互查询", "整合企业基本信息、产业评分、招商可行性、资质荣誉等数据，支持多维度筛选、排序、导出，清晰展示企业与产业链环节的匹配关系", "以“一图一库（一个产业链图谱+对应企业清单及基础信息数据库）”为核心，提供灵活交付方式，适配客户多样化应用需求"], "map"],
          ["定制化适配", ["针对客户个性化需求提供全流程定制服务", "业链环节拆解规则定制、特色数据字段补充、可视化界面定制、系统对接开发", "支持与ERP/CRM/自研系统等现有平台通过API接口无缝集成，同时可定制上链规则、筛选体系、交互功能，贴合客户产业布局与实际业务场景"], "code"]
        ]
      },
      {
        id: "solution-value",
        label: "方案价值",
        title: "提效产业链协作，降低信任成本，释放数据要素价值",
        items: [
          ["数据层面", "统一梳理产业链多维数据并标准化上链，解决数据分散问题，构建完整准确、可复用拓展的产业数据资产。", "data"],
          ["产业层面", "可视化产业图谱清晰呈现上下游结构与企业分布，助力定位补位节点，优化产业生态，推动区域产业高质量发展。", "chart"],
          ["决策层面", "为政府提供精准数据支撑以高效招商，为企业梳理上下游资源、挖掘伙伴，降低协作成本，助力产业布局。", "decision"]
        ]
      }
    ]
  },
  zhaoshang: {
    file: "zhaoshang.html",
    title: "产业精准招商解决方案",
    tagline: "提供“定方向-选对象-管过程”全链路数智招商服务",
    description: "针对产业分析模糊、招商目标不明确、企业价值难评估等传统招商模式痛点，提供定方向、选对象、管过程全流程招商服务，实现招商目标精准锁定、全过程管控、决策数据化。",
    visual: "investment",
    tabs: [
      ["核心痛点", "cylzs-points"],
      ["方案架构", "cylzs-solution"],
      ["方案价值", "cylzs-value"],
      ["客户价值", "cylzs-customer"]
    ],
    sections: [
      {
        id: "cylzs-points",
        label: "核心痛点",
        title: "产业链信息割裂、协同效率低下，数据孤岛阻碍价值流转",
        items: [
          ["产业分析不深入", "依赖第三方静态报告, 仅覆盖头部企业, 数据滞后单一, 无法支撑产业动态研判。", "research"],
          ["招商目标不明确", "线索获取依赖线下渠道，缺乏精准筛选，无法识别投资意愿，无效拜访率高。", "target"],
          ["企业背景不清楚", "外部企业数据获取有限，缺乏核心经营与投资意向数据，难以完成深度尽调。", "company"],
          ["招商内部数据孤岛", "全流程数据分散于各系统，缺乏统一平台，无法支撑过程监控与资源统筹。/弱势/断链环节", "data"]
        ]
      },
      {
        id: "cylzs-solution",
        label: "我们的解决方案",
        title: "通过数字化技术和大数据分析，实现招商工作的精准化、透明化和数据化，提高招商效率和质量",
        items: [
          ["精准定位目标企业", "基于产业链分析和大数据筛选，识别符合当地产业发展需求的目标企业，提高招商命中率。", "target"],
          ["全面掌握企业信息", "整合多源数据，构建完整的企业画像，深入了解企业的实力、潜力和投资意向。", "company"],
          ["全程可视化管理", "招商项目全流程数字化管理，实时跟踪项目进展，提高协作效率和透明度。", "flow"],
          ["数据驱动决策", "基于数据分析和智能算法，为招商决策提供依据，提高决策的准确性和前瞻性。", "decision"]
        ],
        architectureTitle: "解决方案架构",
        architecture: [
          ["定方向", "产业链“百科全书”，洞察全局本地优劣势分析，看清现状、定准方向", "compass"],
          ["选对象", "潜力企业识别、招商目标精准推荐、企业背景核查", "target"],
          ["管过程", "招商线索管理、拜访记录跟踪、项目进度管控", "flow"]
        ]
      },
      {
        id: "cylzs-value",
        label: "方案价值",
        title: "为招商工作带来三大转变",
        items: [
          ["从“大海捞针”到“精准定位”", "通过大数据分析和智能匹配算法，精准识别符合当地产业发展需求的目标企业，提高招商命中率，降低无效招商成本。", "target"],
          ["从“粗放管控”到“精细化管理”", "招商项目全流程数字化管理，实时跟踪项目进展，提高协作效率和透明度，确保招商工作规范有序开展。", "flow"],
          ["从“经验判断”到“数据支撑”", "基于大数据分析和智能算法，为招商决策提供科学依据，提高决策的准确性和前瞻性，降低招商风险。", "decision"]
        ]
      },
      {
        id: "cylzs-customer",
        label: "客户收益",
        title: "",
        metrics: [
          ["90%", "目标企业匹配"],
          ["75%", "招商周期缩短"],
          ["89%", "项目落地率提升"],
          ["60%", "招商成本率降低"]
        ]
      }
    ]
  }
};

const solution = SOLUTIONS[document.body.dataset.solution] || SOLUTIONS.shujuzhili;
const solutionIconPaths = {
  brand: '<path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m12 6 5 3v6l-5 3-5-3V9l5-3Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m7 9 5 3 5-3" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  chevron: '<path d="m7 9 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  arrow: '<path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  link: '<path d="m9.5 14.5 5-5M7.2 17.8l-1.4 1.4a3.3 3.3 0 0 1-4.7-4.7l4.1-4.1a3.3 3.3 0 0 1 4.7 0M16.8 6.2l1.4-1.4a3.3 3.3 0 0 1 4.7 4.7l-4.1 4.1a3.3 3.3 0 0 1-4.7 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  chart: '<path d="M5 19V9M12 19V5M19 19v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 19h18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  phone: '<path d="M7 3.5 10 7l-2 2.1c1.2 2.5 3 4.3 5.5 5.5l2-2 3.5 3c.5.5.5 1.2.1 1.8l-1.2 1.7c-.5.7-1.4 1-2.2.8C8.2 18.1 5.9 15.8 4.1 8.3c-.2-.8.1-1.7.8-2.2L6.6 4c.6-.4 1.3-.4 1.8.1Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  message: '<path d="M5 5.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-4.5 3v-3H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.5 11.5h.1M12 11.5h.1M16.5 11.5h.1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  top: '<path d="M12 20V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  databaseSmall: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 12h8M12 8v8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  data: '<path d="M5 19V9M12 19V5M19 19v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 19h18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  quality: '<path d="M12 3 19 6v5c0 4.5-2.8 7.5-7 10-4.2-2.5-7-5.5-7-10V6l7-3Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  shield: '<path d="M12 3 19 6v5c0 4.5-2.8 7.5-7 10-4.2-2.5-7-5.5-7-10V6l7-3Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 12h6M12 9v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  value: '<path d="m5 16 4-4 3 3 7-8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h4v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  survey: '<rect x="5" y="3.5" width="14" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 8h8M8 12h5M8 16h7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  layers: '<path d="m12 4 8 4-8 4-8-4 8-4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  standards: '<path d="M5 5h14v14H5z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8 12 2.5 2.5L16 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8 12 2.6 2.6L16 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  refresh: '<path d="M19 8.5A7.5 7.5 0 0 0 5.2 7L3.5 9M3.5 5v4h4M5 15.5A7.5 7.5 0 0 0 18.8 17l1.7-2M20.5 19v-4h-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  research: '<circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m15 15 5 5M8 10.5h5M10.5 8v5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  network: '<circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.2 11 7.5-4M8.2 13l7.5 4" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  export: '<path d="M12 4v10M8 8l4-4 4 4M5 13v5h14v-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  tool: '<path d="m14.5 6.5 3-3 3 3-3 3M4 20l6.8-6.8M13 11l-3-3-6 6 3 3 6-6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  map: '<path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  decision: '<path d="M12 4v5M12 15v5M4 12h5M15 12h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="4" r="1.7" fill="currentColor"/><circle cx="12" cy="20" r="1.7" fill="currentColor"/><circle cx="4" cy="12" r="1.7" fill="currentColor"/><circle cx="20" cy="12" r="1.7" fill="currentColor"/>',
  target: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  company: '<circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5M4 11h3M17 11h3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  flow: '<circle cx="5" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="19" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="19" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m7.5 11 9-4M7.5 13l9 4" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  compass: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'
};

const icon = (name, className = "") => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${solutionIconPaths[name] || solutionIconPaths.grid}</svg>`;
const productNav = '<a href="ai.html">「五度妙笔」AI智能报告生成专家</a><a href="qiyefenxi.html">「企业透视镜」企业全景分析报告</a><a href="api.html">「API商城」企业信息API接口平台</a><a href="cha.html">「五度易查」企业信息查询平台</a><a href="chanye.html">「产业大脑」产业智能分析平台</a><a href="zs.html">「智慧招商」产业数智招商平台</a>';
const solutionNav = '<a href="shujuzhili.html">数据治理解决方案</a><a href="chanyelian.html">产业链上链解决方案</a><a href="zhaoshang.html">产业招商解决方案</a>';

const header = `<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="五度易链首页">${icon("brand", "brand-mark")}<span class="brand-text"><strong>五度易链</strong><small>产业数字化管理平台</small></span></a><button class="menu-toggle" type="button" aria-label="打开导航" aria-expanded="false"><span></span><span></span><span></span></button><nav class="main-nav" aria-label="主导航"><a class="nav-link" href="index.html">首页</a><div class="nav-dropdown-wrap menu-products"><a class="nav-link" href="products.html">产品矩阵</a><button class="dropdown-toggle" type="button" aria-label="展开产品矩阵" aria-expanded="false" aria-haspopup="true" aria-controls="product-menu">${icon("chevron", "tiny-icon")}</button><div class="nav-dropdown" id="product-menu">${productNav}</div></div><div class="nav-dropdown-wrap menu-solutions"><a class="nav-link active" href="${solution.file}">解决方案</a><button class="dropdown-toggle" type="button" aria-label="展开解决方案" aria-expanded="false" aria-haspopup="true" aria-controls="solution-menu">${icon("chevron", "tiny-icon")}</button><div class="nav-dropdown" id="solution-menu">${solutionNav}</div></div><a class="nav-link" href="https://www.datadowell.com/case">项目案例</a><div class="nav-dropdown-wrap menu-insights"><a class="nav-link" href="https://info.datadowell.com/">行业观察</a><button class="dropdown-toggle" type="button" aria-label="展开行业观察" aria-expanded="false" aria-haspopup="true" aria-controls="insights-menu">${icon("chevron", "tiny-icon")}</button><div class="nav-dropdown" id="insights-menu"><a href="https://info.datadowell.com/">产业资讯</a><a href="https://www.datadowell.com/categories/baogao">研究报告</a></div></div><div class="nav-dropdown-wrap menu-about"><a class="nav-link" href="https://www.datadowell.com/about">关于我们</a><button class="dropdown-toggle" type="button" aria-label="展开关于我们" aria-expanded="false" aria-haspopup="true" aria-controls="about-menu">${icon("chevron", "tiny-icon")}</button><div class="nav-dropdown" id="about-menu"><a href="https://www.datadowell.com/about">公司介绍</a><a href="https://www.datadowell.com/news">企业动态</a></div></div></nav><div class="header-tools"><a href="https://ai.datadowell.com/" class="tool-link">${icon("link", "tiny-icon")}五度妙笔</a><a href="https://ai.datadowell.com/business/0" class="tool-link">${icon("chart", "tiny-icon")}企业透视镜</a><a href="https://api.datadowell.com/" class="tool-link">${icon("database", "tiny-icon")}API商城</a><a class="phone-link" href="tel:01068321050">${icon("phone", "tiny-icon")}010-68321050</a><a class="database-button" href="https://cha.datadowell.com/">${icon("database", "tiny-icon")}数据库</a></div></div></header>`;

const heroArt = (type) => {
  if (type === "chain") return `<svg class="solution-hero-art-svg" viewBox="0 0 640 430" role="img" aria-label="产业链图谱 SVG 示意"><defs><linearGradient id="chain-art-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dcecff"/><stop offset="1" stop-color="#9cc8f4"/></linearGradient></defs><rect x="18" y="20" width="604" height="390" rx="24" fill="url(#chain-art-bg)"/><circle cx="480" cy="74" r="120" fill="#fff" fill-opacity=".17"/><path d="M80 285 220 164l126 58 132-112 79 52" fill="none" stroke="#75aee8" stroke-width="2"/><path d="M80 285 220 164M220 164l126 58M346 222l132-112M478 110l79 52" stroke="#fff" stroke-width="3" stroke-linecap="round"/><g fill="#fff" stroke="#377fe1" stroke-width="3"><circle cx="80" cy="285" r="22"/><circle cx="220" cy="164" r="27"/><circle cx="346" cy="222" r="24"/><circle cx="478" cy="110" r="31"/><circle cx="557" cy="162" r="22"/></g><g fill="#327de4"><circle cx="80" cy="285" r="7"/><circle cx="220" cy="164" r="8"/><circle cx="346" cy="222" r="7"/><circle cx="478" cy="110" r="9"/><circle cx="557" cy="162" r="7"/></g><rect x="70" y="326" width="178" height="48" rx="10" fill="#fff" fill-opacity=".9"/><text x="92" y="356" fill="#2b67be" font-size="16" font-weight="700">产业链全景图谱</text><rect x="382" y="284" width="168" height="91" rx="12" fill="#fff" fill-opacity=".9"/><path d="M406 314h116M406 333h84M406 352h101" stroke="#77a5dc" stroke-width="8" stroke-linecap="round"/></svg>`;
  if (type === "investment") return `<svg class="solution-hero-art-svg" viewBox="0 0 640 430" role="img" aria-label="产业招商管理 SVG 示意"><defs><linearGradient id="investment-art-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e7f5ff"/><stop offset="1" stop-color="#b1d1ff"/></linearGradient></defs><rect x="18" y="20" width="604" height="390" rx="24" fill="url(#investment-art-bg)"/><path d="M55 344h526" stroke="#8bb8ee" stroke-width="3"/><path d="M96 344v-99h65v99M184 344v-148h84v148M287 344v-115h72v115M378 344v-176h97v176M499 344v-76h57v76" fill="#fff" fill-opacity=".9" stroke="#6ba4e3" stroke-width="2"/><path d="M112 271h34M112 292h34M203 226h46M203 248h46M203 270h46M305 252h37M305 274h37M400 211h53M400 235h53M400 259h53M512 294h31M512 315h31" stroke="#a8c9ee" stroke-width="7" stroke-linecap="round"/><circle cx="478" cy="100" r="58" fill="#fff" fill-opacity=".56" stroke="#4b89df" stroke-width="3"/><path d="M478 68v65M446 101h65" stroke="#4b89df" stroke-width="3" stroke-linecap="round"/><path d="M80 108h150M80 130h105" stroke="#fff" stroke-width="10" stroke-linecap="round"/><rect x="74" y="181" width="190" height="47" rx="10" fill="#fff" fill-opacity=".92"/><text x="97" y="211" fill="#2c6fc9" font-size="16" font-weight="700">招商全周期管理</text><path d="m504 104 16 13-16 13M520 117H465" fill="none" stroke="#2d7bdc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `<svg class="solution-hero-art-svg" viewBox="0 0 640 430" role="img" aria-label="数据治理工作台 SVG 示意"><defs><linearGradient id="governance-art-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6f5ff"/><stop offset="1" stop-color="#afcffc"/></linearGradient></defs><rect x="18" y="20" width="604" height="390" rx="24" fill="url(#governance-art-bg)"/><rect x="72" y="69" width="496" height="286" rx="16" fill="#fff" fill-opacity=".92" stroke="#9cc3ec" stroke-width="2"/><path d="M72 121h496" stroke="#c8dbf2" stroke-width="2"/><circle cx="98" cy="95" r="6" fill="#4e95ed"/><circle cx="118" cy="95" r="6" fill="#8ec4f1"/><circle cx="138" cy="95" r="6" fill="#c9ddf7"/><text x="170" y="101" fill="#326dbf" font-size="15" font-weight="700">数据治理工作台</text><rect x="98" y="153" width="124" height="163" rx="10" fill="#eef6ff"/><path d="M120 179h80M120 204h62M120 229h75M120 254h50" stroke="#7baee6" stroke-width="9" stroke-linecap="round"/><rect x="250" y="153" width="286" height="48" rx="9" fill="#f0f6ff"/><path d="M273 177h87M383 177h109" stroke="#96bce7" stroke-width="9" stroke-linecap="round"/><rect x="250" y="221" width="134" height="95" rx="10" fill="#eaf7ff"/><path d="M274 290v-35M304 290v-61M334 290v-48M364 290v-74" stroke="#3b91e9" stroke-width="17" stroke-linecap="round"/><rect x="402" y="221" width="134" height="95" rx="10" fill="#eef1ff"/><path d="M427 286 458 258l28 17 39-40" fill="none" stroke="#5a79e7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="427" cy="286" r="5" fill="#5a79e7"/><circle cx="458" cy="258" r="5" fill="#5a79e7"/><circle cx="486" cy="275" r="5" fill="#5a79e7"/><circle cx="525" cy="235" r="5" fill="#5a79e7"/></svg>`;
};

const visualShapes = {
  data: '<path d="M50 102V48M100 102V28M150 102V62M200 102V39" stroke="#3d89e8" stroke-width="16" stroke-linecap="round"/><path d="M31 108h190" stroke="#b8d1ed" stroke-width="3"/>',
  quality: '<rect x="48" y="32" width="142" height="84" rx="10" fill="#fff" stroke="#79afe7" stroke-width="3"/><path d="M70 58h98M70 79h67M70 100h82" stroke="#a6c6e9" stroke-width="8" stroke-linecap="round"/><path d="m177 91 19 19 32-39" fill="none" stroke="#2d83e5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
  shield: '<path d="M124 24 187 50v39c0 40-25 62-63 85-38-23-63-45-63-85V50l63-26Z" fill="#fff" stroke="#6ba5e3" stroke-width="3"/><path d="m94 91 21 21 40-42" fill="none" stroke="#2f82e4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  value: '<path d="m42 105 48-43 34 30 68-65" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M160 27h32v32" fill="none" stroke="#3b88e7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="42" cy="105" r="9" fill="#fff"/><circle cx="90" cy="62" r="9" fill="#fff"/><circle cx="124" cy="92" r="9" fill="#fff"/><circle cx="192" cy="27" r="9" fill="#fff"/>',
  survey: '<rect x="55" y="25" width="139" height="93" rx="9" fill="#fff" stroke="#76a9e1" stroke-width="3"/><path d="M78 52h93M78 74h64M78 96h76" stroke="#a3c3e5" stroke-width="9" stroke-linecap="round"/><circle cx="220" cy="92" r="29" fill="#fff" stroke="#3a87e6" stroke-width="4"/><path d="m210 92 8 8 15-18" fill="none" stroke="#3a87e6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  layers: '<path d="m124 26 91 42-91 42-91-42 91-42Z" fill="#fff" fill-opacity=".92" stroke="#6ea5e2" stroke-width="3"/><path d="m33 84 91 43 91-43M33 100l91 43 91-43" fill="none" stroke="#fff" stroke-width="8" stroke-linejoin="round"/>',
  standards: '<rect x="44" y="28" width="160" height="94" rx="10" fill="#fff" stroke="#75a9e3" stroke-width="3"/><path d="M70 57h105M70 82h64M70 106h83" stroke="#9cbfe3" stroke-width="8" stroke-linecap="round"/><path d="m174 89 15 15 30-36" fill="none" stroke="#3a87e6" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<circle cx="124" cy="75" r="52" fill="#fff" stroke="#71a9e5" stroke-width="4"/><path d="m92 75 22 22 43-48" fill="none" stroke="#2f82e4" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M52 118h145" stroke="#c2d9ef" stroke-width="8" stroke-linecap="round"/>',
  refresh: '<path d="M193 59a70 70 0 0 0-123-5l-22 24M47 39v39h39M55 92a70 70 0 0 0 123 5l22-24m0 39V73h-39" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  research: '<circle cx="107" cy="66" r="39" fill="#fff" stroke="#6fa6e5" stroke-width="4"/><path d="m136 96 48 34" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M90 66h34M107 49v34" stroke="#3b86e5" stroke-width="7" stroke-linecap="round"/>',
  network: '<circle cx="48" cy="76" r="19" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><circle cx="200" cy="36" r="22" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><circle cx="205" cy="112" r="22" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><path d="m66 69 111-29M66 83l117 23" stroke="#fff" stroke-width="7" stroke-linecap="round"/>',
  link: '<circle cx="71" cy="77" r="32" fill="#fff" fill-opacity=".9" stroke="#4b91e5" stroke-width="4"/><circle cx="178" cy="77" r="32" fill="#fff" fill-opacity=".9" stroke="#4b91e5" stroke-width="4"/><path d="M91 77h67" stroke="#fff" stroke-width="10" stroke-linecap="round"/>',
  chart: '<path d="M42 113V66M92 113V43M142 113V79M192 113V26" stroke="#fff" stroke-width="20" stroke-linecap="round"/><path d="M27 120h183" stroke="#b6d2ec" stroke-width="3"/>',
  export: '<path d="M124 25v73M92 67l32-42 32 42M52 103v25h144v-25" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  tool: '<path d="m151 51 31-31 29 29-31 31M40 130l55-55 32 32-55 55H40v-32Z" fill="#fff" fill-opacity=".9" stroke="#5a98e2" stroke-width="4" stroke-linejoin="round"/>',
  code: '<path d="m91 45-42 32 42 32M157 45l42 32-42 32M141 27l-27 101" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  map: '<path d="m36 38 55-17 67 17 55-17v101l-55 17-67-17-55 17V38Z" fill="#fff" fill-opacity=".8" stroke="#6ea5e2" stroke-width="3" stroke-linejoin="round"/><path d="M91 21v101M158 38v101" stroke="#8bb8e5" stroke-width="3"/>',
  decision: '<circle cx="124" cy="75" r="27" fill="#fff" stroke="#4c92e6" stroke-width="4"/><path d="M124 19v29M124 102v29M68 75H39M209 75h-29M84 35l21 21M164 95l21 21M84 115l21-21M164 55l21-21" stroke="#fff" stroke-width="7" stroke-linecap="round"/>',
  target: '<circle cx="124" cy="75" r="56" fill="#fff" fill-opacity=".85" stroke="#6ba5e4" stroke-width="4"/><circle cx="124" cy="75" r="30" fill="none" stroke="#438be4" stroke-width="7"/><circle cx="124" cy="75" r="9" fill="#438be4"/>',
  company: '<circle cx="124" cy="50" r="25" fill="#fff" stroke="#5a99e4" stroke-width="4"/><path d="M55 128c8-36 31-52 69-52s61 16 69 52" fill="#fff" fill-opacity=".85" stroke="#5a99e4" stroke-width="4" stroke-linecap="round"/>',
  flow: '<circle cx="49" cy="76" r="19" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><circle cx="198" cy="36" r="22" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><circle cx="204" cy="115" r="22" fill="#fff" stroke="#4a8fe4" stroke-width="4"/><path d="m67 68 110-27M67 84l115 23" stroke="#fff" stroke-width="7" stroke-linecap="round"/>',
  compass: '<circle cx="124" cy="75" r="57" fill="#fff" fill-opacity=".88" stroke="#6da5e1" stroke-width="4"/><path d="m153 46-21 50-50 21 21-50 50-21Z" fill="none" stroke="#3d88e5" stroke-width="7" stroke-linejoin="round"/>'
};

const cardVisual = (kind, title) => `<div class="solution-card-visual visual-${kind}" aria-label="${title}图片占位"><svg viewBox="0 0 248 150" role="img" aria-label="${title} SVG 示意"><rect x="15" y="13" width="218" height="124" rx="15" fill="rgba(255,255,255,.12)"/>${visualShapes[kind] || visualShapes.data}</svg></div>`;
const renderInfoCards = (items, className = "") => `<div class="solution-info-grid solution-info-grid-count-${items.length} ${className}">${items.map(([title, text, visual]) => `<article class="solution-info-card">${cardVisual(visual, title)}<div class="solution-card-copy"><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div>`;
const renderSectionHeading = (section) => `<div class="solution-section-heading"><h2>${section.label}</h2>${section.title ? `<h3 class="solution-section-title">${section.title}</h3>` : ""}${section.intro ? `<p class="solution-section-intro">${section.intro}</p>` : ""}</div>`;
const renderModules = (modules) => `<div class="solution-module-grid solution-module-grid-count-${modules.length}">${modules.map(([title, paragraphs, visual]) => `<article class="solution-module-card"><div class="solution-module-heading"><span>${icon(visual)}</span><h3>${title}</h3></div><ul>${paragraphs.map((paragraph) => `<li>${paragraph}</li>`).join("")}</ul></article>`).join("")}</div>`;
const renderProcess = (items) => '<div class="solution-process">' + items.map(([title, text, visual], index) => '<article class="solution-process-step"><div class="solution-process-node">' + icon(visual) + '</div><h3 class="solution-process-title">' + title + '</h3><div class="solution-process-body"><p>' + text + '</p><span>0' + (index + 1) + '</span></div>' + (index < items.length - 1 ? '<span class="solution-process-arrow">' + icon("arrow") + '</span>' : '') + '</article>').join("") + '</div>';
const renderArchitecture = (items) => `<div class="solution-architecture-grid solution-architecture-grid-count-${items.length}">${items.map(([title, text, visual], index) => `<article class="solution-architecture-card"><span class="solution-step-number">0${index + 1}</span><span class="solution-architecture-icon">${icon(visual)}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
const renderMetrics = (metrics) => `<div class="solution-metrics solution-metrics-count-${metrics.length}">${metrics.map(([value, label]) => `<article class="solution-metric"><strong>${value}</strong><span>${label}</span></article>`).join("")}</div>`;
const renderHero = () => `<section class="solution-hero solution-hero-${solution.visual}"><div class="container solution-hero-inner"><div class="solution-hero-copy"><p class="solution-eyebrow">SCENARIO SOLUTIONS</p><h1>${solution.title}</h1><p class="solution-tagline">${solution.tagline}</p><p class="solution-description">${solution.description}</p><a class="button button-primary solution-hero-button" href="#contact">在线咨询 ${icon("arrow", "button-icon")}</a></div><div class="solution-hero-visual">${heroArt(solution.visual)}</div></div></section>`;
const renderSections = () => solution.sections.map((section) => `<section class="solution-section solution-section-${section.id}" id="${section.id}"><div class="container">${renderSectionHeading(section)}${section.modules ? renderModules(section.modules) : section.metrics ? renderMetrics(section.metrics) : section.layout === "process" ? renderProcess(section.items) : renderInfoCards(section.items, section.foundation ? "solution-main-grid" : "")}${section.foundation ? `<div class="solution-foundation-grid solution-foundation-grid-count-${section.foundation.length}">${section.foundation.map(([title, text, visual]) => `<article class="solution-foundation-card"><span>${icon(visual)}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div>` : ""}${section.architecture ? `<div class="solution-subheading"><h3>${section.architectureTitle}</h3></div>${renderArchitecture(section.architecture)}` : ""}</div></section>`).join("");
const qr = (kind) => '<svg class="qr-code" viewBox="0 0 168 168" role="img" aria-label="' + kind + '二维码"><rect width="168" height="168" fill="#fff"/><g fill="#193550"><rect x="8" y="8" width="56" height="56"/><rect x="16" y="16" width="40" height="40" fill="#fff"/><rect x="24" y="24" width="24" height="24"/><rect x="104" y="8" width="56" height="56"/><rect x="112" y="16" width="40" height="40" fill="#fff"/><rect x="120" y="24" width="24" height="24"/><rect x="8" y="104" width="56" height="56"/><rect x="16" y="112" width="40" height="40" fill="#fff"/><rect x="24" y="120" width="24" height="24"/><path d="M80 8h8v16h-8zM72 32h16v8H72zM96 40h8v16h-8zM72 56h8v16h-8zM88 64h16v8H88zM112 72h8v16h-8zM128 72h24v8h-24zM152 88h8v16h-8zM80 80h16v8H80zM72 96h8v16h-8zM88 96h24v8H88zM120 96h8v16h-8zM136 104h24v8h-24zM72 120h8v24h-8zM88 120h16v8H88zM104 128h8v16h-8zM120 120h16v8h-16zM144 128h8v24h-8zM80 152h24v8H80zM112 152h16v8h-16z"/></g></svg>';
const footer = `<footer class="site-footer" id="about"><div class="container footer-grid"><div class="footer-contact" id="contact"><h3>咨询服务热线：</h3><a class="footer-phone" href="tel:01068321050">010-68321050</a><p>（工作日09:00~18:00）</p><p>公司地址：北京市丰台区广安路9号国投财富广场1号楼12层</p><p>市场合作：info@datadowell.com</p><a class="button footer-button" href="mailto:info@datadowell.com">商务咨询 ${icon("arrow", "button-icon")}</a></div><div class="footer-column"><h3>产品矩阵</h3>${productNav}</div><div class="footer-column"><h3>解决方案</h3>${solutionNav}<h3 class="footer-subtitle">关于我们</h3><a href="https://www.datadowell.com/about">公司介绍</a><a href="https://www.datadowell.com/news">企业动态</a></div><div class="footer-column social-column"><h3>关注我们</h3><div class="qr-list"><div class="qr-item">${qr("专属客服号")}<span>专属客服号</span></div><div class="qr-item">${qr("微信订阅号")}<span>微信订阅号</span></div></div></div></div><div class="container footer-bottom"><span>友情链接：</span><a href="cha.html">企业信息查询平台</a><a href="api.html">企业信息查询API</a><a href="zs.html">智慧招商平台</a><a href="ai.html">AI智能报告专家</a><div class="copyright"><span>Copyright © 北京笃威尔数字技术有限公司 | 五度易链</span><a href="#top">京ICP备2021019355号-4</a><a href="#top">京公网安备11010602201153</a></div></div></footer>`;
const tabs = solution.tabs.map(([label, id], index) => `<a class="${index === 0 ? "active" : ""}" href="#${id}">${label}</a>`).join("");
document.title = `${solution.title} | 五度易链`;
document.querySelector("#solution-root").innerHTML = `${header}<main id="top" class="solution-main">${renderHero()}<nav class="solution-tabs" aria-label="解决方案详情导航"><div class="container">${tabs}</div></nav>${renderSections()}</main>${footer}`;
