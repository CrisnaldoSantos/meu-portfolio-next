// Tipos para os dados do HygraphCMS

// Tipos para Hero
export interface Hero {
  id: string;
  phrases: string[];
  presentation: string;
  description: string;
  title: string;
  buttonLabel: string;
}

export interface HeroesQueryResponse {
  heroes: Hero[];
}

// Tipos para AboutMe
export interface AboutMeImage {
  url: string;
}

export interface AboutMeResume {
  html: string;
}

export interface AboutMe {
  id: string;
  image: AboutMeImage;
  resume: AboutMeResume;
}

export interface AboutMeQueryResponse {
  aboutMes: AboutMe[];
}

// Tipos para Experience
export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
  order: number;
}

export interface ExperienceQueryResponse {
  experiences: Experience[];
}

// Tipos para Skills
export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface SkillsQueryResponse {
  skillCategories: SkillCategory[];
}

// Tipos para Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsQueryResponse {
  projects: Project[];
}
