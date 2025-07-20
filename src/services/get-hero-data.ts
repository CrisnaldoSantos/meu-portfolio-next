import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { HeroesQueryResponse } from "./types";

export const GET_HERO_DATA = gql`
  query HeroQuery {
    heroes(first: 1) {
      id
      phrases
      presentation
      title
      description
      buttonLabel
    }
  }
`;

export const getHeroData = async (): Promise<HeroesQueryResponse> => {
  try {
    const data = await hygraphClient.request<HeroesQueryResponse>(
      GET_HERO_DATA
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do Hero:", error);
    throw error;
  }
};
