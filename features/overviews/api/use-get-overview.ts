import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetOverviews = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ['overviews', { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error('ID is required to fetch overviews');
      }
      const response = await client.api.overviews[':id'].$get({
        param: { id }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch overviews');
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
