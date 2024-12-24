import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetDispatchdetails = () => {
  const query = useQuery({
    queryKey: ['dispatchdetail'],
    queryFn: async () => {
      const response = await client.api.dispatchdetails.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch dispatchdetails');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
