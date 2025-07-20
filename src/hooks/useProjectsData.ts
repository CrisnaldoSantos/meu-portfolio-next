import { useState, useEffect } from "react";
import { getProjectsData } from "../services/get-projects-data";
import { ProjectsQueryResponse, Project } from "../services/types";

interface UseProjectsDataReturn {
  projectsData: Project[];
  loading: boolean;
  error: string | null;
}

export const useProjectsData = (): UseProjectsDataReturn => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response: ProjectsQueryResponse = await getProjectsData();

        if (response.projects && response.projects.length > 0) {
          setProjectsData(response.projects);
        } else {
          setProjectsData([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar dados de projetos:", err);
        setProjectsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, []);

  return { projectsData, loading, error };
};
