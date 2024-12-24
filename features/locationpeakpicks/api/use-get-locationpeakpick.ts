import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetLocationPeakpickDetails = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["locationpeakpickdetails", { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch locationpeakpickdetails");
      }
      const response = await client.api.locationpeakpicks[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch locationpeakpickdetails");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
