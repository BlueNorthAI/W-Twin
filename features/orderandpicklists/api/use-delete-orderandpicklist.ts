import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.orderandpicklists[":id"]["$delete"]>;

export const useDeleteOrderandpicklist = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      if (!id) throw new Error("ID is required");
      const response = await client.api.orderandpicklists[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Orderandpicklists deleted");
      queryClient.invalidateQueries({ queryKey: ["orderandpicklists", { id }] });
      queryClient.invalidateQueries({ queryKey: ["orderandpicklists"] });
    },
    onError: () => {
      toast.error("Failed to delete orderandpicklists");
    },
  });

  return mutation;
};
