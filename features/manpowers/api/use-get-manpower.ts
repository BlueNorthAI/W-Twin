import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetManpower = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["manpower", { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch manpower");
      }
      const response = await client.api.manpowers[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch manpower");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
