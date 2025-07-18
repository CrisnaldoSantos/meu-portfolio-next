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
