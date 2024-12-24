import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetDispatchdetail = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["dispatchdetail", { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch dispatchdetail");
      }
      const response = await client.api.dispatchdetails[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch dispatchdetail");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
