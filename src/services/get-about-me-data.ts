import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { AboutMeQueryResponse } from "../lib/types";

export const GET_ABOUT_ME_QUERY = gql`
  query AboutMeQuery {
    aboutMes(first: 1) {
      id
      image {
        url
      }
      resume {
        html
      }
    }
  }
`;

export const getAboutMeData = async (): Promise<AboutMeQueryResponse> => {
  try {
    const data = await hygraphClient.request<AboutMeQueryResponse>(
      GET_ABOUT_ME_QUERY
    );

    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do sobre mim:", error);
    throw error;
  }
};
