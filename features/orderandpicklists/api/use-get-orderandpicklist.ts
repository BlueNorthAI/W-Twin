import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetOrderandpicklist = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["orderandpicklist", { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch orderandpicklist");
      }
      const response = await client.api.orderandpicklists[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orderandpicklist");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
