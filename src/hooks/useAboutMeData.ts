import { useState, useEffect } from "react";
import { getAboutMeData } from "../services/get-about-me-data";
import { AboutMe } from "../lib/types";

interface UseAboutMeDataReturn {
  aboutMeData: AboutMe | null;
  loading: boolean;
  error: string | null;
}

export const useAboutMeData = (): UseAboutMeDataReturn => {
  const [aboutMeData, setAboutMeData] = useState<AboutMe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getAboutMeData();

        if (response.aboutMes && response.aboutMes.length > 0) {
          setAboutMeData(response.aboutMes[0]);
        } else {
          setError("Nenhum dado de About Me encontrado");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar dados do About Me:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutMeData();
  }, []);

  return { aboutMeData, loading, error };
};
