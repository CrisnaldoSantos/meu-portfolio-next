// Tipos para os dados do HygraphCMS

export interface Hero {
  id: string;
  phrases: string[];
  presentation: string;
  description: string;
  title: string;
  buttonLabel?: string; // Opcional caso não exista no CMS
}

export interface HeroesQueryResponse {
  heroes: Hero[];
}

export interface MyQueryResponse {
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
