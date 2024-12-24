import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.inventorydetails[":id"]["$delete"]>;

export const useDeleteInventorydetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      const response = await client.api.inventorydetails[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Inventorydetail deleted");
      queryClient.invalidateQueries({ queryKey: ["inventorydetail", { id }] });
      queryClient.invalidateQueries({ queryKey: ["inventorydetails"] });
    },
    onError: () => {
      toast.error("Failed to delete inventorydetail");
    },
  });

  return mutation;
};
