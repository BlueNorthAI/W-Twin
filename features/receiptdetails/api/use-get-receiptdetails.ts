import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetreceiptdetail = () => {
  const query = useQuery({
    queryKey: ['receiptdetail'],
    queryFn: async () => {
      const response = await client.api.receiptdetails.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch receiptdetail');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
