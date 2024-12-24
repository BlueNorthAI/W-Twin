import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetReceiptdetail = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["receiptdetail", { id }],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch receiptdetail");
      }
      const response = await client.api.receiptdetails[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch receiptdetail");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
