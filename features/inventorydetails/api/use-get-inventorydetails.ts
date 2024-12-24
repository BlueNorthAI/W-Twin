import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetInventorydetails = () => {
  const query = useQuery({
    queryKey: ['inventorydetails'],
    queryFn: async () => {
      const response = await client.api.inventorydetails.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch inventorydetails');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
