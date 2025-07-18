import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { MyQueryResponse } from "./types";

// Query para buscar dados do Hero
export const GET_HERO_DATA = gql`
  query MyQuery {
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

export const getHeroData = async (): Promise<MyQueryResponse> => {
  try {
    const data = await hygraphClient.request<MyQueryResponse>(GET_HERO_DATA);
    console.log("Dados do Hero:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do Hero:", error);
    throw error;
  }
};
