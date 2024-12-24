import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.dispatchdetails[":id"]["$delete"]>;

export const useDeleteDispatchdetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      if (!id) throw new Error("ID is required");
      const response = await client.api.dispatchdetails[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("dispatchdetail deleted");
      queryClient.invalidateQueries({ queryKey: ["dispatchdetail", { id }] });
      queryClient.invalidateQueries({ queryKey: ["dispatchdetail"] });
    },
    onError: () => {
      toast.error("Failed to delete dispatchdetail");
    },
  });

  return mutation;
};
