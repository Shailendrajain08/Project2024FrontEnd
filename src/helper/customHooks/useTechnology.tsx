import { useEffect, useMemo, useState } from 'react';
import { Itechnology } from '../../types/shared.types';
import { getTechnologyService } from '../../services/jobPost';

export const useTechnology = (techId: string): Itechnology | null => {
  const [technology, setTechnology] = useState<Itechnology | null>(null);

  const fetchTechnology = async () => {
    try {
      const tech = await getTechnologyService(techId);
      console.log(tech);
      setTechnology(tech);
    } catch (e) {
      setTechnology(null);
    }
  };

  useEffect(() => {
    fetchTechnology();
  }, []);

  return technology;
};
