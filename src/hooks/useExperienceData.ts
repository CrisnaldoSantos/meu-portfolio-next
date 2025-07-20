import { useState, useEffect } from "react";
import { getExperienceData } from "../services/get-experience-data";
import { ExperienceQueryResponse, Experience } from "../services/types";

interface UseExperienceDataReturn {
  experienceData: Experience[];
  loading: boolean;
  error: string | null;
}

export const useExperienceData = (): UseExperienceDataReturn => {
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response: ExperienceQueryResponse = await getExperienceData();

        if (response.experiences && response.experiences.length > 0) {
          setExperienceData(response.experiences);
        } else {
          setExperienceData([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar dados de experiência:", err);
        setExperienceData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceData();
  }, []);

  return { experienceData, loading, error };
};
