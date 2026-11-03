import {
  PersonalInfo,
  QuickCard,
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  VisionInfo,
  NavItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Nirob Mia",
  monogram: "NM",
  roles: [
    "Independent Learner",
    "Digital Product Builder",
    "Creative Thinker",
    "Aspiring Entrepreneur",
  ],
  tagline: "Exploring technology, building creative projects, and turning ideas into opportunities.",
  supportingDescription:
    "I'm an independent learner passionate about technology, creative experimentation, and entrepreneurship. I enjoy learning new skills, building digital products, and exploring ideas that can create real-world value.",
  status: {
    available: true,
    text: "Open to collaborations & ambitious ideas",
  },
  email: "nirobmia2026@gmail.com",
  githubUrl: "https://github.com/nirobmia-40",
  profileImage: "/images/nirob-mia.png",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const aboutQuickCards: QuickCard[] = [
  {
    title: "Education",
    subtitle: "Self-taught / Independent",
    description:
      "Learning by reading, building real prototypes, and exploring open-source software and modern web architectures.",
    iconName: "GraduationCap",
  },
  {
    title: "Experience Level",
    subtitle: "Intermediate Builder",
    description:
      "Hands-on practice spanning frontend development, multimedia content, and operational small business logistics.",
    iconName: "Compass",
  },
  {
    title: "Career Direction",
    subtitle: "Entrepreneurship & Startups",
    description:
      "Focused on turning technical capabilities and creative curiosity into viable, user-focused digital businesses.",
    iconName: "Rocket",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-stationery",
    number: "01",
    title: "Stationery Business",
    category: "Business & Entrepreneurship",
    description:
      "Direct hands-on experience managing stationery business activities, sourcing and evaluating products, interacting with customers, and navigating practical ground-level business operations.",
    keyLearnings: [
      "Business Fundamentals",
      "Customer Understanding",
      "Product Management",
      "Practical Problem-Solving",
    ],
    iconName: "Store",
  },
  {
    id: "exp-youtube",
    number: "02",
    title: "YouTube Content Creator",
    category: "Content Creation & Media",
    description:
      "Explored digital storytelling, video pacing, and modern media presentation on YouTube, developing an understanding of viewer retention and visual communication.",
    keyLearnings: [
      "Content Planning",
      "Creative Thinking",
      "Digital Communication",
      "Audience Engagement",
    ],
    iconName: "Video",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Web Development",
    description: "Building responsive, modern, and accessible web interfaces.",
    skills: [
      { name: "HTML5 / Semantic Web", level: "Core" },
      { name: "Modern CSS / Tailwind", level: "Core" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "React / Next.js", level: "Practical" },
      { name: "Responsive UI Architecture", level: "Practical" },
      { name: "Git & Version Control", level: "Practical" },
    ],
  },
  {
    category: "Content Creation",
    description: "Storytelling, visual sequencing, and media presentation.",
    skills: [
      { name: "Content Planning", level: "Practical" },
      { name: "Video Content Creation", level: "Practical" },
      { name: "Creative Storytelling", level: "Exploring" },
      { name: "Digital Presentation", level: "Practical" },
      { name: "Visual Composition", level: "Exploring" },
    ],
  },
  {
    category: "Business & Marketing",
    description: "Understanding market demand, customers, and business models.",
    skills: [
      { name: "Entrepreneurship", level: "Core" },
      { name: "Business Fundamentals", level: "Practical" },
      { name: "Product Thinking", level: "Practical" },
      { name: "Marketing Basics", level: "Practical" },
      { name: "Customer Discovery", level: "Exploring" },
    ],
  },
  {
    category: "Product Building",
    description: "Taking ideas from concept to functional prototypes.",
    skills: [
      { name: "Idea Research & Validation", level: "Practical" },
      { name: "UI/UX Understanding", level: "Practical" },
      { name: "Problem Solving", level: "Core" },
      { name: "Digital Product Development", level: "Practical" },
      { name: "Rapid Prototyping", level: "Exploring" },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "odhyay",
    number: "01",
    name: "Odhyay",
    category: "Digital Reading Platform",
    description:
      "A digital reading platform focused on making educational resources, curated chapters, and reading materials intuitive and accessible for students and book enthusiasts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    image: "/images/projects/odhyay.svg",
    // TODO: Add live URL when public domain is deployed
    liveUrl: "",
    // TODO: Add public repository link if open-sourced
    githubUrl: "https://github.com/nirobmia-40",
    featured: true,
  },
  {
    id: "the-dropout-college",
    number: "02",
    name: "The Dropout College",
    category: "Learning Community",
    description:
      "A community-driven platform designed for independent learners, self-taught creators, and builders who want to acquire practical skills beyond traditional lecture halls.",
    tags: ["Community Platform", "Alternative Education", "Web Architecture"],
    image: "/images/projects/the-dropout-college.svg",
    // TODO: Add live URL when community platform launches
    liveUrl: "",
    // TODO: Add public repository link
    githubUrl: "https://github.com/nirobmia-40",
    featured: true,
  },
  {
    id: "akhra-stationary",
    number: "03",
    name: "Akhra Stationary",
    category: "Business / E-commerce",
    description:
      "A stationery-focused business initiative exploring physical product lines, digital inventory, customer ordering experience, and local e-commerce opportunities.",
    tags: ["E-Commerce", "Product Operations", "Customer Experience", "Branding"],
    image: "/images/projects/akhra-stationary.svg",
    // TODO: Add live store URL
    liveUrl: "",
    // TODO: Add repository link
    githubUrl: "https://github.com/nirobmia-40",
    featured: true,
  },
  {
    id: "clip-cutter",
    number: "04",
    name: "Clip Cutter",
    category: "Digital Product / Creative Tool",
    description:
      "A creative utility focused on streamlining video clipping workflows, helping content creators rapidly isolate highlights and prepare shorts for multi-platform distribution.",
    tags: ["Video Workflow", "Productivity Tool", "Creative Tech"],
    image: "/images/projects/clip-cutter.svg",
    // TODO: Add live web app URL
    liveUrl: "",
    // TODO: Add repository link
    githubUrl: "https://github.com/nirobmia-40",
    featured: false,
  },
  {
    id: "drop-clip",
    number: "05",
    name: "Drop Clip",
    category: "Digital Product",
    description:
      "A digital project exploring modern media sharing, instant clip transfer, and collaborative visual workflows for modern internet creators.",
    tags: ["Content Sharing", "Media Workflow", "Modern Web"],
    image: "/images/projects/drop-clip.svg",
    // TODO: Add live web app URL
    liveUrl: "",
    // TODO: Add repository link
    githubUrl: "https://github.com/nirobmia-40",
    featured: false,
  },
];

export const visionData: VisionInfo = {
  heading: "Where I'm Heading",
  statement:
    "I believe meaningful things are built through curiosity, experimentation, and consistent execution. My goal is to combine technology, creativity, and business thinking to build useful products and eventually create something bigger than myself.",
  pillars: [
    {
      title: "Self-Directed Learning",
      description:
        "Relying on curiosity, reading, and building to master modern digital disciplines without artificial boundaries.",
    },
    {
      title: "Product Execution",
      description:
        "Moving beyond theoretical knowledge to ship working prototypes, test assumptions, and learn from user feedback.",
    },
    {
      title: "Entrepreneurial Impact",
      description:
        "Building scalable ventures that solve genuine challenges and create long-term social and economic value.",
    },
  ],
};
