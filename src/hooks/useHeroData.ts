import { useState, useEffect } from "react";
import { getHeroData } from "../services/get-hero-data";
import { Hero } from "../services/types";

interface UseHeroDataReturn {
  heroData: Hero | null;
  loading: boolean;
  error: string | null;
}

export const useHeroData = (): UseHeroDataReturn => {
  const [heroData, setHeroData] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getHeroData();

        if (response.heroes && response.heroes.length > 0) {
          setHeroData(response.heroes[0]);
        } else {
          setError("Nenhum dado de hero encontrado");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar dados do hero:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { heroData, loading, error };
};
