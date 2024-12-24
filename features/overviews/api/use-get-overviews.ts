import { useQuery } from '@tanstack/react-query';


import { client } from '@/lib/hono';

export const useGetOverviews = () => {
  const query = useQuery({
    queryKey: ['overviews'],
    queryFn: async () => {
      const response = await client.api.overviews.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch overviews');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
