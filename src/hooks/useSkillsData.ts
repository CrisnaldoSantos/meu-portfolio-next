import { useState, useEffect } from "react";
import { getSkillsData } from "../services/get-skills-data";
import { SkillsQueryResponse, SkillCategory } from "../services/types";

interface UseSkillsDataReturn {
  skillsData: SkillCategory[];
  loading: boolean;
  error: string | null;
}

export const useSkillsData = (): UseSkillsDataReturn => {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response: SkillsQueryResponse = await getSkillsData();

        if (response.skillCategories && response.skillCategories.length > 0) {
          setSkillsData(response.skillCategories);
        } else {
          setSkillsData([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar dados de skills:", err);
        setSkillsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  return { skillsData, loading, error };
};
