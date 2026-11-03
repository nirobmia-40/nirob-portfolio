export interface PersonalInfo {
  name: string;
  monogram: string;
  roles: string[];
  tagline: string;
  supportingDescription: string;
  status: {
    available: boolean;
    text: string;
  };
  email: string;
  githubUrl: string;
  profileImage: string;
}

export interface QuickCard {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  keyLearnings: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  level?: "Core" | "Proficient" | "Exploring" | "Practical";
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string; // Empty if TODO
  githubUrl?: string; // Empty if TODO
  featured?: boolean;
}

export interface VisionInfo {
  heading: string;
  statement: string;
  pillars: {
    title: string;
    description: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}
