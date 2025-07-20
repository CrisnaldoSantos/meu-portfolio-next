import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { SkillsQueryResponse } from "./types";

export const GET_SKILLS_DATA = gql`
  query SkillsQuery {
    skillCategories(orderBy: order_ASC) {
      id
      skills
      title
    }
  }
`;

export const getSkillsData = async (): Promise<SkillsQueryResponse> => {
  try {
    const data = await hygraphClient.request<SkillsQueryResponse>(
      GET_SKILLS_DATA
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados das Skills:", error);
    throw error;
  }
};
