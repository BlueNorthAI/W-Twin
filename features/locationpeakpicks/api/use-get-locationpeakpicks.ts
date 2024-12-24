import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetLocationPeakpickDetails = () => {
  const query = useQuery({
    queryKey: ['locationpeakpickdetails'],
    queryFn: async () => {
      const response = await client.api.locationpeakpicks.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch locationpeakpickdetails');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
