import { gql } from "graphql-request";
import { hygraphClient } from "../lib/hygraph";
import { ProjectsQueryResponse } from "./types";

export const GET_PROJECTS_DATA = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      technologies
      githubUrl
      liveUrl
    }
  }
`;

export const getProjectsData = async (): Promise<ProjectsQueryResponse> => {
  try {
    const data = await hygraphClient.request<ProjectsQueryResponse>(
      GET_PROJECTS_DATA
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados dos Projetos:", error);
    throw error;
  }
};
