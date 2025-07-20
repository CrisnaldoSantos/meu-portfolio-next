import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { ExperienceQueryResponse } from "./types";

export const GET_EXPERIENCE_DATA = gql`
  query ExperiencesQuery {
    experiences(orderBy: order_DESC) {
      company
      description
      endDate
      id
      position
      startDate
      technologies
    }
  }
`;

export const getExperienceData = async (): Promise<ExperienceQueryResponse> => {
  try {
    const data = await hygraphClient.request<ExperienceQueryResponse>(
      GET_EXPERIENCE_DATA
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da Experiência:", error);
    throw error;
  }
};
