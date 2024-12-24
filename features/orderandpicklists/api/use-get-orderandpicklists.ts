import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetOrderandpicklists = () => {
  const query = useQuery({
    queryKey: ['orderandpicklist'],
    queryFn: async () => {
      const response = await client.api.orderandpicklists.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch orderandpicklists');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
