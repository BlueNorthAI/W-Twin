import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetManpower = () => {
  const query = useQuery({
    queryKey: ['manpower'],
    queryFn: async () => {
      const response = await client.api.manpowers.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch manpower');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
