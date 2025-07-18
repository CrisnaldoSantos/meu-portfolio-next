// Tipos para os dados do HygraphCMS

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

export interface MyQueryResponse {
  heroes: Hero[];
}
