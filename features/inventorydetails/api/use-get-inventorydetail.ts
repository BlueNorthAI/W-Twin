import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetInventorydetail = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["inventorydetail", { id }],
    queryFn: async () => {
      const response = await client.api.inventorydetails[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch inventorydetail");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
