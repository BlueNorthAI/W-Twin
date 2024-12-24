import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.manpowers[":id"]["$delete"]>;

export const useDeleteManpower = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      if (!id) throw new Error("ID is required");
      const response = await client.api.manpowers[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Manpower deleted");
      queryClient.invalidateQueries({ queryKey: ["manpower", { id }] });
      queryClient.invalidateQueries({ queryKey: ["manpower"] });
    },
    onError: () => {
      toast.error("Failed to delete manpower");
    },
  });

  return mutation;
};
